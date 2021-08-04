import { FC } from "react"

import { Container, Grid, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core"

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
	},
	media: {
		height: 0,
		paddingTop: "100%",
	},
})

const Categories: FC<Props> = ({ onClick }) => {
	const classes = useStyles()

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Slider {...settings}>
				<div>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("mochilas")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/backpack.png"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Mochilas
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("maletines")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/briefcase.png"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Maletines
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("bolsos")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/bag.png"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Bolsos
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("valijas")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/baggage.jpg"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Valijas
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("carteras")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/hand-bag.jpg"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Carteras
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("fabricados")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/hand-made.jpg"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Productos Fabricados
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("billeteras")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/wallet.png"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Billeteras
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} md={4} lg={3} xl={2} className={classes.column}>
							<Card>
								<CardActionArea onClick={() => onClick("riñoneras")}>
									<CardMedia
										className={classes.media}
										image="/images/categories/fanny-pack.png"
									/>
									<Typography variant="h6" className={classes.textCenter}>
										Riñoneras
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</div>
			</Slider>
		</Container>
	)
}

export default Categories

interface Props {
	onClick: (category: string) => void
}
