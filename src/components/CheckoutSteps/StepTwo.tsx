import { FC, ChangeEvent, useState } from "react"

import {
	Button,
	Grid,
	FormControl,
	InputLabel,
	OutlinedInput,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { useForm } from "react-hook-form"

import { ShippingOption } from "../../misc/types"

type Props = {
	handleNext: (nextStep: 1 | 2 | 3) => void
	handleBack: (prevStep: 1 | 2 | 3) => void
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."

const shippingOptions: ShippingOption[] = [
	{
		method: "Lo retiraré en el local",
		prices: [
			{
				region: "Direción del Local: San José 155, Ciudad Autónoma de Buenos Aires",
				delay: "No hay.",
				price: "Sin Costo.",
			},
		],
	},
	{
		method: "Moto Mensajera",
		prices: [
			{
				region: "Ciudad Autónoma de Buenos Aires",
				delay: "De 1 a 3 días hábiles.",
				price: "$ 500",
			},
			{
				region: "Provincia / Gran Buenos Aires",
				delay: "De 1 a 5 días hábiles.",
				price: "$ 900",
			},
		],
	},
]

const useStyles = makeStyles({
	textCenter: {
		textAlign: "center",
	},
})

const StepTwo: FC<Props> = ({ handleNext, handleBack }) => {
	const classes = useStyles()

	const { register, errors, handleSubmit } = useForm()

	const [radioValue, setRadioValue] = useState(shippingOptions[0].prices[0].region)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setRadioValue((event.target as HTMLInputElement).value)
	}

	const onSubmit = (data: any) => {
		console.log("production api call")
		console.log(data)

		console.log(radioValue)

		handleNext(3)
	}

	const renderForm = () => (
		<>
			<Grid item xs={12} className={classes.textCenter}>
				<Typography variant="subtitle1">Domicilio de Envío</Typography>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Calle 1</InputLabel>
					<OutlinedInput
						label="Calle 1"
						name="streetOne"
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
						}}
						error={errors?.streetOne ? true : false}
					/>
					<Typography variant="body2" color="textSecondary">
						Especificá departamento, piso, timbre, etc., en éste campo
					</Typography>
					{errors.streetOne && (
						<Typography variant="body2">{errors.streetOne.message}</Typography>
					)}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Calle 2</InputLabel>
					<OutlinedInput
						label="Calle 2"
						name="streetTwo"
						placeholder="Opcional"
						type="text"
						inputProps={{
							ref: register({
								required: {
									value: false,
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
						error={errors?.streetTwo ? true : false}
					/>
					{errors.streetTwo && (
						<Typography variant="body2">{errors.streetTwo.message}</Typography>
					)}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Número / Altura</InputLabel>
					<OutlinedInput
						label="Número / Altura"
						name="number"
						required
						placeholder="Obligatorio"
						type="number"
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
									value: 1,
									message: minCharMessage,
								},
							}),
						}}
						error={errors?.number ? true : false}
					/>
					{errors.number && (
						<Typography variant="body2">{errors.number.message}</Typography>
					)}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Código Postal</InputLabel>
					<OutlinedInput
						label="Código Postal"
						name="postalCode"
						required
						placeholder="Obligatorio"
						type="number"
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
									value: 1,
									message: minCharMessage,
								},
							}),
						}}
						error={errors?.postalCode ? true : false}
					/>
					{errors.postalCode && (
						<Typography variant="body2">{errors.postalCode.message}</Typography>
					)}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Provincia</InputLabel>
					<OutlinedInput
						label="Provincia"
						name="state"
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
						}}
						error={errors?.state ? true : false}
					/>
					{errors.state && (
						<Typography variant="body2">{errors.state.message}</Typography>
					)}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Ciudad</InputLabel>
					<OutlinedInput
						label="Ciudad"
						name="city"
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
									value: 3,
									message: minCharMessage,
								},
							}),
						}}
						error={errors?.city ? true : false}
					/>
					{errors.city && <Typography variant="body2">{errors.city.message}</Typography>}
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Barrio / Localidad</InputLabel>
					<OutlinedInput
						label="Barrio / Localidad"
						name="town"
						placeholder="Opcional"
						type="text"
						inputProps={{
							ref: register({
								required: {
									value: false,
									message: requiredMessage,
								},
								maxLength: {
									value: 190,
									message: maxCharMessage,
								},
								minLength: {
									value: 3,
									message: minCharMessage,
								},
							}),
						}}
						error={errors?.town ? true : false}
					/>
					{errors.town && <Typography variant="body2">{errors.town.message}</Typography>}
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<Grid container justify="space-around" spacing={2}>
					<Grid item>
						<Button onClick={() => handleBack(1)}>Atrás</Button>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							disableElevation
							onClick={handleSubmit(onSubmit)}
						>
							Continuar
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container justify="space-around" spacing={4}>
				<Grid item xs={12} className={classes.textCenter} style={{ marginTop: "3rem" }}>
					<Typography variant="subtitle1">Opciones de Entrega</Typography>
				</Grid>
				{shippingOptions.map((option, index) => (
					<Grid item xs={12} key={index}>
						<Accordion
							defaultExpanded={index === 0 ? true : false}
							style={{ background: "#f3f3f3" }}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>{option.method}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container justify="space-around" spacing={4}>
									<Grid item xs={12}>
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={radioValue}
											onChange={handleChange}
										>
											{option.prices.map((price, i) => (
												<div
													key={i}
													style={{
														marginBottom: "3rem",
													}}
												>
													<FormControlLabel
														value={price.region}
														control={
															<Radio
																checked={
																	price.region === radioValue
																}
															/>
														}
														label={price.region}
													/>
													<Typography variant="body2" color="secondary">
														Costo Adicional: {price.price}
													</Typography>
													<Typography variant="body2">
														Demora de Entrega: {price.delay}
													</Typography>
												</div>
											))}
										</RadioGroup>
									</Grid>

									{index !== 0 ? (
										renderForm()
									) : (
										<Grid
											container
											justify="space-around"
											spacing={4}
											style={{ paddingBottom: 20 }}
										>
											<Grid item>
												<Button onClick={() => handleBack(1)}>Atrás</Button>
											</Grid>
											<Grid item>
												<Button
													variant="contained"
													color="primary"
													disableElevation
													onClick={() => handleNext(3)}
												>
													Continuar
												</Button>
											</Grid>
										</Grid>
									)}
								</Grid>
							</AccordionDetails>
						</Accordion>
					</Grid>
				))}
			</Grid>
		</form>
	)
}

export default StepTwo
