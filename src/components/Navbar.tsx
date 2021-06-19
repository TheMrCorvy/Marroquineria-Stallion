import Link from "next/Link"

import { FC, MouseEvent, useState } from "react"

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	MenuItem,
	Menu,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Button,
	Badge,
} from "@material-ui/core"

import { fade, makeStyles, Theme, createStyles } from "@material-ui/core/styles"

import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import MoreIcon from "@material-ui/icons/MoreVert"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { toggleCartModal } from "../redux/actions/cartActions"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: "none",
			textTransform: "capitalize",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
		sectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		sectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
		divider: {
			marginTop: "0.15rem",
			marginBottom: "0.15rem",
		},
		drawer: {
			height: "60%",
			display: "flex",
			justifyContent: "space-around",
			flexDirection: "column",
			marginTop: "auto",
			marginBottom: "auto",
		},
	})
)

const Navbar: FC = () => {
	const { cart } = useSelector((state: RootState) => state.cart)

	const dispatch = useDispatch()

	const classes = useStyles()

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)

	const [open, setOpen] = useState(false)

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	const toggleDrawer = () => {
		setOpen(!open)
	}

	const openCartModal = () => {
		dispatch(toggleCartModal(true))
	}

	const renderMenus = (option: "desktop" | "mobile" | "drawer") => {
		if (option === "desktop") {
			return (
				<div className={classes.sectionDesktop}>
					<Button color="inherit">Pedir Cotización</Button>
					<Link href="/categorias">
						<Button color="inherit" component="a">
							Categorías
						</Button>
					</Link>
					<IconButton color="inherit" onClick={openCartModal}>
						<Badge badgeContent={cart.count} color="secondary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
				</div>
			)
		}

		if (option === "mobile") {
			return (
				<Menu
					anchorEl={mobileMoreAnchorEl}
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					id="primary-search-account-menu-mobile"
					keepMounted
					transformOrigin={{ vertical: "top", horizontal: "right" }}
					open={isMobileMenuOpen}
					onClose={handleMobileMenuClose}
				>
					<MenuItem>Pedir cotización</MenuItem>
					<Divider className={classes.divider} />
					<MenuItem>
						<Link href="/categorias">
							<Typography component="a">Categorías</Typography>
						</Link>
					</MenuItem>
					<Divider className={classes.divider} />
					<MenuItem color="inherit" onClick={openCartModal}>
						<Badge badgeContent={cart.count} color="secondary">
							<ShoppingCartIcon />
						</Badge>
						<Typography component="p">Carrito</Typography>
					</MenuItem>
				</Menu>
			)
		}

		if (option === "drawer") {
			return (
				<List
					role="presentation"
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
					className={classes.drawer}
				>
					<Link href="/">
						<ListItem button component="a">
							<ListItemText primary="Inicio" />
						</ListItem>
					</Link>

					<Divider className={classes.divider} />

					<ListItem button>
						<ListItemText primary="Testiomnios" />
					</ListItem>

					<Divider className={classes.divider} />

					<ListItem button>
						<ListItemText primary="Galería" />
					</ListItem>

					<Divider className={classes.divider} />

					<ListItem button>
						<ListItemText primary="Contacto / Cómo llegar" />
					</ListItem>

					<Divider className={classes.divider} />

					<ListItem button>
						<ListItemText primary="Pedir Cotización" />
					</ListItem>

					<Divider className={classes.divider} />

					<Link href="/categorías">
						<ListItem button component="a">
							<ListItemText>Categorías</ListItemText>
						</ListItem>
					</Link>

					<Divider className={classes.divider} />

					<ListItem button onClick={openCartModal}>
						<ListItemIcon>
							<Badge badgeContent={cart.count} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</ListItemIcon>
						<ListItemText>Carrito</ListItemText>
					</ListItem>
				</List>
			)
		}
	}

	return (
		<>
			<div className={classes.grow}>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>
						<Link href="/">
							<Button color="inherit" component="a" className={classes.title}>
								<Typography variant="h6" noWrap>
									Marroquinería Stallion
								</Typography>
							</Button>
						</Link>

						<div className={classes.grow} />

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Buscar productos"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</div>

						<div className={classes.grow} />

						{renderMenus("desktop")}

						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-controls="primary-search-account-menu-mobile"
								aria-haspopup="true"
								onClick={handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>

				{renderMenus("mobile")}
			</div>
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				{renderMenus("drawer")}
			</Drawer>
		</>
	)
}

export default Navbar
