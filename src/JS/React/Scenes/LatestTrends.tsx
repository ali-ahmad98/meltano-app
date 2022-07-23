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
import bgWaveTop from "Images/Backgrounds/bg-wave-grey-top.png";
import { AppSingleTrend, SingleTrend } from "../Components/AppSingleTrend";
import blogPortadaImage from "Images/Trends/Blog-portada.png";
import placeholderImage from "Images/Trends/placeholder.jpeg";
import togetherImage from "Images/Trends/Screen-Shot.png";
import { AppButton } from "../Components/AppButton";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.grey[600],
        backgroundImage: `url(${bgWaveTop})`,
        backgroundRepeat: "no-repeat",
        padding: theme.spacing(20, 0),

        [theme.breakpoints.up("xl")]: {
            backgroundSize: "100%",
        },
    },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: theme.palette.primary.dark,
        marginBottom: theme.spacing(5),
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(5),
    },
    gridItem: {
        padding: theme.spacing(1.5),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1.5, 0),
        },
    },
}));

export type LatestTrendsClassKey = StyleClassKey<typeof useStyles>;

export interface LatestTrendsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        LatestTrendsClassKey
    > {}

const trends: SingleTrend[] = [
    {
        heading: "DATA AND ANALYTICS",
        description: "How to Build a Custom Extractor with Meltano",
        imgSrc: blogPortadaImage,
    },
    {
        heading: "CULTURE",
        description:
            "DataOps Teams Get a Seat at the Adult’s Table as Organizations Recognize their Strategic, Proactive Value",
        imgSrc: placeholderImage,
    },
    {
        heading: "COMPANY",
        description:
            "A New Code for a New Day: Meltano Updates its Core Values",
        imgSrc: togetherImage,
    },
];

export const LatestTrends = (props: LatestTrendsProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <div className={classes.responsiveWidth}>
                <Typography variant="h2" className={classes.title}>
                    Stay Up to Date with the Latest Trends in DataOps
                </Typography>

                <Grid container>
                    {trends.map((d) => (
                        <Grid item md={4} xs={12} className={classes.gridItem}>
                            <AppSingleTrend trend={d} />
                        </Grid>
                    ))}
                </Grid>

                <div className={classes.btnContainer}>
                    <AppButton buttonVariant="red" rounded>
                        Get DataOps Insights
                    </AppButton>
                </div>
            </div>
        </div>
    );
};
