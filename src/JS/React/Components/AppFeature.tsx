import {
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4),
        border: `2px solid ${theme.palette.grey[500]}`,
        transition: "0.2s ease-out",
        borderTopLeftRadius: theme.spacing(5),
        borderBottomRightRadius: theme.spacing(5),
        textAlign: "center",
        height: "100%",

        [theme.breakpoints.down("sm")]: {
            border: "none",
            padding: theme.spacing(2),
        },

        "&:hover": {
            background: theme.palette.grey[600],
        },
    },
    title: {
        fontWeight: "bold",
        color: theme.palette.primary.dark,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    description: {
        color: theme.palette.grey[300],
    },
}));

export type AppFeatureClassKey = StyleClassKey<typeof useStyles>;

export interface AppFeatureProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppFeatureClassKey
    > {
    feature: SingleFeature;
}

export interface SingleFeature {
    imgSrc: string;
    title: string;
    description: string;
}

export const AppFeature = (props: AppFeatureProps) => {
    const classes = useStyles(props);
    const { className, feature, ...rest } = props;

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <img alt={feature.title} src={feature.imgSrc} />
            <Typography className={classes.title} variant="h4">
                {feature.title}
            </Typography>
            <Typography className={classes.description} variant="body2">
                {feature.description}
            </Typography>
        </div>
    );
};
