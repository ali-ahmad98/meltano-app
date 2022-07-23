import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/React/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.primary.main,
        borderRadius: "50%",
        color: theme.palette.common.white,
        transition: "0.2s ease-out",
        cursor: "pointer",
        boxShadow:
            "0 12px 14px rgba(33, 33, 33, 0.1),0 4px 4px rgba(33, 33, 33, 0.1)",

        "&:hover": {
            background: theme.palette.common.white,
            color: theme.palette.common.black,
        },
    },
    icon: {
        fontSize: "20px",
    },
    disabled: {
        background: theme.palette.grey[400],
        "&:hover": {
            background: theme.palette.grey[400],
            color: theme.palette.common.white,
        },
    },
}));

export type AppCustomArrowClassKey = StyleClassKey<typeof useStyles>;

export interface AppCustomArrowProps
    extends StandardProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        AppCustomArrowClassKey
    > {
    variant: "left" | "right";
    disabled?: boolean;
}

export const AppCustomArrow = (props: AppCustomArrowProps) => {
    const classes = useStyles(props);
    const { className, variant, disabled, ...rest } = props;

    return (
        <div
            {...rest}
            className={clsx(classes.root, disabled && classes.disabled)}>
            {variant === "left" && (
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={["fas", "arrow-left-long"]}
                />
            )}
            {variant === "right" && (
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={["fas", "arrow-right-long"]}
                />
            )}
        </div>
    );
};
