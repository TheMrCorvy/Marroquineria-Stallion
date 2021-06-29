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

// 1 = desktop
// 2 = mobile
// 3 = drawer
type Props = {
	layoutOption: 1 | 2 | 3
}

const requiredMessage = "Este campo es obligatorio."
const minCharMessage = "Este campo debe tener al menos 5 caractéres."
const maxCharMessage = "Este campo no puede contener más de 190 caractéres."

const FormModal: FC<Props> = ({ layoutOption }) => {
	const { register, errors, handleSubmit, getValues } = useForm()

	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const onSubmit = (data: any) => {
		console.log("production api call")
		console.log(data)
	}

	const selectButton = () => {
		if (layoutOption === 1) {
			return (
				<Button color="inherit" onClick={handleClickOpen} style={{ marginLeft: 20 }}>
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
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Pedir una cotización</DialogTitle>
					<DialogContent>
						<Grid container justify="space-around">
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth>
									<InputLabel>Nombre</InputLabel>
									<OutlinedInput
										label="nombre"
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
													value: 50,
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
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleSubmit(onSubmit)} color="primary">
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
			</form>
		</>
	)
}

export default FormModal
