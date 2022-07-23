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
        height: "350px",

        [theme.breakpoints.down("sm")]: {
            height: "230px",
        },

        [theme.breakpoints.down("xs")]: {
            height: "150px",
        },
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.1,
        transition: "all 0.3s",
        position: "absolute",
        left: 0,
        top: 0,

        "&:hover": {
            transform: "scale(1.2)",
        },
    },
    contentContainer: {
        padding: theme.spacing(2),
        width: "100%",
        height: "100%",
        position: "relative",
        background: theme.palette.primary["300"],
        overflow: "hidden",
        borderTopLeftRadius: theme.spacing(5),
        borderBottomRightRadius: theme.spacing(5),

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",

        transition: "all 0.3s",

        "&:hover": {
            background: theme.palette.error.main,

            "& #description": {
                height: "200px",
            },
        },
    },

    heading: {
        color: theme.palette.common.white,
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
    },

    description: {
        transition: "all 0.3s",

        color: theme.palette.common.white,
        overflow: "hidden",
        height: 0,
    },
}));

export interface SingleInsight {
    imgSrc: string;
    heading: string;
    description: string;
}

export type AppSingleInsightClassKey = StyleClassKey<typeof useStyles>;

export interface AppSingleInsightProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppSingleInsightClassKey
    > {
    insight: SingleInsight;
}

export const AppSingleInsight = (props: AppSingleInsightProps) => {
    const classes = useStyles(props);
    const { className, insight, ...rest } = props;

    // const [display, setDisplay] = useState<"none" | "visible">("none");

    return (
        <div
            className={classes.root}
            {...rest}
            // onMouseEnter={() => setDisplay("visible")}
            // onMouseLeave={() => setDisplay("none")}
        >
            <div className={classes.contentContainer}>
                <img
                    className={classes.image}
                    alt={insight.heading}
                    src={insight.imgSrc}
                />
                <Typography className={classes.heading} variant="body1">
                    {insight.heading}
                </Typography>

                {/* {display === "visible" && ( */}
                <Typography
                    variant="caption"
                    id="description"
                    className={classes.description}>
                    {insight.description}
                </Typography>
                {/* )} */}
            </div>
        </div>
    );
};
