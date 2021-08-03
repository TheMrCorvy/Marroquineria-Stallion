import { FC, useState } from "react"

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	ListItemText,
	Typography,
	Divider,
} from "@material-ui/core"

import DialogTransition from "./DialogTransition"

const HowToBuy: FC = () => {
	const [open, setOpen] = useState(false)

	const toggleDialog = () => {
		setOpen(!open)
	}

	return (
		<>
			<ListItemText primary="¿Cómo Comprar?" onClick={toggleDialog} />
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
				<DialogTitle id="alert-dialog-title">¿Cómo Comprar?</DialogTitle>
				<DialogContent>
					<Typography variant="body1" paragraph gutterBottom>
						Elige el producto que deseas comprar.
					</Typography>
					<Divider />
					<ol>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2">
								Haz clic en el botón de &quot;Agregar al Carrito&quot;. Esto
								agregará el producto a tu carrito.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2" paragraph>
								Puedes ver el contenido de tu Carrito de Compras haciendo click en
								el ícono del carrito ubicado arriba a la derecha.
							</Typography>
							<Typography variant="body2">
								O, si estás visitandonos desde tu celular, encontrarás el ícono del
								Carrito de Compras haciendo click en el ícono de
								&quot;opciones&quot; arriba a la derecha.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2">
								Puedes seguir agregando otros productos a tu carrito, o sino haz
								clic en &quot;Comprar Ahora&quot; dentro de tu Carrito de Compras.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2">
								Completa con tus datos de facturación, y haz click en
								&quot;Continuar&quot;.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2" paragraph>
								Elige el método de envío que desees, y completa con los datos de la
								dirección en la que quieras recibir tus productos.
							</Typography>
							<Typography>
								Los envíos los realizamos mediante Moto Mensajera para CABA, y GBA,
								o también por Correo Aregntino a cualquier parte del país.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2">
								Elige el medio de pago, y completa con tus datos, de ser necesario.
								Una vez hecho esto, haz click en &quot;Finalizar Compra&quot;.
							</Typography>
						</li>
						<li style={{ marginBottom: 20 }}>
							<Typography variant="body2" paragraph>
								Una vez acreditado el pago, recibirás un email confirmando que tu
								compra ya fue procesada. Luego de eso, haremos el envío
								correspondiente de los productos que hayas comprado.
							</Typography>
							<Typography variant="body2">
								En caso de haber elegido la opción de retirar tus productos en
								persona en el local, podrás hacerlo en cualquier momento a partir de
								que hayas recibido el email de confirmación, y dentro de los
								horarios de atención.
							</Typography>
						</li>
					</ol>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleDialog} color="secondary">
						Volver
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default HowToBuy
