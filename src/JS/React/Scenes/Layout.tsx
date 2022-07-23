import React from "react";
import { AppBarProps, StandardProps, Theme } from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import { makeStyles } from "@material-ui/styles";
import { Navbar } from "../Components/Navbar/Navbar";

const useStyles = makeStyles((theme: Theme) => ({}));

export type LayoutClassKey = StyleClassKey<typeof useStyles>;

export interface LayoutProps
    extends StandardProps<AppBarProps, LayoutClassKey> {
    children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    // const classes = useStyles(props);
    const { children } = props;

    return (
        <React.Fragment>
            <Navbar />
            <div>{children}</div>
        </React.Fragment>
    );
};
