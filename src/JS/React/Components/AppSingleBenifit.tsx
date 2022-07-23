import {
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: "relative",
        marginLeft: "20px",
        marginRight: "20px",
        padding: theme.spacing(2, 4),
        borderBottomRightRadius: theme.spacing(5),

        "&:hover": {
            background: theme.palette.primary["100"],

            "& #benifitBorder": {
                height: "100%",
            },
        },
    },
    benifitBorder: {
        position: "absolute",
        height: "50%",
        width: "1px",
        top: 0,
        left: 0,
        background: theme.palette.primary.main,
        transition: "0.2s ease-out",
    },
    icon: {
        width: "90px",
        height: "90px",
    },
    heading: {
        color: theme.palette.primary.dark,
        fontWeight: "bold",
    },
    description: {
        color: theme.palette.grey[300],
        marginTop: theme.spacing(2),
    },
}));

export interface SingleBenifit {
    imgSrc: string;
    heading: string;
    description: string;
}

export type AppSingleBenifitClassKey = StyleClassKey<typeof useStyles>;

export interface AppSingleBenifitProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppSingleBenifitClassKey
    > {
    benifit: SingleBenifit;
}

export const AppSingleBenifit = (props: AppSingleBenifitProps) => {
    const classes = useStyles(props);
    const { className, benifit, ...rest } = props;

    return (
        <div className={classes.root} {...rest}>
            <div id="benifitBorder" className={classes.benifitBorder} />
            <img
                alt={benifit.heading}
                className={classes.icon}
                src={benifit.imgSrc}
            />
            <Typography variant="h4" className={classes.heading}>
                {benifit.heading}
            </Typography>
            <Typography variant="body1" className={classes.description}>
                {benifit.description}
            </Typography>
        </div>
    );
};
