import { FC } from "react"

import {
	Container,
	Grid,
	Card,
	CardContent,
	CardActionArea,
	CardMedia,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Link,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { makeStyles } from "@material-ui/core/styles"

import Slider from "react-slick"

const settings = {
	dots: true,
	accessibility: true,
	autoplaySpeed: 10000,
	autoplay: true,
	arrows: true,
	pauseOnHover: true,
}

const useStyles = makeStyles({
	container: {
		padding: "3rem",
	},
	column: {
		marginTop: "1rem",
		marginBottom: "1rem",
	},
	textCenter: {
		textAlign: "center",
		marginTop: "2rem",
	},
	media: {
		height: 0,
		paddingTop: "100%",
		borderRadius: 5,
	},
	accordion: {
		marginTop: "3rem",
		borderRadius: 8,
		"&::before": {
			backgroundColor: "#fff",
		},
	},
	link: {
		textTransform: "capitalize",
	},
})

const Categories: FC<Props> = ({ onClick }) => {
	const classes = useStyles()

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Typography variant="h4" className={classes.textCenter}>
				Tenemos Stock de:
			</Typography>
			<Slider {...settings}>
				<div>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/mochilas")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/backpack.png"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Mochilas
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/bolsos")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/bag.png"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Bolsos
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/maletines")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/briefcase.png"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Maletines
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/valijas")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/baggage.jpg"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Valijas
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/carteras")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/hand-bag.jpg"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Carteras
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/fabricados")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/hand-made.jpg"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Productos Fabricados
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/billeteras")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/wallet.png"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Billeteras
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card elevation={2}>
								<CardActionArea onClick={() => onClick("/riñoneras")}>
									<CardContent>
										<CardMedia
											className={classes.media}
											image="/images/categories/fanny-pack.png"
										/>
										<Typography variant="h6" className={classes.textCenter}>
											Riñoneras
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</div>
			</Slider>

			<Accordion className={classes.accordion} style={{ borderRadius: 8 }} elevation={2}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h6">Todas las Categorías:</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={4} component="ul">
						{categoriesArray.map((category, index: number) => (
							<Grid item key={index} component="li" xs={12} sm={6} md={4} lg={3}>
								<Link
									href="#"
									onClick={() => onClick("/" + category)}
									className={classes.link}
								>
									{category}
								</Link>
							</Grid>
						))}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Container>
	)
}

export default Categories

interface Props {
	onClick: (category: string) => void
}

const categoriesArray = [
	"accesorios",
	"accesorios - mujer",
	"accesorios de viaje",
	"bandoleras",
	"barbijos / cubrebocas",
	"billeteras",
	"billeteras - hombre",
	"billeteras - mujer",
	"billeteras - tarjetero",
	"billeteras de cuero - hombre",
	"billeteras de cuero - mujer",
	"bolsos",
	"botineros",
	"botineros",
	"carteras",
	"carteras simil cuero",
	"cartucheras",
	"maletines",
	"mochilas",
	"mochilas escolares",
	"mochilas porta-notebooks",
	"mochilas urbanas",
	"morrales",
	"paraguas",
	"paraguas - hombre",
	"paraguas - mujer",
	"porta cosméticos",
	"porta-notebooks",
	"portafolio",
	"portafolios",
	"portafolios porta-notebooks",
	"portafolios simil cuero",
	"productos fabricados",
	"riñoneras",
	"valijas",
]
