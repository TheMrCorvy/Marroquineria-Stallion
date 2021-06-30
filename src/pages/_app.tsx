import { useEffect } from "react"

import type { AppProps } from "next/app"
import Head from "next/head"

import PropTypes from "prop-types"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../../theme"

import { Provider } from "react-redux"
import store from "../redux/store"

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
				<meta
					name="description"
					content="Visita la Tienda Online de Stallion Marroquinería"
				/>
				<meta name="keywords" content="Marroquineria Stallion" />
				<title>Marroquinería Stallion</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</ThemeProvider>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

export default MyApp

//testing
