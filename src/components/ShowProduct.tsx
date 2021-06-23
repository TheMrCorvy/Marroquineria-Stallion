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
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

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

		// [theme.breakpoints.down("sm")]: {
		//     maxWidth: "100%",
		//     maxHeight: "100%",
		// },
	},
})

const ShowProduct: FC<Props> = ({ product }) => {
	const classes = useStyles()

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
									<Typography variant="h5" className={classes.title} paragraph>
										{product.title}
									</Typography>
									<Typography variant="body2" paragraph gutterBottom>
										{product.description}
									</Typography>

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
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		)
	}
}

export default ShowProduct
