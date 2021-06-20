import { FC } from "react"

import {
	Card,
	Container,
	Grid,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Link,
	Breadcrumbs,
	Divider,
} from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 140,
		},
		galeryContainer: {
			marginTop: "3rem",
			position: "relative",
			minHeight: "50vh",
			paddingLeft: 30,
			paddingRight: 30,
		},
		bgRed: {
			// background: "red",
			minHeight: 50,
			display: "flex",
			poaition: "relative",
			width: "100%",
		},
		background: {
			position: "absolute",
			top: 0,
			left: "2.5%",
			width: "95%",
			height: "100%",
			background: "linear-gradient(35deg, #fb6340 0, #fbb140 100%)",
			borderRadius: 35,
			zIndex: -1,
		},
		textCenter: {
			textAlign: "center",
			paddingTop: "auto",
			alignItems: "center",
			padding: 25,
			[theme.breakpoints.down("sm")]: {
				padding: 10,
			},
		},
	})
)

const ListProductsSection: FC = () => {
	const classes = useStyles()

	return (
		<Container maxWidth="lg" className={classes.galeryContainer}>
			<div className={classes.background} />
			<Grid container>
				<Grid item className={classes.bgRed}>
					<Grid container justify="space-around">
						<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
							<Typography color="inherit" style={{ color: "white" }} variant="body1">
								Inicio{" "}
								<Typography component="span" color="textPrimary">
									/ Productos
								</Typography>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
							<Typography variant="h6">Nuestros Productos</Typography>
							<Divider />
						</Grid>
						<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
							<Typography variant="subtitle2">
								Mostrando 1 - 15 de 100 Resultados
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ListProductsSection
