import { FC, ChangeEvent, useState } from "react"

import { Button, Grid, AppBar, Tabs, Tab, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import MercadoPagoCheckout from "./MercadoPagoCheckout"

type Props = {
	handleNext: (nextStep: 1 | 2 | 3) => void
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
})

const StepThree: FC<Props> = ({ handleNext, handleBack }) => {
	const classes = useStyles()

	// 0 = mercadopago 1 = pago en efectivo
	const [method, setMethod] = useState<0 | 1>(0)

	const handleChange = (event: ChangeEvent<{}>, newValue: 0 | 1) => {
		setMethod(newValue)
	}

	const renderPanels = () => {
		if (!method) {
			return <MercadoPagoCheckout />
		} else {
			return (
				<Grid container justify="center" spacing={4} className={classes.payWithCash}>
					<Grid item>
						<Button variant="contained" disableElevation color="secondary">
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
		</>
	)
}

export default StepThree
