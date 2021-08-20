import { FC } from "react";

import Slider from "react-slick";

import { Card, CardMedia } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    media: {
        height: 0,
        paddingTop: "56.52%", // 16:9
        backgroundSize: "contain",
    },
});

const ImageBanner: FC = () => {
    const settings = {
        dots: true,
        accessibility: true,
        autoplaySpeed: 5000,
        autoplay: false,
        arrows: true,
        pauseOnHover: false,
    };

    const classes = useStyle();

    return (
        <Slider {...settings}>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_1.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_2.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_3.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_4.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_6.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_7.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_8.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_9.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_10.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_11.jpeg"
                />
            </Card>
            <Card elevation={0}>
                <CardMedia
                    className={classes.media}
                    image="/images/banner/banner_12.jpeg"
                />
            </Card>
        </Slider>
    );
};

export default ImageBanner;
