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
import bgFooter from "Images/Backgrounds/bg-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import footerLogo from "Images/meltano-logo.png";
import { AppTextField } from "../Components/AppTextFields";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.grey[600],
        backgroundImage: `url(${bgFooter})`,
        backgroundRepeat: "no-repeat",
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(5),
        color: theme.palette.common.white,
        backgroundSize: "cover",
    },
    responsiveWidth: {
        width: "80%",
        maxWidth: "1440px",

        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
    grey100: { color: theme.palette.grey[100] },
    footerTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    findUs: {
        margin: theme.spacing(2, 0),
    },

    socialIcons: {
        width: "35px",
        height: "35px",
        marginRight: theme.spacing(2),
        transition: "all 0.1s",

        "&:hover": {
            color: theme.palette.common.white,
            transform: "scale(1.1)",
        },
    },

    imageContainer: {
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    openSource: {
        color: theme.palette.grey[100],
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
    },
    contribute: {
        fontWeight: "bold",
        paddingRight: theme.spacing(2),
    },

    iconsWrapper: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        },
    },

    textFieldWrapper: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    textField: {
        marginTop: theme.spacing(2),

        [theme.breakpoints.down("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "80%",
        },
    },

    footerLink: {
        fontWeight: "bold",
        padding: theme.spacing(0, 1),
        cursor: "pointer",

        "&:hover": {
            textDecoration: "underline",
        },
    },

    responsiveCenter: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    },
}));

export type FooterClassKey = StyleClassKey<typeof useStyles>;

export interface FooterProps
    extends StandardProps<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        FooterClassKey
    > {}

export const Footer = (props: FooterProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    const socialIcons = [
        "github",
        "slack",
        "twitter",
        "linkedin",
        "facebook",
        "instagram",
        "youtube",
    ];

    const footerLinks = [
        "ABOUT",
        "CONTACT",
        "CAREERS",
        "PRESS",
        "PRIVACY POLICY",
        "TERMS OF SERVICES",
    ];

    return (
        <>
            <footer className={clsx(classes.root, className)} {...rest}>
                <div className={classes.responsiveWidth}>
                    <Grid container>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.responsiveCenter}>
                            <Typography
                                variant="h6"
                                className={classes.footerTitle}>
                                Be part of our{" "}
                                <strong className={classes.grey100}>
                                    community
                                </strong>{" "}
                                and connect with us.
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.findUs}>
                                Find us on:
                            </Typography>

                            <div className={classes.iconsWrapper}>
                                {socialIcons.map((i) => (
                                    <FontAwesomeIcon
                                        className={clsx(
                                            classes.socialIcons,
                                            classes.grey100,
                                        )}
                                        icon={["fab", i as IconName]}
                                    />
                                ))}
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.responsiveCenter}>
                            <Typography
                                variant="h6"
                                className={classes.footerTitle}>
                                Join Out Mailing List
                            </Typography>
                            <Typography variant="caption">
                                Discover the latest DataOps market trends, open
                                source platform insights and the integration
                                tools that data analysts and developers are
                                looking for.
                            </Typography>
                            <div className={classes.textFieldWrapper}>
                                <AppTextField
                                    className={classes.textField}
                                    placeholder="Your Email Address"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        style={{
                            marginTop: "20px",
                        }}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.responsiveCenter}>
                            <div className={classes.imageContainer}>
                                <img
                                    src={footerLogo}
                                    style={{
                                        maxHeight: 110,
                                        maxWidth: 150,
                                    }}
                                    alt="footer-logo"
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Typography
                                        className={classes.openSource}
                                        variant="caption">
                                        MELTANO IS OPEN SOURCE.
                                    </Typography>
                                    <div>
                                        <Typography
                                            variant="caption"
                                            className={classes.contribute}>
                                            CONTRIBUTE TO THE PROJECT
                                        </Typography>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right-long"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            className={classes.responsiveCenter}>
                            {footerLinks.map((d) => (
                                <Typography
                                    className={classes.footerLink}
                                    variant="caption">
                                    {d}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </footer>
        </>
    );
};
