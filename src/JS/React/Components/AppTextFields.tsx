import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Theme,
    StandardProps,
    InputBase,
    InputBaseProps,
    Paper,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import clsx from "clsx";
import { StyleClassKey } from "../Typescript";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            display: "flex",
            padding: theme.spacing(0.4),
            paddingLeft: theme.spacing(3),
            borderRadius: "70px",
            alignItems: "center",
        },
        arrowWrapper: {
            color: theme.palette.common.white,
            background: theme.palette.error.main,
            height: "64px",
            width: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            cursor: "pointer",
            marginLeft: theme.spacing(1),
            transition: "all 0.3s",

            "&:hover": {
                background: theme.palette.primary.dark,
            },
        },
    }),
);

export type AppTextFieldClassKey = StyleClassKey<typeof useStyles>;

export interface AppTextFieldProps
    extends StandardProps<InputBaseProps, AppTextFieldClassKey> {}

export const AppTextField = (props: AppTextFieldProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    return (
        <Paper className={clsx(className, classes.paper)}>
            <InputBase className={classes.root} {...rest} />
            <div className={classes.arrowWrapper}>
                <FontAwesomeIcon icon="arrow-right-long" />
            </div>
        </Paper>
    );
};
