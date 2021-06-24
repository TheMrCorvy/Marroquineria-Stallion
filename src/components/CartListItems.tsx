import { FC } from "react"

import { Paper, Grid, ButtonBase, Typography, Button } from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { green, red } from "@material-ui/core/colors"

import Image from "next/image"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			margin: "auto",
			maxWidth: "90%",
			borderRadius: 10,
		},
		image: {
			maxWidth: 150,
			maxHeight: 150,

			[theme.breakpoints.down("sm")]: {
				maxWidth: "100%",
				maxHeight: "100%",
			},
		},
		img: {
			margin: "auto",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%",
			borderRadius: 7,
		},
		productName: {
			textTransform: "capitalize",
		},
		textCenter: {
			textAlign: "center",
		},
		marginTop: {
			marginTop: "1rem",
			[theme.breakpoints.down("sm")]: {
				marginTop: 0,
			},
		},
		textGreen: {
			color: green[500],
		},
		redBtn: {
			color: red[500],
			borderColor: red[500],
			"&:hover": {
				backgroundColor: red[100],
			},
		},
	})
)

const CartListItems: FC = () => {
	const { cart } = useSelector((state: RootState) => state.cart)

	const classes = useStyles()

	return (
		<Grid container justify="center" spacing={4}>
			{cart.products.map((product, index) => (
				<Grid item xs={12} key={index}>
					<Paper className={classes.paper}>
						<Grid container spacing={2}>
							<Grid item>
								<Grid container justify="space-between">
									<Grid item xs={12}>
										<Typography
											variant="subtitle1"
											className={classes.textGreen}
										>
											$ {product.product.price}
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12} className={classes.marginTop}>
									<ButtonBase className={classes.image}>
										<Image
											className={classes.img}
											alt="complex"
											src={require("../../public/images/galery_4.jpg")}
										/>
									</ButtonBase>
								</Grid>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container spacing={2}>
									<Grid item xs={12}>
										<Typography
											gutterBottom
											variant="subtitle1"
											className={classes.productName}
										>
											{product.product.title}
										</Typography>
										<Typography variant="body2" gutterBottom paragraph>
											{product.product.description}
										</Typography>
										<Typography variant="body2" color="textSecondary">
											Cantidad:{" "}
											<Typography component="span" color="primary">
												{product.units}
											</Typography>
										</Typography>
									</Grid>
									<Grid item xs={12} md={4} className={classes.textCenter}>
										<Button size="small" variant="outlined" color="primary">
											Agregar uno más
										</Button>
									</Grid>
									<Grid item xs={12} md={4} className={classes.textCenter}>
										<Button
											size="small"
											variant="outlined"
											color="secondary"
											className={classes.redBtn}
										>
											Remover uno
										</Button>
									</Grid>
									<Grid item xs={12} md={4} className={classes.textCenter}>
										<Button
											size="small"
											variant="contained"
											disableElevation
											color="secondary"
										>
											Quitar Producto
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			))}
		</Grid>
	)
}

export default CartListItems
