import { FC } from "react"

import { makeStyles } from "@material-ui/core/styles"

import Navbar from "./Navbar"

const useStyles = makeStyles({
	paddingTop: {
		paddingTop: 60,
	},
})

const Layout: FC = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.paddingTop}>
			<Navbar />
			{children}
		</div>
	)
}

export default Layout
