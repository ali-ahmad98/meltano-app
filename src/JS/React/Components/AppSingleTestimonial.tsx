import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    headingWrapper: {
        background: theme.palette.grey[600],
        padding: theme.spacing(10, 5),
        borderTopLeftRadius: theme.spacing(5),
        borderBottomRightRadius: theme.spacing(5),
        position: "relative",
    },
    heading: {
        fontWeight: "bold",
        color: theme.palette.primary.main,
    },
    gridContainer: {
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
        },
    },
    redTitle: {
        color: theme.palette.error.main,
        background: theme.palette.common.white,
        margin: theme.spacing(0, 2),
    },
    clientInfo: {
        display: "flex",
        marginTop: theme.spacing(6),
    },
    clientName: {
        fontWeight: "bold",
        marginRight: theme.spacing(2),
    },
    learnMore: {
        position: "absolute",
        right: "40px",
        bottom: "20px",
        color: theme.palette.error.main,
        display: "flex",
        alignItems: "center",
    },
    arrowIcon: {
        marginLeft: theme.spacing(2),
    },
    imageWrapper: {
        textAlign: "center",

        [theme.breakpoints.down("sm")]: {
            border: `4px solid ${theme.palette.grey[700]}`,
            borderRadius: "0px 40px",
            height: "100%",
            width: "80%",
            padding: theme.spacing(5),
        },
    },
    imageItem: {
        display: "flex",
        justifyContent: "end",
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",

        [theme.breakpoints.down("sm")]: {
            width: "50%",
            height: "50%",
        },
    },
}));

export type AppSingleTestimonialsClassKey = StyleClassKey<typeof useStyles>;

export interface SingleTestimonial {
    title1: string;
    redTitle: string;
    title2?: string;
    clientName: string;
    designation: string;
    logo: string;
}

export interface AppSingleTestimonialsProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppSingleTestimonialsClassKey
    > {
    testimonial: SingleTestimonial;
}

export const AppSingleTestimonials = (props: AppSingleTestimonialsProps) => {
    const classes = useStyles(props);
    const { className, testimonial, ...rest } = props;

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid
                container
                spacing={3}
                className={classes.gridContainer}
                justify="center"
                alignItems="center">
                <Grid
                    item
                    md={8}
                    xs={12}
                    style={{
                        width: "100%",
                    }}>
                    <div className={classes.headingWrapper}>
                        <Typography variant="h3" className={classes.heading}>
                            “{testimonial.title1}
                            <span className={classes.redTitle}>
                                {testimonial.redTitle}
                            </span>
                            {testimonial.title2}”
                        </Typography>
                        <div className={classes.clientInfo}>
                            <Typography
                                className={classes.clientName}
                                variant="body1">
                                {testimonial.clientName}
                            </Typography>
                            <Typography variant="body1">
                                {testimonial.designation}
                            </Typography>
                        </div>
                        <div className={classes.learnMore}>
                            <Typography variant="body1">
                                <strong>LEARN MORE</strong>
                            </Typography>
                            <FontAwesomeIcon
                                className={classes.arrowIcon}
                                icon={["fas", "arrow-right-long"]}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} className={classes.imageItem}>
                    <div className={classes.imageWrapper}>
                        <img
                            alt={testimonial.clientName}
                            className={classes.image}
                            src={testimonial.logo}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
