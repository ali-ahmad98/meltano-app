import React from "react";
import { Theme, StandardProps, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "../Typescript";
import { LottieAnimation } from "./LottieAnimation";
import { AppButton } from "../Components/AppButton";
import clsx from "clsx";
import bgHomeTop from "Images/Backgrounds/bg-home-top2.jpg";
import bgHomeBottom from "Images/Backgrounds/home-hero-bottom.png";

import deployIcon from "Images/Home/deploy-icon.svg";
import connectors from "Images/Home/connectors.svg";
import customizableIcon from "Images/Home/customizable-icon.svg";
import devopsIcon from "Images/Home/devops-icon.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundImage: `url(${bgHomeTop})`,
            color: theme.palette.common.white,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            paddingTop: theme.spacing(2),
            background: theme.palette.primary.main,

            [theme.breakpoints.up("lg")]: {
                backgroundSize: "100% auto !important",
            },
        },
        container: {
            paddingTop: "5%",
            padding: theme.spacing(0, 5),

            [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(0, 2),
            },
        },
        boldFont: {
            fontWeight: "bold",
        },
        subHeading: {
            margin: theme.spacing(3, 0),
        },

        secondHeading: {
            textAlign: "center",
            marginTop: theme.spacing(15),
            marginBottom: theme.spacing(10),
        },

        homeTitleWrapper: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
                alignItems: "center",
                textAlign: "center",
            },
        },

        lottieGrid: {
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse",
            },
        },

        homeTopGridItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },

        benifits: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: theme.spacing(3, 6),
            borderBottomRightRadius: theme.spacing(5),
            transition: "0.2s ease-out",
            textAlign: "center",

            [theme.breakpoints.down("sm")]: {
                padding: theme.spacing(3, 2),
            },

            "&:hover": {
                background: theme.palette.primary["300"],

                [theme.breakpoints.down("sm")]: {
                    background: "none",
                },

                "& #benifitBorder": {
                    height: "100%",
                },
            },
        },

        benifitsCenterHeading: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
            fontWeight: "bold",
        },

        benifitsIcons: {
            width: "80px",
            height: "80px",
        },

        benifitBorder: {
            position: "absolute",
            height: "50%",
            width: "1px",
            top: 0,
            left: 0,
            background: "white",
            transition: "0.2s ease-out",

            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },

        homeBottom: {
            background: `url(${bgHomeBottom}) 0 100% no-repeat`,

            [theme.breakpoints.up("xl")]: {
                backgroundSize: "100% auto",
            },
        },

        btnContainer: {
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(20),
            marginBottom: theme.spacing(11),
        },
    }),
);

export type HomeTopClassKey = StyleClassKey<typeof useStyles>;
export interface HomeTopProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        HomeTopClassKey
    > {}

interface TechnicalBenifits {
    imageSrc: string;
    title: string;
    description: string;
}

const technicalBenifits: TechnicalBenifits[] = [
    {
        imageSrc: deployIcon,
        title: "Deploy Anywhere",
        description: `Meltano provides the ultimate flexibility in deployment options. Own your data stack, end to end.`,
    },
    {
        imageSrc: connectors,
        title: "Largest Plugin Library",
        description: `Ever-growing library of 300-plus data tools and connectors that can be up and running in minutes.`,
    },
    {
        imageSrc: customizableIcon,
        title: "Stable & Reliable",
        description: `Validate the impact of your changes before they go live and easily roll back any mistakes.`,
    },
    {
        imageSrc: devopsIcon,
        title: "Extensible",
        description: `Add new plugins incrementally. Curated list of plugins maintained to keep up with market trends and best practices.`,
    },
];

export const HomeTop = (props: HomeTopProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <>
            <div className={classes.root} {...rest}>
                <Grid
                    container
                    className={clsx(classes.container, classes.homeBottom)}
                    alignItems="center">
                    <Grid container className={classes.lottieGrid}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.homeTopGridItem}>
                            <div className={classes.homeTitleWrapper}>
                                <Typography
                                    className={classes.boldFont}
                                    variant="h1">
                                    Your DataOps Platform Infrastructure
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={classes.subHeading}>
                                    Craft your ideal end-to-end data platform
                                    using your chosen data tools
                                </Typography>
                                <AppButton rounded buttonVariant="red">
                                    Get Started
                                </AppButton>
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.homeTopGridItem}>
                            <LottieAnimation height={"80%"} width={"80%"} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            className={clsx(
                                classes.boldFont,
                                classes.secondHeading,
                            )}>
                            Your Data Stack Maintained from the CLI in Minutes
                        </Typography>
                    </Grid>

                    <Grid container>
                        {technicalBenifits.map((d) => (
                            <Grid
                                className={classes.benifits}
                                item
                                md={3}
                                xs={6}>
                                <div
                                    id="benifitBorder"
                                    className={classes.benifitBorder}
                                />
                                <img
                                    alt={d.title}
                                    className={classes.benifitsIcons}
                                    src={d.imageSrc}
                                />
                                <Typography
                                    className={classes.benifitsCenterHeading}
                                    variant="h6">
                                    {d.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        textAlign: "center",
                                    }}>
                                    {d.description}
                                </Typography>{" "}
                            </Grid>
                        ))}

                        <Grid item xs={12} className={classes.btnContainer}>
                            <AppButton buttonVariant="red" rounded>
                                How Meltano Works
                            </AppButton>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div
                style={{
                    height: "10px",
                    marginTop: "-5px",
                    background: "white",
                }}
            />
        </>
    );
};
