import { FC, MouseEvent, useState } from "react"

import { Container, Grid, Button, Typography, Divider, Menu, MenuItem } from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import Pagination from "@material-ui/lab/Pagination"

import { ProductCardProps } from "../misc/types"

import ProductCard from "./ProductCard"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 140,
		},
		galeryContainer: {
			position: "relative",
			minHeight: "50vh",
			paddingLeft: 30,
			paddingRight: 30,
		},
		bgRed: {
			// background: "red",
			minHeight: 50,
			display: "flex",
			poaition: "relative",
			width: "100%",
		},
		background: {
			position: "absolute",
			top: 0,
			left: "2.5%",
			width: "95%",
			height: "50vh",
			background: "linear-gradient(35deg, #fb6340 0, #fbb140 100%)",
			borderRadius: 35,
			zIndex: -1,
		},
		textCenter: {
			textAlign: "center",
			alignItems: "center",
			padding: 25,
			[theme.breakpoints.down("sm")]: {
				padding: 10,
			},
		},
		menuBtn: {
			marginTop: 20,
			color: "white",
			borderColor: "white",
			borderRadius: 7,
		},
		productList: {
			paddingLeft: 10,
			paddingRight: 10,

			[theme.breakpoints.down("sm")]: {
				maxHeight: "60vh",
				overflowY: "scroll",
				whiteSpace: "nowrap",
				position: "relative",
				display: "flex",
				justifyContent: "space-between",
				marginTop: 5,
				paddingLeft: 0,
				flexWrap: "unset",
				paddingRight: 0,
				"&::-webkit-scrollbar": {
					display: "none",
				},
			},
		},
		pagination: {
			marginBottom: "5rem",
			marginTop: "3rem",
		},
	})
)

const ListProductsSection: FC = () => {
	const classes = useStyles()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const [loading, setLoading] = useState(false)

	const [products, setProducts] = useState<ProductCardProps[] | []>(apiProducts)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handlePageChange = (event: object, page: number) => {
		const productsContainer = document.getElementById("products-list")

		if (productsContainer) {
			productsContainer.scrollTo({ top: 0, left: 0, behavior: "smooth" })
		}
	}

	return (
		<div style={{ paddingTop: "5rem" }} id="productos">
			<Container maxWidth="lg" className={classes.galeryContainer}>
				<div className={classes.background} />
				<Grid container justify="center" spacing={4}>
					<Grid item className={classes.bgRed}>
						<Grid container justify="space-around">
							<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
								<Typography
									color="inherit"
									style={{ color: "white" }}
									variant="body1"
								>
									Inicio{" "}
									<Typography component="span" color="textPrimary">
										/ Productos
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
								<Typography variant="h6">Nuestros Productos</Typography>
								<Divider />
								<Button
									aria-controls="simple-menu"
									aria-haspopup="true"
									onClick={handleClick}
									className={classes.menuBtn}
									variant="outlined"
									endIcon={<ExpandMoreIcon />}
									color="primary"
									size="small"
								>
									Categorías
								</Button>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</Menu>
							</Grid>
							<Grid item xs={12} sm={12} md={4} className={classes.textCenter}>
								<Typography variant="subtitle2">
									Mostrando 1 - 10 de 100 Resultados
								</Typography>
							</Grid>

							<Grid item xs={12}>
								<Grid
									container
									justify="space-around"
									spacing={4}
									className={classes.productList}
									id="products-list"
								>
									{products.map((product, index) => (
										<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
											<ProductCard product={product} loading={loading} />
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Grid item className={classes.pagination}>
						<Pagination
							count={10}
							color="primary"
							onChange={handlePageChange}
							size="small"
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default ListProductsSection

const apiProducts: ProductCardProps[] = [
	{
		id: 1,
		title: "producto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		imgUrl: "/images/galery_1.jpg",
	},
	{
		id: 1,
		title: "producto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		imgUrl: "/images/galery_1.jpg",
	},
	{
		id: 1,
		title: "producto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		imgUrl: "/images/galery_1.jpg",
	},
	{
		id: 1,
		title: "producto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		imgUrl: "/images/galery_1.jpg",
	},
]
