import { FC } from "react"

import {
	Card,
	Container,
	Grid,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 140,
		},
		galeryContainer: {
			marginTop: "3rem",
		},
	})
)

const ListProductsSection: FC = () => {
	const classes = useStyles()

	return (
		<Container maxWidth="lg" className={classes.galeryContainer}>
			<Grid container spacing={3}>
				<Grid item>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere
					perferendis sapiente. Et delectus accusamus saepe! Accusamus doloribus sint
					blanditiis rem, nihil recusandae porro hic autem deserunt in reiciendis facilis?
				</Grid>
			</Grid>
		</Container>
	)
}

export default ListProductsSection
