import { FC, useEffect } from "react"

import { Paper, Grid, ButtonBase, Typography } from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			margin: "auto",
			maxWidth: 500,
			borderRadius: 10,
		},
		image: {
			width: 128,
			height: 128,
		},
		img: {
			margin: "auto",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%",
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
							<ButtonBase className={classes.image}>
								<img
									className={classes.img}
									alt="complex"
									src="https://murcianoticias.es/curiosidades/wp-content/uploads/2017/03/banner.jpg"
								/>
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography gutterBottom variant="subtitle1">
										Standard license
									</Typography>
									<Typography variant="body2" gutterBottom>
										Full resolution 1920x1080 • JPEG
									</Typography>
									<Typography variant="body2" color="textSecondary">
										ID: 1030114
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" style={{ cursor: "pointer" }}>
										Remove
									</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1">$19.00</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default CartListItems
