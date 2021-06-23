import { FC } from "react"

import {
	Button,
	Typography,
	Card,
	CardContent,
	Grid,
	Tooltip,
	Divider,
	ButtonBase,
	useMediaQuery,
} from "@material-ui/core"

import { makeStyles, useTheme } from "@material-ui/core/styles"

import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"

import Image from "next/image"

import { ProductCardProps } from "../misc/types"

type Props = {
	product: ProductCardProps | undefined
}

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
})

const ShowProduct: FC<Props> = ({ product }) => {
	const classes = useStyles()

	const theme = useTheme()

	const smallScreen = useMediaQuery(theme.breakpoints.down("md"))

	if (!product) {
		return null
	} else {
		return (
			<Grid container justify="space-around" className={classes.container} spacing={4}>
				<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
					<Typography color="inherit" style={{ color: "white" }} variant="body1">
						Productos{" "}
						<Typography component="span" color="textPrimary">
							/ Nombre Producto
						</Typography>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
					<Typography variant="h6">Nombre Producto</Typography>
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
						>
							Volver
						</Button>
					</Tooltip>
				</Grid>

				<Grid item xs={12} sm={11}>
					<Card className={classes.card}>
						<CardContent>
							<Grid container justify="space-between">
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
												<Grid item xs={4}>
													<ButtonBase className={classes.image}>
														<Image
															className={classes.img}
															alt="complex"
															src={require("../../public/images/galery_4.jpg")}
														/>
													</ButtonBase>
												</Grid>
												<Grid item xs={4}>
													<ButtonBase className={classes.image}>
														<Image
															className={classes.img}
															alt="complex"
															src={require("../../public/images/galery_4.jpg")}
														/>
													</ButtonBase>
												</Grid>
												<Grid item xs={4}>
													<ButtonBase className={classes.image}>
														<Image
															className={classes.img}
															alt="complex"
															src={require("../../public/images/galery_4.jpg")}
														/>
													</ButtonBase>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>

								<Grid
									item
									xs={12}
									md={4}
									style={{ paddingTop: 15, paddingBottom: 10 }}
								>
									<Image
										src={product.imgUrl as any}
										title={product.title}
										alt={product.title}
										width="auto"
										height="auto"
										layout="responsive"
										className={classes.mainImg}
									/>
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
