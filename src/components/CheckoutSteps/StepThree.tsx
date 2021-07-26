import { FC, ChangeEvent, useState } from "react"

import {
	Button,
	Grid,
	AppBar,
	Tabs,
	Tab,
	DialogTitle,
	Dialog,
	DialogContent,
	CircularProgress,
	Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import MercadoPagoCheckout from "./MercadoPagoCheckout"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

type Props = {
	handleBack: (prevStep: 1 | 2 | 3) => void
}

const useStyles = makeStyles({
	paymentOptions: {
		borderRadius: 6,
		marginBottom: 20,
		boxShadow: "none",
	},
	payWithCash: {
		padding: "4rem",
	},
	marginTop: {
		marginTop: "4rem",
	},
	center: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		alignItems: "center",
		verticalAlign: "center",
		paddingTop: "3rem",
		paddingBottom: "3rem",
	},
})

const StepThree: FC<Props> = ({ handleBack }) => {
	const user = useSelector((state: RootState) => state.user)
	const { cart } = useSelector((state: RootState) => state.cart)

	const classes = useStyles()

	// 0 = mercadopago 1 = pago en efectivo
	const [method, setMethod] = useState<0 | 1>(0)

	const [dialog, setDialog] = useState({
		loading: false,
		message: "",
	})

	const handleChange = (event: ChangeEvent<{}>, newValue: 0 | 1) => {
		setMethod(newValue)
	}

	const payWithCash = async () => {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL

		if (apiUrl) {
			setDialog({
				loading: true,
				message:
					"Por favor espere mientras procesamos todos los datos. Esto puede demorar unos momentos.",
			})

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
				method: "cash",
				billing_info: JSON.stringify(billingInfo),
				shipping_info: JSON.stringify(shippingInfo),
				total_price: totalPrice,
				cart_items: cartItems,
				email: user.email,
				shipping_option_id: user.shipping.shippingOption
					? user.shipping.shippingOption.shipping_zone.id
					: 1,
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

			console.log(data)

			setDialog({
				loading: true,
				message: data.message,
			})

			setTimeout(() => {
				//dispatch to clear the cart items
			}, 15000)
		}
	}

	const handleClose = () => {
		setDialog({
			loading: false,
			message: dialog.message,
		})
		// dispatch to clear cart items
	}

	const handleLoading = (message: string, loading: boolean) => {
		if (!loading) {
			setDialog({
				loading: true,
				message,
			})
			setTimeout(() => {
				setDialog({
					loading,
					message,
				})

				//dispatch to clear the cart items
			}, 15000)
		} else {
			setDialog({ loading, message })
		}
	}

	const renderPanels = () => {
		if (!method) {
			return <MercadoPagoCheckout onLoading={handleLoading} />
		} else {
			return (
				<Grid container justify="center" spacing={4} className={classes.payWithCash}>
					<Grid item>
						<Button
							variant="contained"
							disableElevation
							color="secondary"
							onClick={payWithCash}
							disabled={dialog.loading}
						>
							Finalizar Compra
						</Button>
					</Grid>
				</Grid>
			)
		}
	}

	return (
		<>
			<Grid item xs={12}>
				<AppBar position="static" className={classes.paymentOptions}>
					<Tabs
						value={method}
						onChange={handleChange}
						aria-label="haz click para seleccionar el medio de pago"
						centered
					>
						<Tab label="Pagar Online" />
						<Tab label="Pagar en efectivo" />
					</Tabs>
				</AppBar>
				{renderPanels()}
			</Grid>
			<Grid item xs={12} className={classes.marginTop}>
				<Grid container justify="space-around" spacing={4}>
					<Grid item>
						<Button variant="outlined" onClick={() => handleBack(2)}>
							Atrás
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Dialog
				onClose={handleClose}
				aria-labelledby="simple-dialog-title"
				open={dialog.loading}
				fullWidth
				maxWidth="xl"
			>
				<DialogTitle id="simple-dialog-title">
					Por favor espere mientras procesamos todos los datos.
				</DialogTitle>
				<DialogContent className={classes.center}>
					<Grid container justify="center">
						<Grid item xs={12} className={classes.center} style={{ paddingTop: 0 }}>
							<CircularProgress color="secondary" />
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body2">{dialog.message}</Typography>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default StepThree
