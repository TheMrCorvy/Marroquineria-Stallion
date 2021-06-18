import { Container, Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	container: {
		backgroundColor: "#f3f3f3",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingTop: 50,
		paddingBottom: 50,
	},
	textCenter: {
		textAlign: "center",
	},
})

export default function Home() {
	const classes = useStyles()

	return (
		<>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center" spacing={4}>
					<Grid item xs={12} className={classes.textCenter}>
						<Typography variant="h3">Stallion Marroquinería</Typography>
					</Grid>
					<Grid item xs={12} className={classes.textCenter}>
						<Typography variant="body1">
							Tienda de Equipaje en Ciudad Autónoma de Buenos Aires
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
