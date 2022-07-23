import {
    Grid,
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";
import bgWaveTop from "Images/Backgrounds/bg-wave-top.png";
import bgWaveBottom from "Images/Backgrounds/bg-wave-bottom3.jpg";
import { IndustryInsightsItems } from "./IndustryInsightsItems";
import { AppButton } from "../Components/AppButton";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `url(${bgWaveTop}),url(${bgWaveBottom})`,
        backgroundSize: "auto,auto",
        backgroundPosition: "top,bottom",
        backgroundRepeat: "no-repeat,no-repeat",
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(20, 0),

        [theme.breakpoints.up("lg")]: {
            backgroundSize: "100% 20%,100% 50%",
        },
    },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    heading: {
        color: theme.palette.common.white,
        fontWeight: "bold",
        marginBottom: theme.spacing(5),

        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    },
    buttonWrapper: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        },
    },
}));

export type IndustryInsightsClassKey = StyleClassKey<typeof useStyles>;

export interface IndustryInsightsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        IndustryInsightsClassKey
    > {}

export const IndustryInsights = (props: IndustryInsightsProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <div className={clsx(className, classes.root)} {...rest}>
            <Grid container className={classes.responsiveWidth} spacing={2}>
                <Grid item md={5} xs={12}>
                    <Typography variant="h2" className={classes.heading}>
                        Find How Meltano Performs for Teams Like Yours
                    </Typography>
                    <div className={classes.buttonWrapper}>
                        <AppButton buttonVariant="red" rounded>
                            Get More DataOps Insights
                        </AppButton>
                    </div>
                </Grid>
                <Grid item md={7} xs={12}>
                    <IndustryInsightsItems />
                </Grid>
            </Grid>
        </div>
    );
};
