import { FC, MouseEvent, useState } from "react"

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
	Menu,
	MenuItem,
} from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

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
			height: "50vh",
			background: "linear-gradient(35deg, #fb6340 0, #fbb140 100%)",
			borderRadius: 35,
			zIndex: -1,
		},
		textCenter: {
			textAlign: "center",
			alignItems: "center",
			padding: 25,
			[theme.breakpoints.down("sm")]: {
				padding: 10,
			},
		},
		menuBtn: {
			marginTop: 20,
			color: "white",
			borderColor: "white",
			borderRadius: 7,
		},
	})
)

const ListProductsSection: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const classes = useStyles()

	return (
		<Container maxWidth="lg" className={classes.galeryContainer} id="productos">
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
							<Button
								aria-controls="simple-menu"
								aria-haspopup="true"
								onClick={handleClick}
								className={classes.menuBtn}
								variant="outlined"
								endIcon={<ExpandMoreIcon />}
								color="primary"
								size="small"
							>
								Categorías
							</Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleClose}>Logout</MenuItem>
							</Menu>
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
