import { FC } from "react"

import Navbar from "./Navbar"

const Layout: FC = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Layout
