import { FC, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"

import { useDispatch } from "react-redux"
import { initializeCart } from "../redux/actions/cartActions"

import Navbar from "./Navbar"
import ShoppingCartModal from "./ShoppingCartModal"

const useStyles = makeStyles({
	paddingTop: {
		paddingTop: 60,
	},
})

const Layout: FC = ({ children }) => {
	const classes = useStyles()

	const dispatch = useDispatch()

	useEffect(() => {
		setCartState()
	}, [])

	const setCartState = async () => {
		const localCart = localStorage.getItem("shopping-cart")

		if (localCart) {
			const cart = await JSON.parse(localCart)

			dispatch(initializeCart(cart))
		}
	}

	return (
		<>
			<ShoppingCartModal />
			<div className={classes.paddingTop}>
				<Navbar />
				{children}
			</div>
		</>
	)
}

export default Layout
