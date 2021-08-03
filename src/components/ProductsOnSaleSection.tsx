import { FC, useEffect, useState } from "react"

import { Container, Grid, Typography } from "@material-ui/core"

import Pagination from "@material-ui/lab/Pagination"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

import { ProductCardProps } from "../misc/types"
import SaleCard from "./SaleCard"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: "5rem",
			marginBottom: "5rem",
			background: "#f3f3f3",
			padding: "3rem",
			[theme.breakpoints.down("xs")]: {
				paddingRight: 0,
				paddingLeft: 0,
			},
		},
		pagination: {
			marginTop: "3rem",
			display: "flex",
			justifyContent: "center",
			textAlign: "center",
			alignItems: "center",
		},
		textCenter: {
			textAlign: "center",
		},
		column: {
			display: "flex",
			justifyContent: "center",
			verticalAlign: "center",
			textAlign: "center",

			padding: "1rem",
		},
	})
)

const placeholder = [
	{
		id: 0,
		title: "",
		description: "",
		price: 0,
		stock: 0,
		images: [],
		brand: "",
		type: "",
		discount: null,
	},
]

const ProductsOnSaleSection: FC = () => {
	const classes = useStyles()

	const [loading, setLoading] = useState(true)

	const [products, setProducts] = useState<ProductCardProps[]>(placeholder)

	const [totalPages, setTotalPages] = useState(1)

	const [totalResults, setTotalResults] = useState(0)

	const [sectionIsNull, setSectionIsNull] = useState(true)

	useEffect(() => {
		getProductsFromApi("?page=1")
	}, [])

	const getProductsFromApi = async (urlParams: string) => {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL

		if (apiUrl) {
			const res = await fetch(apiUrl + "/get-offers" + urlParams, {
				headers: {
					Accept: "application/json",
				},
			})
			const data = await res.json()

			setProducts(data.offers.data)

			setTotalPages(data.offers.last_page)

			setTotalResults(data.offers.total)

			setLoading(false)

			if (data.offers.total !== 0) {
				setSectionIsNull(false)
			}
		}
	}

	const handlePageChange = async (event: object, page: number) => {
		const salesList = document.getElementById("sales-list")

		if (salesList) {
			salesList.scrollIntoView({ behavior: "smooth", block: "start" })
		}

		setTimeout(() => {
			setLoading(true)
			setProducts(placeholder)

			getProductsFromApi("?page=" + page)
		}, 1000)
	}

	if (sectionIsNull) {
		return null
	} else {
		return (
			<Container maxWidth="xl" className={classes.container} id="sales-list">
				<Grid container justify="space-around" spacing={0}>
					<Grid item xs={12} className={classes.textCenter}>
						<Typography paragraph gutterBottom variant="h6">
							Aprovechá nuestras {totalResults} Ofertas disponibles por tiempo
							limitado
						</Typography>
					</Grid>
					{products.map((product, index: number) => (
						<Grid
							key={index}
							item
							xs={12}
							sm={6}
							md={4}
							lg={3}
							xl={2}
							className={classes.column}
						>
							<SaleCard productFromProps={product} loading={loading} />
						</Grid>
					))}
					<Grid item xs={12} className={classes.pagination}>
						<Pagination
							count={totalPages}
							color="primary"
							onChange={handlePageChange}
							size="small"
						/>
					</Grid>
				</Grid>
			</Container>
		)
	}
}

export default ProductsOnSaleSection
