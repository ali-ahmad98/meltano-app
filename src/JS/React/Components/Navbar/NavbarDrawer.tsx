import {
    Theme,
    StandardProps,
    DrawerProps,
    Drawer,
    List,
    ListItem,
    Collapse,
    Typography,
    ListItemProps,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "JS/React/Typescript";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import meltanoLogo from "Images/meltano-logo.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
        headerWrapper: {
            display: "flex",
            height: theme.header.triggerHeight,
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        closeIcon: {
            color: theme.palette.grey[200],
            fontSize: theme.spacing(3),
            cursor: "pointer",
        },
        logoSmall: {
            height: "50px",
            transition: "0.2s ease-out",
        },
        listContainer: {
            display: "flex",
            justifyContent: "center",
        },
        list: { width: "250px" },

        listItem: {
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "center",
        },

        listItemChild: {
            display: "flex",
            justifyContent: "center",
        },

        listText: {
            textTransform: "uppercase",
            fontWeight: "bold",
        },

        chevronIcon: {
            fontSize: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
    }),
);

type NavbarListItemsClassKey = StyleClassKey<typeof useStyles>;

interface NavItemType {
    id: string;
    title: string;
    hasChilds?: boolean;
    childs?: NavItemType[];
}

interface NavbarListItemsProps
    extends StandardProps<ListItemProps, NavbarListItemsClassKey> {
    item: NavItemType;
}

const NavbarListItems = (props: NavbarListItemsProps) => {
    const classes = useStyles(props);

    const { item } = props;
    const [itemOpen, setItemOpen] = useState(false);

    return (
        <>
            <ListItem
                className={classes.listItem}
                button
                onClick={() => setItemOpen(!itemOpen)}>
                <Typography className={classes.listText} variant="body1">
                    {item.title}
                </Typography>
                {item.hasChilds && (
                    <FontAwesomeIcon
                        className={classes.chevronIcon}
                        icon={["fas", "chevron-down"]}
                    />
                )}
            </ListItem>
            {item.hasChilds && (
                <Collapse in={itemOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.childs.map((d) => (
                            <ListItem className={classes.listItemChild} button>
                                <Typography variant="body2">
                                    {d.title}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export type NavbarDrawerClassKey = StyleClassKey<typeof useStyles>;
export interface NavbarDrawerProps
    extends StandardProps<DrawerProps, NavbarDrawerClassKey> {
    setOpen: (val: boolean) => void;
}

export const NavbarDrawer = (props: NavbarDrawerProps) => {
    const classes = useStyles(props);
    const { className, setOpen, open } = props;

    const getNavListItems = () => {
        const items: NavItemType[] = [
            {
                id: "product",
                title: "Product",
                hasChilds: true,
                childs: [
                    {
                        id: "product",
                        title: "Product",
                    },
                    {
                        id: "meltano elt",
                        title: "Meltano ELT",
                    },
                    {
                        id: "meltano at scale",
                        title: "Meltano at Scale",
                    },
                    {
                        id: "managed",
                        title: "Managed",
                    },
                    {
                        id: "changelog",
                        title: "Changelog",
                    },
                ],
            },
            {
                id: "explore",
                title: "Explore",
                hasChilds: true,
                childs: [
                    {
                        id: "popular ways to use meltano",
                        title: "Popular Ways to Use Meltano",
                    },
                    {
                        id: "meltano hub (Connectors)",
                        title: "Meltano Hub (Connectors)",
                    },
                    {
                        id: "dataops",
                        title: "DataOps",
                    },
                ],
            },
            {
                id: "resources",
                title: "Resources",
                hasChilds: true,
                childs: [
                    {
                        id: "documentation",
                        title: "Documentation",
                    },
                    {
                        id: "meltano sdk",
                        title: "Meltano SDK",
                    },
                    {
                        id: "partners",
                        title: "Partners",
                    },
                    {
                        id: "blog",
                        title: "Blog",
                    },
                ],
            },
            {
                id: "community",
                title: "Community",
            },
            {
                id: "company",
                title: "Company",
                hasChilds: true,
                childs: [
                    {
                        id: "about",
                        title: "About",
                    },
                    {
                        id: "our values",
                        title: "Our Values",
                    },
                    {
                        id: "company handbook",
                        title: "Company Handbook",
                    },
                    {
                        id: "careers",
                        title: "Careers",
                    },
                ],
            },
        ];

        return items;
    };

    const navItems = getNavListItems();

    return (
        <Drawer
            className={className}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="top"
            open={open}>
            <div className={classes.headerWrapper}>
                <img
                    alt="logo"
                    className={classes.logoSmall}
                    src={meltanoLogo}
                />
                <FontAwesomeIcon
                    icon={["fas", "xmark"]}
                    className={classes.closeIcon}
                    onClick={() => setOpen(false)}
                />
            </div>
            <div className={classes.listContainer}>
                <List component="nav" className={classes.list}>
                    {navItems.map((item) => (
                        <NavbarListItems item={item} />
                    ))}
                </List>
            </div>
        </Drawer>
    );
};
