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
				<Grid container justify="center" spacing={7}>
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
						<Paper elevation={4} className={classes.imgContainer}>
							<img
								src="/images/galery_1.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper elevation={4} className={classes.imgContainer}>
							<img
								src="/images/galery_2.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper elevation={4} className={classes.imgContainer}>
							<img
								src="/images/galery_3.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<Paper elevation={4} className={classes.imgContainer}>
							<img
								src="/images/galery_4.jpg"
								alt="Tienda online de Marroquinería Stallion"
								className={classes.image}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
