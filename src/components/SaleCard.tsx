import { FC, useEffect, useState } from "react"

import { useRouter } from "next/router"

import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
	CardActionArea,
} from "@material-ui/core"

import { Skeleton } from "@material-ui/lab"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

import { useDispatch } from "react-redux"
import { displayProduct } from "../redux/actions/productActions"
import { addToCart } from "../redux/actions/cartActions"

import { ProductCardProps } from "../misc/types"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			borderRadius: 15,
			position: "relative",
			width: "100%",

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
		cardaction: {
			borderRadius: 15,
			marginBottom: "2rem",
		},
		loadingImage: {
			borderRadius: 15,
		},
		header: {
			paddingBottom: 0,
		},
	})
)

const SaleCard: FC<Props> = ({ productFromProps, loading }) => {
	const dispatch = useDispatch()

	const router = useRouter()

	const { title, images, description, price, discount } = productFromProps

	const classes = useStyles()

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

	const dispatchAddToCart = () => {
		dispatch(addToCart(productFromProps, 1))
	}

	const buyNow = () => {
		dispatch(addToCart(productFromProps, 1))

		router.push("/checkout")
	}

	const calcPrices = () => {
		const formatter = new Intl.NumberFormat("es-AR", {
			style: "currency",
			currency: "ARS",
		})

		if (!discount) {
			return (
				<Typography
					component="strong"
					color="secondary"
					style={{ textDecoration: "line-through" }}
				>
					{formatter.format(price)}
				</Typography>
			)
		} else {
			const priceToSubstract = (discount * price) / 100
			return (
				<>
					<Typography
						component="strong"
						color="secondary"
						style={{ textDecoration: "line-through" }}
						onClick={showProduct}
					>
						{formatter.format(price)}
					</Typography>
					<Typography
						component="strong"
						className={classes.textGreen}
						onClick={showProduct}
					>
						¡¡ {formatter.format(price - priceToSubstract)} !!
					</Typography>
				</>
			)
		}
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
	}
	return (
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
						onClick={showProduct}
						variant="contained"
						size="small"
						color="secondary"
						disableElevation
					>
						{discount} %
					</Button>
				}
			/>
			<CardContent>
				<CardActionArea onClick={showProduct}>
					<CardMedia className={classes.media} title="oferta" image={images[0].img_url} />
				</CardActionArea>
				<Typography
					gutterBottom
					paragraph
					variant="subtitle1"
					component="h2"
					className={classes.textCenter}
					onClick={showProduct}
				>
					{title}
				</Typography>
				<Typography variant="body2" paragraph gutterBottom>
					{desc}
				</Typography>
				<Typography className={classes.textCenter}>{calcPrices()}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					onClick={dispatchAddToCart}
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
					onClick={buyNow}
				>
					Comprar Ahora
				</Button>
			</CardActions>
		</Card>
	)
}

export default SaleCard

interface Props {
	productFromProps: ProductCardProps
	loading: boolean
}
