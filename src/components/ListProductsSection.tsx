import { FC, MouseEvent, useState } from "react"

import {
	Container,
	Grid,
	Button,
	Typography,
	Divider,
	Menu,
	MenuItem,
	Fab,
	Hidden,
} from "@material-ui/core"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"

import Pagination from "@material-ui/lab/Pagination"

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

import { ProductCardProps } from "../misc/types"

import ProductCard from "./ProductCard"
import ShowProduct from "./ShowProduct"

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
			minHeight: 50,
			display: "flex",
			poaition: "relative",
			width: "100%",
		},
		bgLow: {
			position: "absolute",
			top: 0,
			left: "2.5%",
			width: "95%",
			height: "50vh",
			transition: "1s",
			background: "linear-gradient(35deg, #fb6340 0, #fbb140 100%)",
			borderRadius: 35,
			zIndex: -1,
		},
		bgHigh: {
			position: "absolute",
			top: 0,
			left: "2.5%",
			width: "95%",
			height: "35%",
			transition: "1s",
			background: "linear-gradient(35deg, #fb6340 0, #fbb140 100%)",
			borderRadius: 35,
			zIndex: -1,

			[theme.breakpoints.down("sm")]: {
				height: "75%",
			},
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
				height: "auto",
				overflowX: "scroll",
				display: "flex",
				marginTop: 5,
				paddingLeft: 0,
				flexWrap: "unset",
				justifyContent: "space-between",
				paddingRight: 0,
				boxShadow: "inset 0 0 10px #000000",
				borderRadius: 8,
			},
		},
		pagination: {
			marginBottom: "3rem",
		},
		scrollBtn: {
			boxShadow: "none",
		},
		showProduct: {
			minHeight: "70vh",
		},
		dNone: {
			visibility: "hidden",
			opacity: 0,
			transition: "visibility 0s, opacity 1s linear",
		},
		dBlock: {
			visibility: "visible",
			opacity: 1,
			transition: "visibility 0s, opacity 1s linear",
		},
	})
)

const ListProductsSection: FC = () => {
	const { product } = useSelector((state: RootState) => state.product)

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

	const scrollProducts = () => {
		const productsContainer = document.getElementById("products-list")
		const elWidth = document.getElementById("producto-0")

		if (productsContainer && elWidth) {
			productsContainer.scrollBy({ top: 0, left: +elWidth.offsetWidth, behavior: "smooth" })
		}
	}

	return (
		<div style={{ paddingTop: "5rem" }} id="productos">
			<Container maxWidth="lg" className={classes.galeryContainer}>
				<div className={!product ? classes.bgLow : classes.bgHigh} />

				<Grid
					item
					xs={12}
					style={{
						visibility: product ? "visible" : "hidden",
						opacity: product ? 1 : 0,
						transition: "1.5s",
					}}
				>
					<ShowProduct />
				</Grid>

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
									<MenuItem onClick={handleClose}>Valijas</MenuItem>
									<MenuItem onClick={handleClose}>Cuero</MenuItem>
									<MenuItem onClick={handleClose}>Bolsos</MenuItem>
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
										<Grid
											item
											xs={12}
											sm={6}
											md={4}
											lg={3}
											key={index}
											id={"producto-" + index}
										>
											<ProductCard
												productFromProps={product}
												loading={loading}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Hidden mdUp>
						<Grid item xs={12} className={classes.textCenter}>
							<Fab
								color="primary"
								aria-label="scroll"
								size="small"
								className={classes.scrollBtn}
								onClick={scrollProducts}
							>
								<ArrowRightAltIcon />
							</Fab>
						</Grid>
					</Hidden>

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
		title: "producto 1 con un nombre muy largo para saber como se ve",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 5,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 2,
		title: "producto 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 7,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 3,
		title: "producto 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 2,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 4,
		title: "producto 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 4,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 5,
		title: "producto 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 5,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 6,
		title: "producto 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 7,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 7,
		title: "producto 7",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 2,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 8,
		title: "producto 8",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 4,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 9,
		title: "producto 9",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 2,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
	{
		id: 10,
		title: "producto 10",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, enim! Quas earum a in saepe distinctio blanditiis dolorem voluptates sed ex sunt. Magni doloribus deserunt iste natus harum consequatur amet?",
		price: "19.00",
		stock: 4,
		images: [
			{
				imgUrl: "/images/galery_1.jpg",
			},
			{
				imgUrl: "/images/galery_2.jpg",
			},
			{
				imgUrl: "/images/galery_3.jpg",
			},
			{
				imgUrl: "/images/galery_4.jpg",
			},
		],
		brand: "Samsonite",
	},
]
