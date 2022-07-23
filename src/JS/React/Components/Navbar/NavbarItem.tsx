import React from "react";
import {
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    StandardProps,
    Theme,
    Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/React/Typescript";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
    },
    icon: {
        marginLeft: theme.spacing(1),
    },
}));

export type NavbarItemClassKey = StyleClassKey<typeof useStyles>;

export interface NavbarItemType {
    title: string;
    hasChilds?: boolean;
    childs?: string[];
    skip?: boolean;
}

export interface NavbarItemProps
    extends NavbarItemType,
        StandardProps<{}, NavbarItemClassKey> {}

export const NavbarItem = (props: NavbarItemProps) => {
    const classes = useStyles(props);
    const { title, hasChilds, childs } = props;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <Typography
                variant="body1"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.title}>
                {title}
                {hasChilds && (
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={["fas", "angle-down"]}
                    />
                )}
            </Typography>
            {hasChilds && (
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom"
                                        ? "center top"
                                        : "center bottom",
                            }}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}>
                                        {childs.map((d) => (
                                            <MenuItem onClick={handleClose}>
                                                {d}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            )}
        </React.Fragment>
    );
};
