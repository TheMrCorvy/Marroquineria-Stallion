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
import CartListItems from "./CartListItems"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			position: "relative",
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
		},
		mobileDialogContent: {
			paddingTop: 35,
			minHeight: "100%",
			backgroundColor: "#f5f5f5",
		},
		dialog: {
			backgroundColor: "#f5f5f5",
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
				<AppBar className={classes.appBar} position="fixed">
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
							Carrito
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							Comprar
						</Button>
					</Toolbar>
				</AppBar>

				<DialogContent className={classes.mobileDialogContent}>
					<CartListItems />
				</DialogContent>
			</Dialog>
		)
	} else {
		return (
			<Dialog
				open={cart.open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="lg"
			>
				<DialogTitle id="alert-dialog-title" className={classes.dialog}>
					Carrito de Compras
				</DialogTitle>
				<DialogContent className={classes.dialog}>
					<CartListItems />
				</DialogContent>
				<DialogActions className={classes.dialog}>
					<Button onClick={handleClose} color="secondary">
						Volver
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Comprar Ahora
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default ShoppingCartModal
