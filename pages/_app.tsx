import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
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

				{/**MercadoPago */}
				<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
