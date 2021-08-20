import { FC } from "react";

import {
    Container,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

import Slider from "react-slick";

const settings = {
    dots: true,
    accessibility: true,
    autoplaySpeed: 10000,
    autoplay: true,
    arrows: true,
    pauseOnHover: true,
};

const useStyles = makeStyles({
    container: {
        padding: "3rem",
        background: "#f5f5f5",
        marginTop: "3rem",
        borderRadius: 8,
    },
    column: {
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    textCenter: {
        textAlign: "center",
        marginTop: "2rem",
    },
    media: {
        height: 0,
        paddingTop: "100%",
        borderRadius: 5,
    },
    accordion: {
        marginTop: "3rem",
        borderRadius: 8,
        "&::before": {
            backgroundColor: "#fff",
        },
    },
    link: {
        textTransform: "capitalize",
    },
    banner: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
    card: {
        borderRadius: 8,
    },
});

const Categories: FC<Props> = ({ onClick }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container} id="categorias">
            <Typography
                variant="h4"
                className={classes.textCenter}
                style={{ marginTop: 0, marginBottom: "2rem" }}
            >
                Tenemos Stock de:
            </Typography>
            <Slider {...settings}>
                {mainCategories.map((part, index: number) => (
                    <div key={index} className={classes.banner}>
                        <Grid container justify="space-around" spacing={4}>
                            {part.map((category, i: number) => (
                                <Grid
                                    key={i}
                                    item
                                    xs={12}
                                    md={4}
                                    lg={3}
                                    xl={2}
                                    className={classes.column}
                                >
                                    <Card className={classes.card}>
                                        <CardActionArea
                                            onClick={() =>
                                                onClick(category.endpoint)
                                            }
                                        >
                                            <CardContent>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={category.imageUrl}
                                                />
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.textCenter
                                                    }
                                                >
                                                    {category.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))}
            </Slider>

            <Accordion
                className={classes.accordion}
                style={{ borderRadius: 8 }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Todas las Categorías:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={4} component="ul">
                        {categoriesArray.map((category, index: number) => (
                            <Grid
                                item
                                key={index}
                                component="li"
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                            >
                                <Link
                                    href="#"
                                    onClick={() => onClick("/" + category)}
                                    className={classes.link}
                                >
                                    {category}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default Categories;

interface Props {
    onClick: (category: string) => void;
}

const categoriesArray = [
    "accesorios",
    "accesorios - mujer",
    "accesorios de viaje",
    "bandoleras",
    "barbijos - cubrebocas",
    "billeteras",
    "billeteras - hombre",
    "billeteras - mujer",
    "billeteras - tarjetero",
    "billeteras de cuero - hombre",
    "billeteras de cuero - mujer",
    "bolsos",
    "botineros",
    "carteras",
    "carteras de dama",
    "carteras (simil cuero)",
    "cartucheras",
    "maletines",
    "mochilas",
    "mochilas escolares",
    "mochilas porta notebooks",
    "mochilas urbanas",
    "morrales",
    "paraguas",
    "paraguas de hombre y de mujer",
    "porta cosméticos",
    "porta notebooks",
    "portafolios",
    "portafolios porta notebooks",
    "portafolios (simil cuero)",
    "productos fabricados",
    "riñoneras",
    "valijas",
];

const mainCategories = [
    [
        {
            name: "Riñoneras",
            imageUrl: "/images/categories/riñoneras.jpeg",
            endpoint: "/riñoneras",
        },
        {
            name: "Accesorios de Viaje",
            imageUrl: "/images/categories/accesorios-de-viaje.jpeg",
            endpoint: "/accesorios de viaje",
        },
        {
            name: "Valijas",
            imageUrl: "/images/categories/valijas.jpeg",
            endpoint: "/valijas",
        },
        {
            name: "Morrales",
            imageUrl: "/images/categories/morrales.jpeg",
            endpoint: "/morrales",
        },
    ],
    [
        {
            name: "Mochilas",
            imageUrl: "/images/categories/mochilas.jpeg",
            endpoint: "/mochilas",
        },
        {
            name: "Mochilas Urbanas",
            imageUrl: "/images/categories/mochilas-urbanas.jpeg",
            endpoint: "/mochilas urbanas",
        },
        {
            name: "Carteras de Dama",
            imageUrl: "/images/categories/carteras-de-dama.jpeg",
            endpoint: "/carteras de dama",
        },
        {
            name: "Portafolios (Simil Cuero)",
            imageUrl: "/images/categories/portafolios.jpeg",
            endpoint: "/portafolios (simil cuero)",
        },
    ],
    [
        {
            name: "Mochilas Porta Notebooks",
            imageUrl: "/images/categories/porta-notebooks.jpeg",
            endpoint: "/porta notebooks",
        },
        {
            name: "Paraguas de Hombre y de Mujer",
            imageUrl: "/images/categories/paraguas.jpeg",
            endpoint: "/paraguas de hombre y de mujer",
        },
    ],
];
