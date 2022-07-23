import React, { useState } from "react";
import {
    AppBar,
    AppBarProps,
    StandardProps,
    Theme,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import { makeStyles } from "@material-ui/styles";
import { NavbarItem, NavbarItemType } from "./NavbarItem";
import clsx from "clsx";
import meltanoLogo from "Images/meltano-logo.png";
import { AppButton } from "../AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarDrawer } from "./NavbarDrawer";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.header.background,
        color: theme.header.color,
    },
    toolbarHeight: {
        height: theme.header.height,
        transition: "0.2s ease-out",
    },
    toolbarTriggerHeight: {
        height: theme.header.triggerHeight,
        transition: "0.2s ease-out",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLarge: {
        height: "60px",
        transition: "0.2s ease-out",
    },
    logoSmall: {
        height: "50px",
        transition: "0.2s ease-out",
    },
    navItems: {
        display: "flex",
    },
    navItemWrapper: {
        marginRight: theme.spacing(3),
    },
    barIcon: {
        fontSize: theme.spacing(3),
        color: theme.palette.grey[200],
        cursor: "pointer",
    },
}));

export type NavbarClassKey = StyleClassKey<typeof useStyles>;

export interface NavbarProps
    extends StandardProps<AppBarProps, NavbarClassKey> {}

const getNavbarItems = () => {
    let items: NavbarItemType[] = [];

    items = [
        {
            title: "Product",
            hasChilds: true,
            childs: [
                "Product",
                "Meltano ELT",
                "Meltano At Scale",
                "Managed",
                "Changelog",
            ],
        },
        {
            title: "Explore",
            hasChilds: true,
            childs: [
                "Popular Ways to Use Meltano",
                "Meltano Hub(Connectors)",
                "DataOps",
            ],
        },
        {
            title: "Resources",
            hasChilds: true,
            childs: ["Documentation", "Meltano SDK", "Partners", "Blog"],
        },
        {
            title: "Community",
        },
        {
            title: "Company",
            hasChilds: true,
            childs: ["About", "Our Values", "Company Handbook", "Careers"],
        },
    ];

    return items;
};

interface ElevationProps {
    children: React.ReactElement;
    trigger: boolean;
}

function ElevationScroll(props: ElevationProps) {
    const { children, trigger } = props;

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export const Navbar = (props: NavbarProps) => {
    const classes = useStyles(props);
    const { className, ...rest } = props;

    const [drawerOpen, setDrawerOpen] = useState(false);

    const items = getNavbarItems();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const theme = useTheme();
    const navbarOnLargeViewport = useMediaQuery(
        theme.breakpoints.up(theme.header.breakpoint),
    );

    const smallToolbar = trigger || !navbarOnLargeViewport;

    return (
        <React.Fragment>
            <NavbarDrawer
                open={drawerOpen && !navbarOnLargeViewport}
                setOpen={setDrawerOpen}
            />

            <ElevationScroll trigger={trigger}>
                <AppBar
                    className={clsx(
                        className,
                        classes.root,
                        smallToolbar
                            ? classes.toolbarTriggerHeight
                            : classes.toolbarHeight,
                    )}
                    {...rest}>
                    <Toolbar
                        className={clsx(
                            smallToolbar
                                ? classes.toolbarTriggerHeight
                                : classes.toolbarHeight,
                            classes.toolbar,
                        )}>
                        <img
                            alt="logo"
                            className={
                                smallToolbar
                                    ? classes.logoSmall
                                    : classes.logoLarge
                            }
                            src={meltanoLogo}
                        />
                        {navbarOnLargeViewport && (
                            <React.Fragment>
                                <div className={classes.navItems}>
                                    {items.map((i) => (
                                        <div className={classes.navItemWrapper}>
                                            <NavbarItem {...i} />
                                        </div>
                                    ))}
                                </div>

                                <AppButton buttonVariant="red" rounded>
                                    Get Started
                                </AppButton>
                            </React.Fragment>
                        )}
                        {!navbarOnLargeViewport && (
                            <FontAwesomeIcon
                                className={classes.barIcon}
                                icon={["fas", "bars"]}
                                onClick={() => setDrawerOpen(true)}
                            />
                        )}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar
                className={
                    smallToolbar
                        ? classes.toolbarTriggerHeight
                        : classes.toolbarHeight
                }
            />
        </React.Fragment>
    );
};
