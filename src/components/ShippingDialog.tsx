import { FC, useState } from "react"

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
	ListItemText,
	Typography,
	Divider,
} from "@material-ui/core"

import { useTheme, makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import CloseIcon from "@material-ui/icons/Close"

import DialogTransition from "./DialogTransition"

interface Props {
	layout: 1 | 2 | 3
	className?: any
}

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
		marginTop: {
			marginTop: 30,
		},
	})
)

const ShippingDialog: FC<Props> = ({ layout, className }) => {
	const [open, setOpen] = useState(false)

	const theme = useTheme()

	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

	const classes = useStyles()

	const toggleDialog = () => {
		setOpen(!open)
	}

	const renderBtn = () => {
		if (layout === 1) {
			return (
				<Button color="inherit" size="small" className={className} onClick={toggleDialog}>
					Envíos
				</Button>
			)
		}
		if (layout === 2) {
			return <div onClick={toggleDialog}>Envios</div>
		}

		return <ListItemText primary="Envíos" onClick={toggleDialog} />
	}

	const renderDialog = () => {
		if (smallScreen) {
			return (
				<Dialog
					fullScreen
					open={open}
					onClose={toggleDialog}
					scroll="body"
					TransitionComponent={DialogTransition}
				>
					<AppBar className={classes.appBar} position="fixed">
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								onClick={toggleDialog}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>

							<div className={classes.grow} />

							<Button color="inherit" onClick={toggleDialog}>
								Volver
							</Button>
						</Toolbar>
					</AppBar>

					<DialogContent className={classes.mobileDialogContent}>
						<Typography variant="h5" paragraph gutterBottom>
							Información de Envíos
						</Typography>
						{dialogContent()}
					</DialogContent>
				</Dialog>
			)
		} else {
			return (
				<Dialog
					open={open}
					onClose={toggleDialog}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					maxWidth="md"
					fullWidth
					scroll="body"
					TransitionComponent={DialogTransition}
				>
					<DialogTitle id="alert-dialog-title" className={classes.dialog}>
						Información de Envíos
						<Button color="secondary" style={{ float: "right" }} onClick={toggleDialog}>
							Volver
						</Button>
					</DialogTitle>
					<DialogContent className={classes.dialog}>{dialogContent()}</DialogContent>
					<DialogActions className={classes.dialog}>
						<Button onClick={toggleDialog} color="secondary">
							Volver
						</Button>
					</DialogActions>
				</Dialog>
			)
		}
	}

	const dialogContent = () => {
		return (
			<>
				<Typography variant="h6" paragraph gutterBottom>
					Retiro en Tienda
				</Typography>
				<Typography variant="body2" paragraph>
					Brindamos la opción de retiro en nuestra tienda. De este modo usted puede
					realizar la compra desde la comodidad de su hogar, seleccionar la opción de
					entrega en la tienda, y recibirá un aviso indicandole el número de pedido para
					que pase a retirar su mercadería cuando guste.
				</Typography>
				<Typography variant="body2" paragraph>
					En caso de necesitar realizar una devolución, también deberá acudir a la para
					que podamos asesorarle.
				</Typography>

				<Divider className={classes.marginTop} />

				<Typography variant="h6" paragraph gutterBottom className={classes.marginTop}>
					Envíos a Todo el País
				</Typography>
				<Typography variant="body2" paragraph>
					Estamos realizando envíos a domicilio en todo el país por medio de Correo
					Argentino. El tiempo estimado de entrega es de 5 a 7 días hábiles dependiendo de
					la demanda que tenga el correo en su momento.
				</Typography>
				<Typography variant="body2" paragraph>
					Antes de concretar la compra usted deberá seleccionar el tipo de envío y el
					sistema le mostrará el costo del mismo. Luego de realizar la compra le
					enviaremos un código de seguimiento para consultar el estado del paquete en la
					página web de Correo Argentino.
				</Typography>

				<Divider className={classes.marginTop} />

				<Typography variant="h6" paragraph gutterBottom className={classes.marginTop}>
					Reclamos, Cambios, y Devoluciones
				</Typography>
				<Typography variant="body2" paragraph>
					Para devoluciones o cambios de productos adquiridos en
					www.stallionmarroquineria.com deberás hacer tu reclamo a nuestro Servicio de
					Atención al Cliente (at.clientes@stallionmarroquineria.com) o al teléfono 011
					4381-6833.
				</Typography>
				<Typography variant="body2" paragraph>
					A partir del momento en que recibís tu pedido, tenés 10 días corridos para
					realizar el reclamo correspondiente.
				</Typography>
				<Typography variant="body2" paragraph>
					Para devoluciones o cambios de productos adquiridos en nuestra tienda deberás
					acercarte personalmente con el ticket o código de compra, dentro del plazo de 10
					días de realizada la mísma.
				</Typography>

				<Divider className={classes.marginTop} />

				<Typography variant="h6" paragraph gutterBottom className={classes.marginTop}>
					Condiciones y Estado de los Productos a Devolver:
				</Typography>
				<ul>
					<li className={classes.marginTop}>
						<Typography variant="body2">
							Todos los productos deberán ser devueltos en las mismas condiciones en
							que fueron recibidos, y sin uso alguno.
						</Typography>
					</li>
					<li className={classes.marginTop}>
						<Typography variant="body2">
							Los productos devueltos deberán entregarse junto a los embalajes
							originales y en perfecto estado de conservación, con los accesorios,
							manuales e instructivos del mismo. En el caso de productos recibidos por
							error, los embalajes deberán estar intactos, sin abrir.
						</Typography>
					</li>
					<li className={classes.marginTop}>
						<Typography variant="body2">
							Por favor contá la cantidad de cajas/bultos que recibas, y verificá que
							coincida con lo informado en la factura/remito.
						</Typography>
					</li>
					<li className={classes.marginTop}>
						<Typography variant="body2">
							Los reclamos por errores de facturación deberán efectuarse en forma
							expresa dentro de los 10 días hábiles de recibida la factura.
						</Typography>
					</li>
				</ul>
			</>
		)
	}

	return (
		<>
			{renderBtn()}
			{renderDialog()}
		</>
	)
}

export default ShippingDialog
