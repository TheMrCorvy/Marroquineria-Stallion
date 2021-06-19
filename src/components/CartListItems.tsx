import { FC, useEffect } from "react"

import { Paper, Grid, ButtonBase, Typography, Button } from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { green, red } from "@material-ui/core/colors"

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
	const classes = useStyles()

	return (
		<Grid container justify="center" spacing={4}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<Grid container justify="space-between">
								<Grid item xs={12}>
									<Typography variant="subtitle1" className={classes.textGreen}>
										$19.00
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12} className={classes.marginTop}>
								<ButtonBase className={classes.image}>
									<img
										className={classes.img}
										alt="complex"
										src="https://lh3.googleusercontent.com/h3x-kjIKBKVCgHL78IovJbtMHDxhdpC7zIYKtJhwhoIUGOqptzwNhFCCutsLRvuZMH4tfeLMWcPiqNqF=w960-h960-n-o-v1"
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
										Nombre del Producto
									</Typography>
									<Typography variant="body2" gutterBottom paragraph>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Autem, perferendis.
									</Typography>
									<Typography variant="body2" color="textSecondary">
										Cantidad:{" "}
										<Typography component="span" color="primary">
											1
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
		</Grid>
	)
}

export default CartListItems
