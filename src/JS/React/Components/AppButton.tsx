import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import clsx from "clsx";
import { Theme, StandardProps } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "../Typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import btnCenterImg from "Images/Button/btn-center.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        roundedButton: {
            padding: theme.spacing(1, 2.5),
            color: theme.palette.common.white,
            borderTopLeftRadius: theme.spacing(3),
            borderBottomLeftRadius: theme.spacing(3),
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            fontSize: theme.spacing(2),
            fontWeight: "bold",
            textTransform: "uppercase",
            height: "45px",
        },
        redButton: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.error.main}`,
            "&:hover,&:focus": {
                backgroundColor: theme.palette.error.main,
                color: theme.palette.common.white,
            },
        },
        btnIconWrapper: {
            background: theme.palette.error.main,
            display: "flex",
            borderTopRightRadius: theme.spacing(3),
            borderBottomRightRadius: theme.spacing(3),
            paddingRight: theme.spacing(1),
        },
        btnIcon: {
            alignSelf: "center",
            fontSize: theme.spacing(2),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            color: theme.palette.common.white,
        },
        btnCenterImage: {
            height: "45px",
            zIndex: 2,
        },
        smallPadding: {
            padding: theme.spacing(0.7, 1.5),
        },
        largePadding: {
            padding: theme.spacing(1.5, 4),
        },
    }),
);

export type AppButtonClassKey = StyleClassKey<typeof useStyles>;
export interface AppButtonProps
    extends StandardProps<ButtonProps, AppButtonClassKey> {
    buttonVariant?: "red";
    rounded?: boolean;
}

export const AppButton = (props: AppButtonProps) => {
    const classes = useStyles(props);
    const { className, rounded, buttonVariant, children, ...rest } = props;

    return (
        <div
            style={{
                display: "flex",
                cursor: "pointer",
            }}>
            <Button
                className={clsx(className, {
                    [classes.redButton]: buttonVariant === "red",
                    [classes.roundedButton]: rounded === true,
                })}
                {...rest}>
                {children}
            </Button>
            <div className={classes.btnIconWrapper}>
                <img
                    alt="btn-center"
                    src={btnCenterImg}
                    className={classes.btnCenterImage}
                />
                <FontAwesomeIcon
                    icon={["fas", "arrow-right-long"]}
                    className={classes.btnIcon}
                />
            </div>
        </div>
    );
};
