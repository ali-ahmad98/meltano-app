import {
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    imageContainer: {
        // zIndex: 1,
        height: "300px",
        overflow: "hidden",
        borderRadius: theme.spacing(5, 0),
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "0.5s ease-out",

        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    contentContainer: {
        background: theme.palette.common.white,
        margin: theme.spacing(0, 3),
        marginTop: theme.spacing(-6),
        borderRadius: theme.spacing(5, 0),
        padding: theme.spacing(3),
        position: "relative",
        boxShadow: "0 0 110px 110px rgb(7 9 78 / 15%)",
    },
    heading: {
        color: theme.palette.primary.main,
        letterSpacing: ".2em",
        fontWeight: 500,
    },
    description: {
        fontWeight: "bold",
        marginTop: theme.spacing(1),
    },
}));

export interface SingleTrend {
    imgSrc: string;
    heading: string;
    description: string;
}

export type AppSingleTrendClassKey = StyleClassKey<typeof useStyles>;

export interface AppSingleTrendProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppSingleTrendClassKey
    > {
    trend: SingleTrend;
}

export const AppSingleTrend = (props: AppSingleTrendProps) => {
    const classes = useStyles(props);
    const { className, trend, ...rest } = props;

    return (
        <div className={classes.root} {...rest}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.image}
                    src={trend.imgSrc}
                    alt={trend.heading}
                />
            </div>
            <div className={classes.contentContainer}>
                <Typography className={classes.heading} variant="caption">
                    {trend.heading}
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    {trend.description}
                </Typography>
            </div>
        </div>
    );
};
