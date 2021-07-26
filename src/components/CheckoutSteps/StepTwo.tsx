import { FC, ChangeEvent, useState, useEffect } from "react"

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
	CircularProgress,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { useForm } from "react-hook-form"

import { Address, Price } from "../../misc/types"

import { useDispatch } from "react-redux"
import { loadUsersShippingInfo } from "../../redux/actions/userActions"

type Props = {
	handleNext: (nextStep: 1 | 2 | 3) => void
	handleBack: (prevStep: 1 | 2 | 3) => void
}

interface ShippingOption {
	method: string
	shipping_zones: Price[]
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."

const placeholder: ShippingOption[] = [
	{
		method: "",
		shipping_zones: [
			{
				region: "",
				delay: "",
				price: "",
				id: 0,
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
	const dispatch = useDispatch()

	const classes = useStyles()

	const { register, errors, handleSubmit } = useForm()

	const [radioValue, setRadioValue] = useState("")

	const [loading, setLoading] = useState(true)

	const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>(placeholder)

	const [method, setMethod] = useState({
		shipping_zone: placeholder[0].shipping_zones[0],
		method: "",
	})

	useEffect(() => {
		getShippingOptions()
	}, [])

	const getShippingOptions = async () => {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL

		if (apiUrl) {
			const res = await fetch(apiUrl + "/get-shipping-options", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			const data = await res.json()

			if (data.shipping_options) {
				setLoading(false)

				setShippingOptions(data.shipping_options)

				setRadioValue(data.shipping_options[0].shipping_zones[0].region)

				setMethod({
					shipping_zone: data.shipping_options[0].shipping_zones[0],
					method: data.shipping_options[0].method,
				})
			}
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement

		const inputMethod = target.getAttribute("name")

		setRadioValue(target.value)

		if (inputMethod) {
			const shippingInfo = shippingOptions[Number(inputMethod)].shipping_zones.filter(
				(zone) => {
					return zone.region === target.value
				}
			)

			setMethod({
				shipping_zone: shippingInfo[0],
				method: shippingOptions[Number(inputMethod)].method,
			})
		}
	}

	const onSubmit = (data: Address) => {
		dispatch(
			loadUsersShippingInfo({
				send: true,
				shippingAddress: {
					...data,
				},
				shippingOption: method,
			})
		)

		handleNext(3)
	}

	const nextStep = () => {
		dispatch(
			loadUsersShippingInfo({
				send: false,
				shippingAddress: null,
				shippingOption: null,
			})
		)
		handleNext(3)
	}

	const renderForm = () => (
		<>
			<Grid item xs={12} className={classes.textCenter}>
				<Typography variant="subtitle1">Domicilio de Envío</Typography>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<FormControl variant="outlined" fullWidth>
					<InputLabel>Calle Principal</InputLabel>
					<OutlinedInput
						label="Calle Principal"
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
							style: {
								textTransform: "capitalize",
							},
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
					<InputLabel>Calle Secundaria</InputLabel>
					<OutlinedInput
						label="Calle Secundaria"
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
							style: {
								textTransform: "capitalize",
							},
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
							style: {
								textTransform: "capitalize",
							},
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
							style: {
								textTransform: "capitalize",
							},
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
							style: {
								textTransform: "capitalize",
							},
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

				{loading ? (
					<Grid item xs={12} className={classes.textCenter}>
						<CircularProgress />
					</Grid>
				) : (
					shippingOptions.map((option, index) => (
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
												{option.shipping_zones.map((zone, i) => (
													<div
														key={i}
														style={{
															marginBottom: "3rem",
														}}
													>
														<FormControlLabel
															value={zone.region}
															control={
																<Radio
																	checked={
																		zone.region === radioValue
																	}
																	name={"" + index}
																/>
															}
															label={zone.region}
														/>
														<Typography
															variant="body2"
															color="secondary"
														>
															Costo Adicional: {zone.price}
														</Typography>
														<Typography variant="body2">
															Demora de Entrega: {zone.delay}
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
													<Button onClick={() => handleBack(1)}>
														Atrás
													</Button>
												</Grid>
												<Grid item>
													<Button
														variant="contained"
														color="primary"
														disableElevation
														onClick={nextStep}
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
					))
				)}
			</Grid>
		</form>
	)
}

export default StepTwo
