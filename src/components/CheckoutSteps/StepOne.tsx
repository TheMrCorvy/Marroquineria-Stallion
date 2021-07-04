import { FC } from "react"

import { Button, Grid, FormControl, InputLabel, OutlinedInput, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import { useForm } from "react-hook-form"

type Props = {
	handleNext: (nextStep: 1 | 2 | 3) => void
	handleBack: (prevStep: 0 | 1 | 2 | 3) => void
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const useStyles = makeStyles({
	textCenter: {
		textAlign: "center",
	},
})

const StepOne: FC<Props> = ({ handleNext, handleBack }) => {
	const classes = useStyles()

	const { register, errors, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		console.log("production api call")
		console.log(data)

		handleNext(2)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container justify="space-around" spacing={4}>
				<Grid item xs={12} className={classes.textCenter}>
					<Typography variant="subtitle1">Datos de Facturación</Typography>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Nombre Completo</InputLabel>
						<OutlinedInput
							label="Nombre Completo"
							name="name"
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
							error={errors?.name ? true : false}
						/>
						{errors.name && (
							<Typography variant="body2">{errors.name.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Email / Correo Electrónico</InputLabel>
						<OutlinedInput
							label="Email / Correo Electrónico"
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
							}}
							error={errors?.email ? true : false}
						/>
						{errors.email && (
							<Typography variant="body2">{errors.email.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Teléfono de Contacto</InputLabel>
						<OutlinedInput
							label="Teléfono de Contacto"
							name="phoneNumber"
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
							error={errors?.phoneNumber ? true : false}
						/>
						{errors.phoneNumber && (
							<Typography variant="body2">{errors.phoneNumber.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>DNI o CUIL</InputLabel>
						<OutlinedInput
							label="DNI o CUIL"
							name="dniOrCuil"
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
							error={errors?.dniOrCuil ? true : false}
						/>
						{errors.dniOrCuil && (
							<Typography variant="body2">{errors.dniOrCuil.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} className={classes.textCenter}>
					<Typography variant="subtitle1">Domicilio de Facturación</Typography>
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
						{errors.city && (
							<Typography variant="body2">{errors.city.message}</Typography>
						)}
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
						{errors.town && (
							<Typography variant="body2">{errors.town.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Grid container justify="space-around" spacing={2}>
						<Grid item>
							<Button onClick={() => handleBack(0)}>Atrás</Button>
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
			</Grid>
		</form>
	)
}

export default StepOne
