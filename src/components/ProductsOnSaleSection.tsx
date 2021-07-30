import { FC, useEffect, useState } from "react"

import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
	CardActionArea,
} from "@material-ui/core"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: "5rem",
			marginBottom: "5rem",
		},
		card: {
			borderRadius: 15,
			position: "relative",

			[theme.breakpoints.down("sm")]: {
				width: "30vw",
			},
			[theme.breakpoints.down("xs")]: {
				width: "25rem",
				maxWidth: "85vw",
			},
		},
		textGreen: {
			color: green[600],
			marginLeft: 25,
		},
		media: {
			height: 0,
			paddingTop: "60%",
			borderRadius: 15,
			boxShadow:
				"0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
			marginBottom: "1rem",
		},
		textCenter: {
			textAlign: "center",
			textTransform: "capitalize",
		},
		cardActions: {
			display: "flex",
			justifyContent: "space-around",
			marginBottom: 5,
		},
		btn: {
			borderRadius: 7,
		},
	})
)

const ProductsOnSaleSection: FC = () => {
	const classes = useStyles()
	return (
		<Container maxWidth="xl" className={classes.container}>
			<Grid container justify="space-around">
				<Grid item xs={12} md={4} lg={3}>
					<Card className={classes.card}>
						<div className="ribbon ribbon-top-right">
							<span>¡¡ oferta !!</span>
						</div>
						<div className="ribbon ribbon-bottom-left">
							<span>¡¡ oferta !!</span>
						</div>
						<CardHeader
							avatar={
								<Button
									variant="contained"
									size="small"
									color="secondary"
									disableElevation
								>
									XX %
								</Button>
							}
						/>
						<CardContent>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									title="oferta"
									image="https://t3.ftcdn.net/jpg/00/76/16/06/240_F_76160632_yXDNvyf4zbDuoSjxT4zrmMxUJ8wsJSF8.jpg"
								/>
							</CardActionArea>
							<Typography
								gutterBottom
								paragraph
								variant="subtitle1"
								component="h2"
								className={classes.textCenter}
							>
								titulo
							</Typography>
							<Typography variant="body2" paragraph gutterBottom>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde earum
								est error hic, non temporibus in nesciunt vel nam culpa quibusdam
								provident, ad consequuntur magnam placeat architecto illo nobis ea!
							</Typography>
							<Typography className={classes.textCenter}>
								<Typography
									component="strong"
									color="secondary"
									style={{ textDecoration: "line-through" }}
								>
									$ 11.000,00
								</Typography>
								<Typography component="strong" className={classes.textGreen}>
									¡¡ $ 11.000,00 !!
								</Typography>
							</Typography>
						</CardContent>
						<CardActions className={classes.cardActions}>
							<Button
								size="small"
								color="primary"
								variant="outlined"
								className={classes.btn}
							>
								Agregar al Carrito
							</Button>
							<Button
								size="small"
								color="secondary"
								variant="contained"
								className={classes.btn}
								disableElevation
							>
								Comprar Ahora
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ProductsOnSaleSection
