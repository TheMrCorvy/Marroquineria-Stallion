import { useEffect } from "react"

import type { AppProps } from "next/app"
import Head from "next/head"

import PropTypes from "prop-types"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")

		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Tienda virtual Marroquinería Stallion" />
				<meta name="keywords" content="Marroquineria Stallion" />
				<title>Marroquinería Stallion</title>

				{/**material UI */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default MyApp
