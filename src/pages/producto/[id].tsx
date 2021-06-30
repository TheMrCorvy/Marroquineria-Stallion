import { useEffect, useState } from "react"

import { useRouter } from "next/router"

import { Container, Grid, Typography, Divider, Backdrop, CircularProgress } from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import ListProductsSection from "../../components/ListProductsSection"

import { useDispatch } from "react-redux"
import { displayProduct } from "../../redux/actions/productActions"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textCenter: {
			textAlign: "center",
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
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	})
)

export default function ProductView() {
	const [loading, setLoading] = useState(true)

	const classes = useStyles()

	const dispatch = useDispatch()

	const router = useRouter()

	useEffect(() => {
		getProductFromApi(Number(router.query))
	}, [])

	const getProductFromApi = async (id: number) => {
		const res = await fetch("https://api.jsonbin.io/b/60dc68bc9328b059d7b35eb0/1")
		const data = await res.json()

		setLoading(false)

		dispatch(displayProduct(data.product))
	}

	return (
		<>
			{loading && (
				<Backdrop className={classes.backdrop} open={loading}>
					<CircularProgress color="secondary" />
				</Backdrop>
			)}
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
									<Grid item xs={12}>
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
