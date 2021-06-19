import { FC } from "react"

import { makeStyles } from "@material-ui/core/styles"

import Navbar from "./Navbar"
import ShoppingCartModal from "./ShoppingCartModal"

const useStyles = makeStyles({
	paddingTop: {
		paddingTop: 60,
	},
})

const Layout: FC = ({ children }) => {
	const classes = useStyles()

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
