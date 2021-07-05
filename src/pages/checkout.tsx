import { useState, useEffect } from "react"

import { useRouter } from "next/router"

import Link from "next/link"

import {
	Container,
	Grid,
	Typography,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Tooltip,
	Divider,
	Stepper,
	Step,
	StepLabel,
	CardActionArea,
	useMediaQuery,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

import clsx from "clsx"

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

import StepOne from "../components/CheckoutSteps/StepOne"
import StepTwo from "../components/CheckoutSteps/StepTwo"
import StepThree from "../components/CheckoutSteps/StepThree"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainContainer: {
			minHeight: "100vh",
			paddingTop: "5rem",
			paddingBottom: "5rem",
			background: "#f3f3f3",
		},
		card: {
			borderRadius: 10,
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
		},
		listMedia: {
			height: 0,
			paddingTop: "56.25%", // 16:9
			borderRadius: 8,
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
		textCapitalize: {
			textTransform: "capitalize",
		},
		smallMarginTop: {
			marginTop: 15,
		},
		title: {
			textTransform: "capitalize",
			paddingTop: 15,
		},
		textGreen: {
			color: green[500],
		},
		content: {
			padingBottom: 0,
		},
		backButton: {
			marginRight: theme.spacing(1),
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	})
)

const steps = ["Datos y Domicilio de Facturación", "Datos para el envío", "Pago Final"]

const Checkout = () => {
	const { cart } = useSelector((state: RootState) => state.cart)
	const user = useSelector((state: RootState) => state.user)

	const router = useRouter()

	const classes = useStyles()

	const theme = useTheme()

	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

	const [expanded, setExpanded] = useState(false)

	/**
	 * 0 = go back to the page
	 * 1, 2, 3, = form steps
	 */
	const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3>(3)

	useEffect(() => {
		if (!cart.products[0]) {
			router.push("/")
		}
	}, [cart])

	useEffect(() => {
		console.log(user)
	}, [user])

	const handleNext = (nextStep: 0 | 1 | 2 | 3) => {
		if (nextStep === 2 || nextStep === 3) {
			setActiveStep(nextStep)
		}
	}

	const handleBack = (prevStep: 0 | 1 | 2 | 3) => {
		if (prevStep === 1 || prevStep === 2) {
			setActiveStep(prevStep)
		}

		if (prevStep === 0) {
			router.back()
		}
	}

	const getStepContent = () => {
		switch (activeStep) {
			case 1:
				return <StepOne handleNext={handleNext} handleBack={handleBack} />
			case 2:
				return <StepTwo handleNext={handleNext} handleBack={handleBack} />
			case 3:
				return <StepThree handleNext={handleNext} handleBack={handleBack} />
			default:
				return <StepOne handleNext={handleNext} handleBack={handleBack} />
		}
	}

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const calcTotalPrice = () => {
		let totalPrice: number = 0

		cart.products.forEach((product) => {
			totalPrice += product.units * Number(product.product.price)
		})

		return totalPrice
	}

	if (!cart.products[0]) {
		return null
	} else {
		return (
			<>
				<Container maxWidth="xl" className={classes.mainContainer}>
					<Grid container justify="space-around" spacing={4}>
						<Grid item xs={12} md={4} lg={3}>
							<Card className={classes.card}>
								<CardHeader title="Tu lista de compras:" />
								<CardMedia
									className={classes.media}
									image={cart.products[0].product.images[0].img_url}
									title={cart.products[0].product.title}
								/>
								<CardContent style={{ paddingBottom: 0 }}>
									<Typography variant="body1">
										<Typography
											variant="subtitle2"
											component="span"
											color="secondary"
											className={classes.textCapitalize}
										>
											{cart.products[0].product.title}
										</Typography>
										{cart.count > 2 && <>, y otros {cart.count - 1} más</>}
									</Typography>
								</CardContent>
								<CardActions disableSpacing style={{ paddingTop: 0 }}>
									<Typography
										variant="subtitle2"
										className={classes.textGreen}
										style={{ marginLeft: 9 }}
									>
										Precio Total: $ {calcTotalPrice()}
									</Typography>
									<Tooltip
										title="Ver toda la lista de Productos"
										placement="left"
									>
										<IconButton
											className={clsx(classes.expand, {
												[classes.expandOpen]: expanded,
											})}
											onClick={handleExpandClick}
											aria-expanded={expanded}
											aria-label="show more"
										>
											<ExpandMoreIcon />
										</IconButton>
									</Tooltip>
								</CardActions>
								<Collapse in={expanded} unmountOnExit>
									<CardContent>
										{cart.products.map((product, index) => (
											<div key={index}>
												<Divider />
												<Typography
													variant="body1"
													className={classes.title}
													paragraph
													gutterBottom
												>
													{product.product.title}
												</Typography>
												<Link href={"/producto/" + product.product.id}>
													<CardActionArea
														href={"/producto/" + product.product.id}
													>
														<CardMedia
															className={classes.listMedia}
															image={
																product.product.images[0].img_url
															}
															title={product.product.title}
														/>
													</CardActionArea>
												</Link>
												<Typography
													variant="subtitle2"
													color="primary"
													className={classes.smallMarginTop}
													paragraph
													gutterBottom
												>
													{product.units} Unidad/es
												</Typography>
												<Typography
													variant="subtitle2"
													gutterBottom
													paragraph
													className={classes.textGreen}
												>
													$ {product.product.price} (por unidad)
												</Typography>
											</div>
										))}
									</CardContent>
								</Collapse>
							</Card>
						</Grid>
						<Grid item xs={12} md={8} lg={9}>
							<Card className={classes.card}>
								<CardContent>
									<Stepper
										activeStep={activeStep - 1}
										orientation={smallScreen ? "vertical" : "horizontal"}
									>
										{steps.map((label) => (
											<Step key={label}>
												<StepLabel>{label}</StepLabel>
											</Step>
										))}
									</Stepper>
									{getStepContent()}
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</>
		)
	}
}

export default Checkout
