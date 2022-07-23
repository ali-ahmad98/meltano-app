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
import { AppFeature, SingleFeature } from "../Components/AppFeature";
import accountabilityIcon from "Images/Features/Accountability.svg";
import guideIcon from "Images/Features/guide-icon.svg";
import instantlyIcon from "Images/Features/instantly-icon.svg";
import integrationIcon from "Images/Features/integration-icon.svg";
import meltanoProjectIcon from "Images/Features/meltano-project.svg";
import orchestrationIcon from "Images/Features/orchestration-icon.svg";
import transformationIcon from "Images/Features/transformation-icon.svg";
import uiIcon from "Images/Features/ui-icon.svg";
import embracesSingerIcon from "Images/Features/embraces-singer-icon.svg";
import { AppButton } from "../Components/AppButton";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    heading: {
        fontWeight: "bold",
        textAlign: "center",
        color: theme.palette.primary.dark,
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(5),
    },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    howToBtnWrapper: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
    },
}));

export type FeaturesClassKey = StyleClassKey<typeof useStyles>;

export interface FeaturesProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        FeaturesClassKey
    > {}

const features: SingleFeature[] = [
    {
        imgSrc: meltanoProjectIcon,
        title: "Your Meltano Project",
        description:
            "Define your entire project as code and collaborate confidently with your team.",
    },
    {
        imgSrc: integrationIcon,
        title: "Integration Just a Few Clicks Away",
        description:
            "The Meltano CLI enables you to rapidly create your project, making it easy to start replicating data.",
    },
    {
        imgSrc: transformationIcon,
        title: "Transformation as a First-class Citizen",
        description:
            "Meltano is designed to be the best way to run dbt to manage your transformations.",
    },
    {
        imgSrc: orchestrationIcon,
        title: "Orchestration Made Simpler",
        description:
            "All it takes is a few keystrokes to get started with Airflow and run you data workloads.",
    },
    {
        imgSrc: instantlyIcon,
        title: "Containerized and Ready for Deployment",
        description:
            "Your entire data stack is defined in your project, making it simple to deploy it to production.",
    },
    {
        imgSrc: uiIcon,
        title: "A UI for Management and Monitoring",
        description:
            "Less comfortable with the command line? Use the built-in UI to get your data stack up and running.",
    },
    {
        imgSrc: guideIcon,
        title: "Easily Add Tools to Complete Your Data Platform",
        description:
            "Ensure data quality with Great Expectations, or let Meltano install, configure, and manage Superset for analysis and BI.",
    },
    {
        imgSrc: accountabilityIcon,
        title: "A Complete Toolset to Manage Singer",
        description:
            "You get everything you need to manage your Singer, from incremental replication state through configuration.",
    },
    {
        imgSrc: embracesSingerIcon,
        title: "Experiment Freely in Isolated Environments",
        description:
            "Validate your changes in development before moving to CI, and in staging before moving to production.",
    },
];

export const Features = (props: FeaturesProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <div className={classes.responsiveWidth}>
                <Typography className={classes.heading} variant="h2">
                    Meltano Tools and Features
                </Typography>
                <Grid container spacing={3}>
                    {features.map((d) => (
                        <Grid item md={4} xs={6}>
                            <AppFeature feature={d} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.howToBtnWrapper}>
                    <AppButton buttonVariant="red" rounded>
                        Try Meltano
                    </AppButton>
                </div>
            </div>
        </div>
    );
};
