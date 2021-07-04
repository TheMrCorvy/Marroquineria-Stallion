import { FC, useState, useEffect } from "react"

import {
	TextField,
	Grid,
	FormControl,
	InputLabel,
	OutlinedInput,
	Typography,
	Select,
	MenuItem,
} from "@material-ui/core"

// import DateFnsUtils from "@date-io/date-fns"

// import {
// 	MuiPickersUtilsProvider,
// 	KeyboardTimePicker,
// 	KeyboardDatePicker,
// } from "@material-ui/pickers"

import { useForm } from "react-hook-form"

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const MercadoPagoCheckout: FC = () => {
	const [age, setAge] = useState("")

	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date("2014-08-18T21:11:54"))

	// const [showDate, setShowDate] = useState(false)

	const { register, errors, handleSubmit } = useForm()

	// useEffect(() => {
	// 	setShowDate(true)
	// }, [])

	const onSubmit = (data: any) => {
		console.log("production api call")
		console.log(data)
	}

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string)
	}

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container justify="space-around" spacing={4}>
				<Grid item xs={12} md={6} lg={6}>
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
				<Grid item xs={12} md={6} lg={6}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Email</InputLabel>
						<OutlinedInput
							label="Email"
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
								}),
							}}
							error={errors?.email ? true : false}
						/>
						{errors.email && (
							<Typography variant="body2">{errors.email.message}</Typography>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} md={3} lg={2}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel id="demo-simple-select-label">Tipo de Documento</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={age}
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={5} lg={4}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Número de Documento</InputLabel>
						<OutlinedInput
							label="Número de Documento"
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
				<Grid item xs={12} md={4} lg={6}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>Número de la Tarjeta</InputLabel>
						<OutlinedInput
							label="Número de la Tarjeta"
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
						<InputLabel>Nombre escrito en la Tarjeta</InputLabel>
						<OutlinedInput
							label="Nombre escrito en la Tarjeta"
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
							type="month"
							defaultValue="2017-05-24"
							fullWidth
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={3}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel>CVC (Código de Seguridad)</InputLabel>
						<OutlinedInput
							label="CVC (Código de Seguridad)"
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
									minLength: {
										value: 5,
										message: minCharMessage,
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
			</Grid>
		</form>
	)
}

export default MercadoPagoCheckout
