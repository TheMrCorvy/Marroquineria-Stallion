import Image from "next/image"

import { Container, Grid, Typography, Divider, Hidden, Card, CardContent } from "@material-ui/core"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import PaymentIcon from "@material-ui/icons/Payment"

import ListProductsSection from "../components/ListProductsSection"
import ImageBanner from "../components/ImageBanner"
import ProductsOnSaleSection from "../components/ProductsOnSaleSection"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textCenter: {
			textAlign: "center",
		},
		image: {
			maxHeight: "100%",
			maxWidth: "100%",
			borderRadius: 15,
		},
		imgContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 15,
			padding: 10,
		},
		galeryContainer: {
			marginTop: "3rem",
			[theme.breakpoints.down("sm")]: {
				marginTop: "-3rem",
			},
		},
		title: {
			marginTop: "3rem",
			fontFamily: "Roboto Slab, serif",
		},
		subtitle: {
			textDecoration: "underline",
		},
		contactContainer: {
			marginTop: "3rem",
			marginBottom: "3rem",
			borderRadius: 15,
			backgroundColor: "#f5f5f5",
			padding: 50,
		},
		map: {
			border: 0,
			borderRadius: 15,
			width: "100%",
			paddingTop: "3rem",
			paddingBottom: "3rem",
		},
		contactInfo: {
			textAlign: "center",
			marginTop: 50,
		},
		media: {
			height: 0,
			paddingTop: "56.52%", // 16:9
		},
		maxWidthHeight: {
			width: "100%",
			height: "100%",
		},
		bigImg: {
			height: "25rem",
			width: "100%",
		},
		infoContainer: {
			background: "#f5f5f5",
			marginTop: "3rem",
			paddingTop: "2rem",
			paddingBottom: "2rem",
		},
		infoCard: {
			borderTop: "6px solid #0556f3",
			borderRadius: 15,
			position: "relative",
			minHeight: "100%",
			display: "flex",
			alignItems: "center",
			verticalAlign: "center",
		},
		infoIcon: {
			borderTopLeftRadius: 15,
			borderBottomRightRadius: 15,
			height: "40px",
			width: "40px",
			position: "absolute",
			bottom: 0,
			right: 0,
			background: "#0556f3",
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			color: "white",
			verticalAlign: "center",
			alignItems: "center",
		},
		marginTop: {
			marginTop: "3rem",
		},
	})
)

export default function Home() {
	const classes = useStyles()
	return (
		<>
			<Container maxWidth="lg" className={classes.galeryContainer}>
				<Grid container justify="space-around">
					<Grid item xs={12} md={4} lg={3} className={classes.imgContainer}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Hidden xsDown>
									<Typography variant="h2" className={classes.title}>
										STALLION MARROQUINERÍA
									</Typography>
								</Hidden>
								<Hidden smUp>
									<Typography variant="h5" className={classes.title}>
										STALLION MARROQUINERÍA
									</Typography>
								</Hidden>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="subtitle1">
									Tienda de Marroquinería en Ciudad Autónoma de Buenos Aires
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={8} md={4} lg={3} className={classes.imgContainer}>
						<Image
							src={require("../../public/images/logo.png")}
							alt="Tienda online de Marroquinería Stallion"
							className={classes.image}
						/>
					</Grid>
				</Grid>
				<Grid container justify="space-around" className={classes.galeryContainer}>
					<Hidden xsDown>
						<Grid item xs={12} md={6}>
							<ImageBanner />
						</Grid>
					</Hidden>

					<Grid item xs={12} md={4} lg={3} className={classes.imgContainer}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Hidden xsDown>
									<Typography variant="h2" className={classes.title}>
										Somos Fabricantes
									</Typography>
								</Hidden>
								<Hidden smUp>
									<Typography variant="h5" className={classes.title}>
										Somos Fabricantes
									</Typography>
								</Hidden>
							</Grid>
						</Grid>
					</Grid>

					<Hidden smUp>
						<Grid item xs={12} md={4} className={classes.imgContainer}>
							<Grid item xs={12} md={6}>
								<ImageBanner />
							</Grid>
						</Grid>
					</Hidden>
				</Grid>
			</Container>
			<Container maxWidth="xl" className={classes.infoContainer}>
				<Grid container justify="space-around" spacing={4}>
					<Grid item xs={12} md={6} lg={3} xl={2}>
						<Card className={classes.infoCard}>
							<CardContent>
								<Typography variant="h6" paragraph gutterBottom>
									Precios
								</Typography>
								<Typography variant="body2" paragraph gutterBottom>
									Temenos los mejores precios disponibles, de las mejores marcas
									en el mercado
								</Typography>
							</CardContent>
							<div className={classes.infoIcon}>
								<MonetizationOnIcon />
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} xl={2}>
						<Card className={classes.infoCard}>
							<CardContent>
								<Typography variant="h6" paragraph gutterBottom>
									Envíos
								</Typography>
								<Typography variant="subtitle1">CABA y Conurbano</Typography>
								<Typography variant="body2" paragraph gutterBottom>
									Contamos con moto mensajería de confianza (consultanos el
									precio).
								</Typography>
								<Typography variant="subtitle1">Interior</Typography>
								<Typography variant="body2" paragraph gutterBottom>
									Correo Argentino, el transporte es tu elección.
								</Typography>
							</CardContent>
							<div className={classes.infoIcon}>
								<LocalShippingIcon />
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} xl={2}>
						<Card className={classes.infoCard}>
							<CardContent>
								<Typography variant="h6" paragraph gutterBottom>
									Ayuda y Contacto
								</Typography>
								{/* <Typography variant="body2" paragraph gutterBottom>
									Siéntete libre de contactarnos para consultar sobre precios de
									cotización o acerca cualquiera de nuestros productos
								</Typography> */}
								<Typography variant="body2" paragraph gutterBottom>
									Email: mercedesdelvalleaguirre@gmail.com
								</Typography>
								<Typography variant="body2" paragraph gutterBottom>
									Teléfono: 011 4381-6833
								</Typography>
							</CardContent>
							<div className={classes.infoIcon}>
								<WhatsAppIcon />
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={3} xl={2}>
						<Card className={classes.infoCard}>
							<CardContent>
								<Typography variant="h6" paragraph gutterBottom>
									Pagos
								</Typography>
								<Typography variant="body2" paragraph gutterBottom>
									Aceptamos pagos mediante cualquier tarjeta de débito o crédito,
									o en efectivo en el local
								</Typography>
								<Grid container justify="space-around">
									<Grid item>
										<Image
											src={
												"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/visa@2x.png"
											}
											alt="Métodos de pago aceptados"
											width={45}
											height={30}
										/>
									</Grid>
									<Grid item>
										<Image
											src={
												"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mastercard@2x.png"
											}
											alt="Métodos de pago aceptados"
											width={45}
											height={30}
										/>
									</Grid>
									<Grid item>
										<Image
											src={
												"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/amex@2x.png"
											}
											alt="Métodos de pago aceptados"
											width={45}
											height={30}
										/>
									</Grid>
									<Grid item>
										<Image
											src={
												"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/ar/cabal@2x.png"
											}
											alt="Métodos de pago aceptados"
											width={45}
											height={30}
										/>
									</Grid>
									<Grid item>
										<Image
											src={
												"https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/mercadopago@2x.png"
											}
											alt="Métodos de pago aceptados"
											width={45}
											height={30}
										/>
									</Grid>
								</Grid>
							</CardContent>
							<div className={classes.infoIcon}>
								<PaymentIcon />
							</div>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<ProductsOnSaleSection />
			<ListProductsSection />
			<Container maxWidth="lg" className={classes.contactContainer} id="contacto">
				<Grid container justify="space-around">
					<Grid item xs={12} className={classes.textCenter}>
						<Typography variant="h3">Comunícate con Nosotros</Typography>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7463152327573!2d-58.388261384770125!3d-34.61057588045776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadb1b5f88eb%3A0x1fb2acb2510b061e!2sStallion%20Marroquiner%C3%ADa!5e0!3m2!1ses-419!2sar!4v1624119255592!5m2!1ses-419!2sar"
							width="600"
							height="450"
							className={classes.map}
							allowFullScreen
							loading="lazy"
							title="Ecuéntranos en Google Maps"
						></iframe>
					</Grid>
					<Grid item xs={12} md={4} className={classes.contactInfo}>
						<Typography variant="h6" gutterBottom paragraph>
							Contacto
						</Typography>
						<Typography variant="body1">011 4381-6833</Typography>
					</Grid>
					<Grid item xs={12} md={4} className={classes.contactInfo}>
						<Typography variant="h6" gutterBottom paragraph>
							Dirección
						</Typography>
						<Typography variant="body1">
							<strong>San José 155</strong> C1076AAC
						</Typography>
						<Typography variant="body1">
							Ciudad Autónoma de Buenos Aires, Argentina
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} className={classes.contactInfo}>
						<Typography variant="h6" gutterBottom paragraph>
							Horarios de atención
						</Typography>
						<Grid container justify="center" style={{ textAlign: "left" }}>
							<Grid item xs={12} md={6}>
								<Grid container spacing={1}>
									{/* <Grid item xs={12}>
										<Typography variant="body1">
											Lunes: 8:30 - 18:00 hs
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">
											Martes: 8:30 - 18:00 hs
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">
											Miércoles: 8:30 - 18:00 hs
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">
											Jueves: 8:30 - 18:00 hs
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="body1">
											Viernes: 8:30 - 18:00 hs
										</Typography>
									</Grid> */}
									<Grid item xs={12}>
										<Typography variant="body1" paragraph>
											De Lunes a Viernes, de 08:30 a 18:00
										</Typography>
										<Typography variant="body1">
											(No se cierra al mediodía)
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
