import { FC } from "react"

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	AppBar,
	Toolbar,
	Typography,
	List,
	ListItem,
	ListItemText,
	Divider,
	IconButton,
} from "@material-ui/core"

import { useTheme, makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import CloseIcon from "@material-ui/icons/Close"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { toggleCartModal } from "../redux/actions/cartActions"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			position: "relative",
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
		},
	})
)

const ShoppingCartModal: FC = () => {
	const dispatch = useDispatch()

	const { cart } = useSelector((state: RootState) => state.cart)

	const theme = useTheme()

	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

	const classes = useStyles()

	const handleClose = () => {
		dispatch(toggleCartModal(false))
	}

	if (smallScreen) {
		return (
			<Dialog fullScreen open={cart.open} onClose={handleClose}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Sound
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<List>
					<ListItem button>
						<ListItemText primary="Phone ringtone" secondary="Titania" />
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemText primary="Default notification ringtone" secondary="Tethys" />
					</ListItem>
				</List>
			</Dialog>
		)
	} else {
		return (
			<Dialog
				open={cart.open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Use Google's location service?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous
						location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default ShoppingCartModal
