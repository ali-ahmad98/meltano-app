import {
    Grid,
    makeStyles,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";
import { AppButton } from "../Components/AppButton";
import { BenifitsCarousel } from "../Components/BenifitsCarousel";
import netlifyLogo from "Images/Benifits/netlify_logo.png";
import remoteLogo from "Images/Benifits/remote-logo.jpeg";
import zapierLogo from "Images/Benifits/zapier.png";
import dutchieLogo from "Images/Benifits/dutchie.png";
import hackeroneLogo from "Images/Benifits/hackerone-logo.jpeg";
import gitlabLogo from "Images/Benifits/gitlab-logo.png";

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    heading: {
        fontWeight: "bold",
        textAlign: "center",
        color: theme.palette.primary.dark,
        margin: theme.spacing(5, 0),
    },
    carouselWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    headingTitle: {
        "& strong": {
            color: theme.palette.error.main,
        },
        fontWeight: "bold",
        color: theme.palette.primary.dark,
    },
    howToBtnWrapper: {
        marginBottom: theme.spacing(3),
    },

    logoImages: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
    },

    logosContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px",
        [theme.breakpoints.down("md")]: {
            padding: "15px",
        },
    },
}));

export type BenifitsClassKey = StyleClassKey<typeof useStyles>;

export interface BenifitsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        BenifitsClassKey
    > {}

export const Benifits = (props: BenifitsProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <div className={classes.root} {...rest}>
            <Typography className={classes.heading} variant="h2">
                The Benifits of Meltano
            </Typography>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                <Typography variant="body1" className={classes.responsiveWidth}>
                    Meltano resolves the fragility and complexity of the modern
                    data stack by giving you one place to manage every aspect of
                    your data platform and collaboratively improve it like a
                    software project.
                </Typography>
            </div>
            <div className={classes.carouselWrapper}>
                <BenifitsCarousel className={classes.responsiveWidth} />
            </div>

            <div
                className={classes.howToBtnWrapper}
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <AppButton buttonVariant="red" rounded>
                    How To Use Meltano
                </AppButton>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Grid container className={classes.responsiveWidth} spacing={5}>
                    <Grid md={6} xs={12} item>
                        <Typography
                            className={classes.headingTitle}
                            variant="h2">
                            <strong>1,000-plus Organizations </strong>
                            <br />
                            Working With Us to Create a Seamless DataOps
                            Experience
                        </Typography>
                    </Grid>
                    <Grid container md={6} xs={12} item>
                        {[
                            netlifyLogo,
                            hackeroneLogo,
                            gitlabLogo,
                            zapierLogo,
                            remoteLogo,
                            dutchieLogo,
                        ].map((logo) => (
                            <Grid
                                item
                                md={4}
                                xs={6}
                                className={classes.logosContainer}>
                                <img
                                    alt="logos"
                                    className={classes.logoImages}
                                    src={logo}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
