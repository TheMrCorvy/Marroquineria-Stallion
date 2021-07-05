import { FC, useState, useEffect } from "react"

import {
	TextField,
	Grid,
	FormControl,
	Typography,
	Select,
	MenuItem,
	Button,
} from "@material-ui/core"

import { useForm } from "react-hook-form"

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

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const MercadoPagoCheckout: FC = () => {
	const [age, setAge] = useState("")

	const [cardToken, setCardToken] = useState("")

	const { register, errors, handleSubmit } = useForm()

	useEffect(() => {
		window.Mercadopago.setPublishableKey(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY)

		window.Mercadopago.getIdentificationTypes()
	}, [])

	const onSubmit = (data: FormData) => {
		console.log("production api call")
		console.log(data)

		// mercadoPago.setPublishableKey(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY)

		// mercadoPago.getIdentificationTypes()

		const cardNetwork = getCardNetwork(data.cardNumber)

		const cardToken = getCardToken()
	}

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string)
	}

	const getCardNetwork = async (bin: string) => {
		return await window.Mercadopago.getPaymentMethod(
			{
				bin: bin.substring(0, 6),
			},
			(status: unknown, response: any) => {
				console.log(response[0].id)
				console.log(status)

				setCardToken(response[0].id)
			}
		)
	}

	const getCardToken = () => {
		const mercadoPagoForm = document.getElementById("paymentForm")

		if (mercadoPagoForm) {
			window.Mercadopago.createToken(mercadoPagoForm, (status: number, response: any) => {
				if (status != 200 && status != 201) {
					// response.cause[0].description descripcion del error
				} else {
					// el token de la tarjeta es response.id
				}
			})
		}
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
						<TextField
							id="date"
							variant="filled"
							name="cardExpiresOn"
							type="month"
							inputProps={{
								ref: register({
									required: {
										value: true,
										message: requiredMessage,
									},
								}),
							}}
							error={errors?.cardExpiresOn ? true : false}
							fullWidth
						/>

						{errors.cardExpiresOn && (
							<Typography variant="body2">{errors.cardExpiresOn.message}</Typography>
						)}
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
				<Grid item xs={12} style={{ textAlign: "center", marginTop: "3rem" }}>
					<Button
						variant="contained"
						color="secondary"
						disableElevation
						size="large"
						onClick={handleSubmit(onSubmit)}
					>
						Finalizar
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}

export default MercadoPagoCheckout
