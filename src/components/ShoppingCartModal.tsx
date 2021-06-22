import { FC } from "react"

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	useMediaQuery,
	AppBar,
	Toolbar,
	IconButton,
} from "@material-ui/core"

import { useTheme, makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import CloseIcon from "@material-ui/icons/Close"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { toggleCartModal } from "../redux/actions/cartActions"

import CartListItems from "./CartListItems"
import DialogTransition from "./DialogTransition"

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
		grow: {
			flexGrow: 1,
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
			<Dialog
				fullScreen
				open={cart.open}
				onClose={handleClose}
				TransitionComponent={DialogTransition}
			>
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

						<div className={classes.grow} />

						<Button autoFocus variant="outlined" color="inherit" onClick={handleClose}>
							Comprar Ahora
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
				maxWidth="md"
				fullWidth
				TransitionComponent={DialogTransition}
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
					<Button
						onClick={handleClose}
						color="primary"
						autoFocus
						variant="outlined"
						size="large"
					>
						Comprar Ahora
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default ShoppingCartModal
