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
} from "@material-ui/core"

// 1 = desktop
// 2 = mobile
// 3 = drawer
type Props = {
	layoutOption: 1 | 2 | 3
}

const FormModal: FC<Props> = ({ layoutOption }) => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
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
			return <MenuItem onClick={handleClickOpen}>Pedir cotización</MenuItem>
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
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Pedir una cotización</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default FormModal
