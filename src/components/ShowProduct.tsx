import { FC, useEffect, useState } from "react"

import {
	Button,
	Typography,
	Card,
	CardContent,
	Grid,
	Tooltip,
	Divider,
	ButtonBase,
	TextField,
	IconButton,
	useMediaQuery,
} from "@material-ui/core"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import PlusOneIcon from "@material-ui/icons/PlusOne"
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1"

import ShopTwoIcon from "@material-ui/icons/ShopTwo"

import Image from "next/image"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { clearProduct } from "../redux/actions/productActions"
import { addToCart } from "../redux/actions/cartActions"

const useStyles = makeStyles({
	container: {
		paddingTop: 30,
	},
	card: {
		borderRadius: 20,
	},
	title: {
		textTransform: "capitalize",
	},
	textCenter: {
		textAlign: "center",
	},
	backBtn: {
		boxShadow: "none",
		color: "white",
		borderColor: "white",
		borderRadius: 7,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
		borderRadius: 7,
	},
	image: {
		maxWidth: 150,
		maxHeight: 150,
	},
	media: {
		borderRadius: 20,
	},
	mainImg: {
		borderRadius: 25,
		marginTop: 10,
	},
	mainImageContainer: {
		paddingTop: 15,
		textAlign: "center",
		color: green[500],
	},
	buyBtn: {
		borderRadius: 8,
	},
	unities: {
		color: green[500],
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "1.5rem",
	},
})

const ShowProduct: FC = () => {
	const { product } = useSelector((state: RootState) => state.product)

	const dispatch = useDispatch()

	const [units, setUnits] = useState<number>(1)

	const [activeImg, setActiveImg] = useState<string>("")

	const classes = useStyles()

	const theme = useTheme()

	const smallScreen = useMediaQuery(theme.breakpoints.down("md"))

	useEffect(() => {
		if (product) {
			setActiveImg(product.images[0].imgUrl)
		}
	}, [product])

	const removeProduct = () => {
		dispatch(clearProduct())
	}

	const modifyUnits = (action: "+1" | "-1") => {
		if (action === "+1") {
			setUnits(units + 1)
		} else {
			setUnits(units - 1)
		}
	}

	const dispatchAddToCart = () => {
		if (product && units <= product.stock && units > 0) {
			dispatch(addToCart(product, units))
		}
	}

	const updateActiveImg = (index: number) => {
		if (product) {
			setActiveImg(product.images[index].imgUrl)
		}
	}

	if (!product) {
		return null
	} else {
		return (
			<Grid container justify="space-around" spacing={4}>
				<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
					<Typography color="inherit" style={{ color: "white" }} variant="body1">
						Productos{" "}
						<Typography component="span" color="textPrimary" className={classes.title}>
							/ {product.title}
						</Typography>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
					<Typography variant="h6" className={classes.title}>
						{product.title}
					</Typography>
					<Divider />
				</Grid>
				<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
					<Tooltip title="Volver" placement="right">
						<Button
							disableElevation
							variant="outlined"
							color="secondary"
							startIcon={<CancelPresentationIcon />}
							className={classes.backBtn}
							onClick={removeProduct}
						>
							Volver
						</Button>
					</Tooltip>
				</Grid>

				<Grid item xs={12} sm={11}>
					<Card className={classes.card}>
						<CardContent>
							<Grid container justify="space-around">
								<Grid item xs={12} md={4}>
									<Grid
										container
										direction="column"
										justify="space-between"
										spacing={smallScreen ? 0 : 5}
									>
										<Grid item xs={12}>
											<Typography
												variant="h5"
												className={classes.title}
												paragraph
											>
												{product.title}
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body2" paragraph gutterBottom>
												{product.description}
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Grid container justify="space-between" spacing={4}>
												{product.images.map((image, index) => (
													<Grid item xs={4} key={index}>
														<ButtonBase
															className={classes.image}
															onClick={() => updateActiveImg(index)}
														>
															<Image
																src={image.imgUrl}
																title={product.title}
																alt={product.title}
																width={150}
																height={150}
																className={classes.img}
															/>
														</ButtonBase>
													</Grid>
												))}
											</Grid>
										</Grid>
									</Grid>
								</Grid>

								<Grid item xs={12} md={4} className={classes.mainImageContainer}>
									{activeImg && (
										<Image
											src={activeImg}
											title={product.title}
											alt={product.title}
											width="auto"
											height="auto"
											layout="responsive"
											className={classes.mainImg}
										/>
									)}
									<Typography variant="h5" style={{ paddingTop: 10 }}>
										$ {product.price}
									</Typography>
								</Grid>

								<Grid item xs={12} md={3}>
									<Grid
										container
										justify="space-around"
										style={{ height: "100%" }}
										spacing={4}
									>
										<Grid item xs={12} className={classes.textCenter}>
											<Typography variant="subtitle1" color="primary">
												Unidades en Stock: {product.stock}
											</Typography>
										</Grid>
										<Grid item xs={12} className={classes.textCenter}>
											<TextField
												id="filled-basic"
												value={units}
												onChange={() => {}}
												variant="filled"
												disabled
												error={units < 1 || units > product.stock}
												helperText="Las unidades no pueden ser mayores al stock, o menores a 1"
												InputProps={{
													startAdornment: (
														<IconButton
															color="secondary"
															onClick={() => modifyUnits("+1")}
														>
															<PlusOneIcon />
														</IconButton>
													),
													endAdornment: (
														<IconButton
															color="primary"
															onClick={() => modifyUnits("-1")}
														>
															<ExposureNeg1Icon />
														</IconButton>
													),
													classes: {
														input: classes.unities,
													},
												}}
											/>
										</Grid>
										<Grid item xs={12}>
											<Button
												className={classes.buyBtn}
												size="large"
												variant="contained"
												color="secondary"
												startIcon={<ShoppingCartIcon />}
												endIcon={<ShoppingCartIcon />}
												disableElevation
												fullWidth
												onClick={dispatchAddToCart}
											>
												Agregar al carrito
											</Button>
										</Grid>
										<Grid item xs={12}>
											<Button
												className={classes.buyBtn}
												size="large"
												variant="contained"
												color="secondary"
												disableElevation
												startIcon={<ShopTwoIcon />}
												endIcon={<ShopTwoIcon />}
												fullWidth
											>
												Comprar ahora
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		)
	}
}

export default ShowProduct
