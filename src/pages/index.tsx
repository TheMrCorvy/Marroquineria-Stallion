import { Container, Grid, Typography, Paper, Divider } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	container: {
		backgroundColor: "#f5f5f5",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		paddingBottom: 50,
	},
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
	},
	title: {
		marginTop: "3rem",
		fontFamily: "Arial",
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
})

export default function Home() {
	const classes = useStyles()

	return (
		<>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center" spacing={4}>
					<Grid item xs={12} className={classes.textCenter}>
						<Typography variant="h3" className={classes.title}>
							Stallion Marroquinería
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.textCenter}>
						<Typography variant="body1">
							Tienda de Equipaje en Ciudad Autónoma de Buenos Aires
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="lg" className={classes.galeryContainer}>
				<Grid container justify="center" spacing={4}>
					<Grid item xs={12} className={classes.imgContainer}>
						<img
							src="/images/main_home.jpg"
							alt="Tienda online de Marroquinería Stallion"
							className={classes.image}
						/>
					</Grid>
					<Grid item xs={12} className={classes.textCenter} id="galeria">
						<Typography variant="h3" className={classes.title}>
							Galería
						</Typography>
						<Divider />
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper className={classes.imgContainer}>
							<img
								src="/images/galery_1.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper className={classes.imgContainer}>
							<img
								src="/images/galery_2.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper className={classes.imgContainer}>
							<img
								src="/images/galery_3.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper className={classes.imgContainer}>
							<img
								src="/images/galery_4.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="lg" className={classes.contactContainer}>
				<Grid container justify="space-around">
					<Grid item xs={12} className={classes.textCenter} id="galeria">
						<Typography variant="h3" className={classes.title}>
							Comunícate con Nosotros
						</Typography>
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
						></iframe>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
