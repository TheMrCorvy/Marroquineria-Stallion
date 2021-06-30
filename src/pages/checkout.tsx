import { useState } from "react"

import {
	Container,
	Grid,
	Typography,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import clsx from "clsx"

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainContainer: {
			minHeight: "100vh",
			paddingTop: "5rem",
			background: "#f3f3f3",
		},
		card: {
			borderRadius: 10,
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
	})
)

const Checkout = () => {
	const { cart } = useSelector((state: RootState) => state.cart)

	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	if (!cart.products[0]) {
		return null
	} else {
		return (
			<>
				<Container maxWidth="xl" className={classes.mainContainer}>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3}>
							<Card className={classes.card}>
								<CardHeader title="Tu lista de compras:" />
								<CardMedia
									className={classes.media}
									image={cart.products[0].product.images[0].img_url}
									title={cart.products[0].product.title}
								/>
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										{cart.products[0].product.description}
									</Typography>
								</CardContent>
								<CardActions disableSpacing>
									<IconButton
										className={clsx(classes.expand, {
											[classes.expandOpen]: expanded,
										})}
										onClick={handleExpandClick}
										aria-expanded={expanded}
										aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								</CardActions>
								<Collapse in={expanded} unmountOnExit>
									<CardContent>
										<Typography paragraph>Method:</Typography>
										<CardMedia
											className={classes.media}
											image="/images/galery_1.jpg"
											title="Paella dish"
										/>
										<Typography paragraph>
											Heat oil in a (14- to 16-inch) paella pan or a large,
											deep skillet over medium-high heat. Add chicken, shrimp
											and chorizo, and cook, stirring occasionally until
											lightly browned, 6 to 8 minutes. Transfer shrimp to a
											large plate and set aside, leaving chicken and chorizo
											in the pan. Add pimentón, bay leaves, garlic, tomatoes,
											onion, salt and pepper, and cook, stirring often until
											thickened and fragrant, about 10 minutes. Add saffron
											broth and remaining 4 1/2 cups chicken broth; bring to a
											boil.
										</Typography>
										<Typography paragraph>
											Add rice and stir very gently to distribute. Top with
											artichokes and peppers, and cook without stirring, until
											most of the liquid is absorbed, 15 to 18 minutes. Reduce
											heat to medium-low, add reserved shrimp and mussels,
											tucking them down into the rice, and cook again without
											stirring, until mussels have opened and rice is just
											tender, 5 to 7 minutes more. (Discard any mussels that
											don’t open.)
										</Typography>
										<Typography>
											Set aside off of the heat to let rest for 10 minutes,
											and then serve.
										</Typography>
									</CardContent>
								</Collapse>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</>
		)
	}
}

export default Checkout
