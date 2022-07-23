import React from "react";
import { Theme, StandardProps } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "../Typescript";
import animationData from "Assets/lottie.json";
import Lottie, { LottieProps } from "react-lottie";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
    }),
);

export type LottieAnimationClassKey = StyleClassKey<typeof useStyles>;
export interface LottieAnimationProps
    extends StandardProps<
        Omit<LottieProps, "options">,
        LottieAnimationClassKey
    > {}

export const LottieAnimation = (props: LottieAnimationProps) => {
    // const classes = useStyles(props);
    const { className, classes: tmpClasses, ref, ...rest } = props;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} {...rest} />;
};
