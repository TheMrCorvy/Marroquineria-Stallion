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

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const MercadoPagoCheckout: FC = () => {
	const [age, setAge] = useState("")

	const { register, errors, handleSubmit } = useForm()

	useEffect(() => {
		console.log(window.Mercadopago)
	}, [])

	const onSubmit = (data: any) => {
		console.log("production api call")
		console.log(data)
	}

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
							}}
							error={errors?.email ? true : false}
						/>
						{errors.email && (
							<Typography variant="body2">{errors.email.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Tipo de Documento</Typography>
						<Select variant="filled" value={age} onChange={handleChange}>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={5} lg={4}>
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
							}}
							error={errors?.dni ? true : false}
						/>
						{errors.dni && (
							<Typography variant="body2">{errors.dni.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={5}>
					<FormControl variant="outlined" fullWidth>
						<Typography>Número de la Tarjeta</Typography>
						<TextField
							variant="filled"
							name="card"
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
							error={errors?.card ? true : false}
						/>
						{errors.card && (
							<Typography variant="body2">{errors.card.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={5}>
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
							}}
							error={errors?.cardName ? true : false}
						/>
						{errors.cardName && (
							<Typography variant="body2">{errors.cardName.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
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
				<Grid item xs={12} md={3}>
					<FormControl variant="outlined" fullWidth>
						<Typography>CVC (Código de Seguridad)</Typography>
						<TextField
							variant="filled"
							name="cardExpiresOn"
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
							}}
							error={errors?.cardExpiresOn ? true : false}
						/>
						{errors.cardExpiresOn && (
							<Typography variant="body2">{errors.cardExpiresOn.message}</Typography>
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
