import { FC, useState } from "react"

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	CardHeader,
	Tooltip,
	IconButton,
	CardActionArea,
	Button,
} from "@material-ui/core"

import { Skeleton } from "@material-ui/lab"

import { makeStyles } from "@material-ui/core/styles"

import { green } from "@material-ui/core/colors"

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CropFreeIcon from "@material-ui/icons/CropFree"

interface Props {
	loading: boolean
}

const useStyles = makeStyles({
	card: {
		borderRadius: 25,
	},
	header: {
		paddingBottom: 0,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		borderRadius: 15,
	},
	cardaction: {
		borderRadius: 15,
		marginBottom: "2rem",
	},
	textCenter: {
		textAlign: "center",
		marginBottom: 0,
	},
	textGreen: {
		color: green[600],
		textAlign: "center",
	},
	buyNow: {
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 15,
		borderRadius: 7,
	},
	loadingImage: {
		borderRadius: 15,
	},
})

const ProductCard: FC<Props> = ({ loading }) => {
	const classes = useStyles()

	if (loading) {
		return (
			<Card elevation={2} className={classes.card}>
				<CardHeader
					avatar={<Skeleton animation="wave" variant="circle" width={50} height={50} />}
					action={<Skeleton animation="wave" variant="circle" width={50} height={50} />}
					className={classes.header}
				/>
				<CardContent>
					<CardActionArea className={classes.cardaction}>
						<Skeleton
							animation="wave"
							variant="rect"
							height={155}
							className={classes.loadingImage}
						/>
					</CardActionArea>

					<Skeleton animation="wave" variant="text" />
					<Skeleton animation="wave" variant="text" width={30} />

					<Skeleton animation="wave" variant="text" width={100} />
					<br />
					<Skeleton animation="wave" variant="rect" height={50} />
				</CardContent>
			</Card>
		)
	} else {
		return (
			<Card elevation={2} className={classes.card}>
				<CardHeader
					avatar={
						<Tooltip title="Ver Producto" placement="right">
							<IconButton aria-label="settings" color="primary">
								<CropFreeIcon />
							</IconButton>
						</Tooltip>
					}
					action={
						<Tooltip title="Agregar al Carrito" placement="left">
							<IconButton aria-label="settings" color="secondary">
								<ShoppingCartIcon />
							</IconButton>
						</Tooltip>
					}
					className={classes.header}
				/>
				<CardContent>
					<CardActionArea className={classes.cardaction}>
						<CardMedia
							className={classes.media}
							image="/images/galery_1.jpg"
							title="Paella dish"
						/>
					</CardActionArea>

					<Typography
						gutterBottom
						paragraph
						variant="h5"
						component="h2"
						className={classes.textCenter}
					>
						Nombre producto
					</Typography>
					<Typography variant="subtitle1" className={classes.textGreen} gutterBottom>
						$19.00
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut
						similique modi, voluptas suscipit
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<Button
						variant="outlined"
						size="small"
						color="secondary"
						className={classes.buyNow}
					>
						Comprar Ahora
					</Button>
				</CardActions>
			</Card>
		)
	}
}

export default ProductCard
