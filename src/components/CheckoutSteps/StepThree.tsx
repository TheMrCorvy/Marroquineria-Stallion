import { FC, ChangeEvent, useState } from "react"

import { Button, Grid, AppBar, Tabs, Tab, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

type Props = {
	handleNext: (nextStep: 0 | 1 | 2 | 3 | 4) => void
	handleBack: (prevStep: 0 | 1 | 2 | 3 | 4) => void
}

const useStyles = makeStyles({
	paymentOptions: {
		borderRadius: 6,
		marginBottom: 20,
		boxShadow: "none",
	},
})

const StepThree: FC<Props> = ({ handleNext, handleBack }) => {
	const classes = useStyles()
	const [method, setMethod] = useState<0 | 1>(0)

	const handleChange = (event: ChangeEvent<{}>, newValue: 0 | 1) => {
		setMethod(newValue)
	}

	const renderPanels = () => {
		if (method) {
			return <Typography>Pagar en Efectivo</Typography>
		} else {
			return <Typography>Pagar Online</Typography>
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
			<Grid item xs={12}>
				<Grid container justify="space-around" spacing={4}>
					<Grid item>
						<Button onClick={() => handleBack(2)}>Atrás</Button>
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary" onClick={() => handleNext(4)}>
							Finalizar
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default StepThree
