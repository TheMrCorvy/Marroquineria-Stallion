import { FC, useState, useEffect } from "react"

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

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import { green } from "@material-ui/core/colors"

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap"

import { ProductCardProps } from "../misc/types"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { displayProduct } from "../redux/actions/productActions"

type Props = {
	productFromProps: ProductCardProps
	loading: boolean
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			borderRadius: 25,

			[theme.breakpoints.down("sm")]: {
				width: "30vw",
			},
			[theme.breakpoints.down("xs")]: {
				width: "25rem",
				maxWidth: "85vw",
				maxHeight: "65vh",
			},
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
			borderRadius: 8,
		},
		loadingImage: {
			borderRadius: 15,
		},
	})
)

const ProductCard: FC<Props> = ({ productFromProps, loading }) => {
	const { product } = useSelector((state: RootState) => state.product)

	const dispatch = useDispatch()

	const classes = useStyles()

	const { title, id, imgUrl, description, price } = productFromProps

	const [desc, setDesc] = useState(description)

	useEffect(() => {
		if (description.length >= 120) {
			const cutDesc = description.substring(0, 115)

			setDesc(cutDesc + " (...)")
		}
	}, [description])

	const showProduct = () => {
		dispatch(displayProduct(productFromProps))

		document.getElementById("productos")?.scrollIntoView({ behavior: "smooth", block: "start" })
	}

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
							<IconButton aria-label="settings" color="primary" onClick={showProduct}>
								<ZoomOutMapIcon />
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
						<CardMedia className={classes.media} image={imgUrl} title={title} />
					</CardActionArea>

					<Typography
						gutterBottom
						paragraph
						variant="h5"
						component="h2"
						className={classes.textCenter}
					>
						{title}
					</Typography>
					<Typography variant="subtitle1" className={classes.textGreen} gutterBottom>
						${price}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{desc}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<Button
						variant="contained"
						disableElevation
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
