import { FC, useState } from "react"

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	ListItem,
	ListItemText,
	FormControl,
	OutlinedInput,
	InputLabel,
	Grid,
	Typography,
} from "@material-ui/core"

import { useForm } from "react-hook-form"

import DialogTransition from "./DialogTransition"

// 1 = desktop
// 2 = mobile
// 3 = drawer
type Props = {
	layoutOption: 1 | 2 | 3
}

type FormInputs = {
	name: string
	phone: string
	email: string
	mail_body: string
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const placeholder =
	"Quisiera obtener información acerca de la disponibilidad y las tarifas. Necesito ayuda con lo siguiente:"

const FormModal: FC<Props> = ({ layoutOption }) => {
	const { register, errors, handleSubmit } = useForm()

	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const onSubmit = (data: FormInputs) => {
		console.log("production api call")
		console.log(data)
	}

	const selectButton = () => {
		if (layoutOption === 1) {
			return (
				<Button
					color="inherit"
					size="small"
					onClick={handleClickOpen}
					style={{ marginLeft: 20 }}
				>
					Pedir Cotización
				</Button>
			)
		}

		if (layoutOption === 2) {
			return <div onClick={handleClickOpen}>Pedir cotización</div>
		}

		return (
			<ListItem button onClick={handleClickOpen}>
				<ListItemText primary="Pedir Cotización" />
			</ListItem>
		)
	}

	return (
		<>
			{selectButton()}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
					TransitionComponent={DialogTransition}
					maxWidth="sm"
					fullWidth
				>
					<DialogTitle id="form-dialog-title">Pedir una cotización</DialogTitle>
					<DialogContent>
						<Grid container justify="space-around" spacing={2}>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth>
									<InputLabel>Nombre</InputLabel>
									<OutlinedInput
										label="Nombre"
										name="name"
										required
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
										<Typography variant="body2">
											{errors.name.message}
										</Typography>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth>
									<InputLabel>Número de Teléfono</InputLabel>
									<OutlinedInput
										label="Número de Teléfono"
										name="phone"
										required
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
										error={errors?.phone ? true : false}
									/>
									{errors.phone && (
										<Typography variant="body2">
											{errors.phone.message}
										</Typography>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth>
									<InputLabel>Correo Electrónico</InputLabel>
									<OutlinedInput
										label="Correo Electrónico"
										name="email"
										required
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
										<Typography variant="body2">
											{errors.email.message}
										</Typography>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth>
									<InputLabel>¿En qué podemos ayudarte?</InputLabel>
									<OutlinedInput
										label="¿En qué podemos ayudarte?"
										name="mail_body"
										placeholder={placeholder}
										required
										multiline
										type="text"
										inputProps={{
											ref: register({
												required: {
													value: true,
													message: requiredMessage,
												},
												minLength: {
													value: 5,
													message: minCharMessage,
												},
											}),
										}}
										error={errors?.mail_body ? true : false}
									/>
									{errors.mail_body && (
										<Typography variant="body2">
											{errors.mail_body.message}
										</Typography>
									)}
								</FormControl>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="secondary">
							Volver
						</Button>
						<Button onClick={handleSubmit(onSubmit)} color="primary" variant="outlined">
							Enviar
						</Button>
					</DialogActions>
				</Dialog>
			</form>
		</>
	)
}

export default FormModal
