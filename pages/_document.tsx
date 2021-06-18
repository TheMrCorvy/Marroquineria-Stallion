import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head />
				<body className="ed-grid">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
