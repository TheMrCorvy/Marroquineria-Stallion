import { FC, useState, useEffect } from "react"

import { TextField, Grid, FormControl, Typography, Button } from "@material-ui/core"

import { useForm } from "react-hook-form"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

declare global {
	interface Window {
		Mercadopago: any
	}
}

interface FormData {
	name: string
	email: string
	dni: string
	cardNumber: string
	cardName: string
	cardExpiresOn: string
	securityCode: string
}

interface Props {
	onLoading: (message: string, loading: boolean) => void
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const MercadoPagoCheckout: FC<Props> = ({ onLoading }) => {
	const user = useSelector((state: RootState) => state.user)
	const { cart } = useSelector((state: RootState) => state.cart)

	const [docType, setDocType] = useState("DNI")

	const [cardToken, setCardToken] = useState("")

	const [cardNetwork, setCardNetwork] = useState("")

	const [loading, setLoading] = useState(false)

	const { register, errors, handleSubmit } = useForm()

	useEffect(() => {
		window.Mercadopago.setPublishableKey(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY)

		window.Mercadopago.getIdentificationTypes()
	}, [])

	useEffect(() => {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL

		if (cardNetwork && cardToken && apiUrl) {
			payWithMercadopago(apiUrl)
		}
	}, [cardNetwork, cardToken])

	const payWithMercadopago = async (apiUrl: string) => {
		const billingInfo = {
			name: user.name,
			email: user.email,
			dni_or_cuil: user.dniOrCuil,
			billing_address: user.billingAddress,
		}

		const shippingInfo = {
			name: user.name,
			email: user.email,
			phone_number: user.phoneNumber,
			send: user.shipping.send,
			shipping_address: user.shipping.shippingAddress,
			shipping_option: {
				method: user.shipping.shippingOption?.method,
				region: user.shipping.shippingOption?.shipping_zone.region,
				shipping_id: user.shipping.shippingOption?.shipping_zone.id,
			},
		}

		let totalPrice: number = 0

		cart.products.forEach((product) => {
			totalPrice += product.units * Number(product.product.price)
		})

		const cartItems = cart.products.map((product) => {
			return {
				id: product.product.id,
				amount: product.units,
			}
		})

		const bodyRequest = {
			method: "mercadopago",
			billing_info: JSON.stringify(billingInfo),
			shipping_info: JSON.stringify(shippingInfo),
			total_price: totalPrice,
			cart_items: cartItems,
			email: user.email,
			shipping_option_id: user.shipping.shippingOption
				? user.shipping.shippingOption.shipping_zone.id
				: 1,
			card_network: cardNetwork,
			card_token: cardToken,
		}

		const res = await fetch(apiUrl + "/buy", {
			body: JSON.stringify(bodyRequest),
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})

		const data = await res.json()

		console.log("***********")
		console.log(data)
		console.log("***********")

		setCardNetwork("")
		setCardToken("")

		onLoading(data.message, false)
	}

	const onSubmit = async (data: FormData) => {
		setLoading(true)

		onLoading(
			"Por favor espere mientras procesamos todos los datos. Esto puede demorar unos momentos.",
			true
		)

		getCardNetwork(data.cardNumber)

		getCardToken()
	}

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setDocType(event.target.value as string)
	}

	const getCardNetwork = async (bin: string) => {
		await window.Mercadopago.getPaymentMethod(
			{
				bin,
			},
			(status: number, response: any) => {
				if (status !== 200 && status !== 201) {
					console.log("hubo un error")
					console.log(response)
				} else {
					setCardNetwork(response[0].id)
				}

				// console.log(response)
			}
		)
	}

	const getCardToken = async () => {
		const mercadoPagoForm = document.getElementById("paymentForm")

		return await window.Mercadopago.createToken(
			mercadoPagoForm,
			(status: number, response: any) => {
				if (status != 200 && status != 201) {
					console.log(response.cause[0].description)
				} else {
					setCardToken(response.id)
				}
				// console.log(response)
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} id="paymentForm">
			<Grid container justify="space-around" spacing={4}>
				<Grid item xs={12} md={6} lg={6}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Nombre Completo</Typography>
						<TextField
							name="name"
							required
							placeholder="Obligatorio"
							type="text"
							variant="filled"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
									minLength: {
										value: 5,
										message: minCharMessage,
									},
								}),
							}}
							error={errors?.name ? true : false}
						/>
						{errors.name && (
							<Typography variant="body2">{errors.name.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Email</Typography>
						<TextField
							variant="filled"
							name="email"
							required
							placeholder="Obligatorio"
							type="email"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
									minLength: {
										value: 5,
										message: minCharMessage,
									},
									pattern: {
										message: "El email ingresado debe ser válido.",
										value: emailPattern,
									},
								}),
								"data-checkout": "cardholderEmail",
							}}
							error={errors?.email ? true : false}
						/>
						{errors.email && (
							<Typography variant="body2">{errors.email.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Tipo de Documento</Typography>
						<select
							id="docType"
							name="docType"
							data-checkout="docType"
							style={{
								paddingRight: 32,
								borderRadius: 4,
								cursor: "pointer",
								padding: "18.5px 14px",
								background: "rgba(0, 0, 0, 0.09)",
								border: "none",
							}}
							onChange={handleChange}
						></select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Número de Documento</Typography>
						<TextField
							variant="filled"
							name="dni"
							required
							placeholder="Obligatorio"
							type="text"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
									minLength: {
										value: 5,
										message: minCharMessage,
									},
								}),
								"data-checkout": "docNumber",
							}}
							error={errors?.dni ? true : false}
						/>
						{errors.dni && (
							<Typography variant="body2">{errors.dni.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={5}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Número de la Tarjeta</Typography>
						<TextField
							variant="filled"
							name="cardNumber"
							required
							placeholder="Obligatorio"
							type="text"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
									minLength: {
										value: 5,
										message: minCharMessage,
									},
								}),
								"data-checkout": "cardNumber",
							}}
							error={errors?.cardNumber ? true : false}
						/>
						{errors.cardNumber && (
							<Typography variant="body2">{errors.cardNumber.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={5}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Nombre escrito en la Tarjeta</Typography>
						<TextField
							variant="filled"
							name="cardName"
							required
							placeholder="Obligatorio"
							type="text"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
									minLength: {
										value: 5,
										message: minCharMessage,
									},
								}),
								"data-checkout": "cardholderName",
							}}
							error={errors?.cardName ? true : false}
						/>
						{errors.cardName && (
							<Typography variant="body2">{errors.cardName.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Fecha de Vencimiento de la Tarjeta</Typography>
						<Grid container justify="space-between" spacing={4}>
							<Grid item xs={6}>
								<TextField
									variant="filled"
									name="cardExpirationMonth"
									label="Mes (MM)"
									required
									placeholder="Obligatorio"
									type="text"
									inputProps={{
										ref: register({
											required: {
												value: true,
												message: requiredMessage,
											},
											maxLength: {
												value: 190,
												message: maxCharMessage,
											},
										}),
										"data-checkout": "cardExpirationMonth",
									}}
									error={errors?.cardExpirationMonth ? true : false}
								/>
								{errors.cardExpirationMonth && (
									<Typography variant="body2">
										{errors.cardExpirationMonth.message}
									</Typography>
								)}
							</Grid>
							<Grid item xs={6}>
								<TextField
									variant="filled"
									name="cardExpirationYear"
									label="Año (YY)"
									required
									placeholder="Obligatorio"
									type="text"
									inputProps={{
										ref: register({
											required: {
												value: true,
												message: requiredMessage,
											},
											maxLength: {
												value: 190,
												message: maxCharMessage,
											},
										}),
										"data-checkout": "cardExpirationYear",
									}}
									error={errors?.cardExpirationYear ? true : false}
								/>
								{errors.cardExpirationYear && (
									<Typography variant="body2">
										{errors.cardExpirationYear.message}
									</Typography>
								)}
							</Grid>
						</Grid>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={3}>
					<FormControl variant="outlined" fullWidth>
						<Typography>CVC (Código de Seguridad)</Typography>
						<TextField
							variant="filled"
							name="securityCode"
							required
							placeholder="Obligatorio"
							type="text"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
									maxLength: {
										value: 190,
										message: maxCharMessage,
									},
								}),
								"data-checkout": "securityCode",
							}}
							error={errors?.securityCode ? true : false}
						/>
						{errors.securityCode && (
							<Typography variant="body2">{errors.securityCode.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} style={{ textAlign: "center" }}>
					<Typography variant="body2">
						Este formulario fue proveido por{" "}
						<Typography
							component="span"
							variant="body2"
							color="primary"
							style={{ textDecoration: "underline" }}
						>
							MercadoPago
						</Typography>{" "}
						para mantener a salvo los datos de tu tarjeta e identidad.
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ textAlign: "center", marginTop: "3rem" }}>
					<Button
						variant="contained"
						color="secondary"
						disableElevation
						size="large"
						onClick={handleSubmit(onSubmit)}
						disabled={loading}
					>
						Finalizar Compra
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}

export default MercadoPagoCheckout
