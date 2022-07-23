import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import createMuiTheme, {
    ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";
import React from "react";

declare module "@material-ui/core/styles/createMuiTheme" {
    //custom theme options typings
    interface Theme extends ThemeOptions {}
    interface ThemeOptions {
        // drawer?: {
        //     breakpoint: Breakpoint;
        //     width: React.CSSProperties["width"];
        //     titleFontSize: React.CSSProperties["fontSize"];
        //     color: React.CSSProperties["color"];
        //     activeItemColor: React.CSSProperties["color"];
        //     logoSize: React.CSSProperties["width"];
        // };
        header?: {
            breakpoint: Breakpoint;
            height: React.CSSProperties["height"];
            triggerHeight: React.CSSProperties["height"];
            color: React.CSSProperties["color"];
            titleFontSize: React.CSSProperties["fontSize"];
            background: React.CSSProperties["background"];
        };
        footer?: {
            height: React.CSSProperties["height"];
            zIndex: React.CSSProperties["zIndex"];
            aboveFooter: React.CSSProperties["zIndex"];
            zIndexOnModal: React.CSSProperties["zIndex"];
        };
        custom?: {
            sectionTopMargin: React.CSSProperties["marginTop"];
        };
    }
}

function createAppTheme(options: ThemeOptions) {
    const primaryMain = "#3035b0",
        primaryDark = "#08274d";

    createMuiTheme({
        typography: {
            ...({
                useNextVariants: true,
            } as any),
        },
    });

    return createMuiTheme({
        typography: {
            ...({
                useNextVariants: true,
            } as any),
            fontFamily: "IBM Plex Sans, sans-serif",

            body1: {
                fontSize: "1.125rem",
                // [theme.breakpoints.down("lg")]: {
                //     fontSize: "1.0125",
                // },
            },
            body2: {
                fontSize: "1.25rem",
                // [theme.breakpoints.down("lg")]: {
                //     fontSize: "1.125",
                // },
            },
            caption: {
                fontSize: "1rem",
                lineHeight: 1.3,
            },
            h1: {
                fontSize: "3.625rem",
            },
            h2: {
                fontSize: "2.625rem",
                // [theme.breakpoints.down("lg")]: {
                //     fontSize: "2.3625",
                // },
            },
            h3: {
                fontSize: "2.2rem",
            },
            h4: {
                fontSize: "1.5rem",
                // [theme.breakpoints.down("lg")]: {
                //     fontSize: "1.35",
                // },
            },
            h6: {
                fontSize: "1.625rem",
                // [theme.breakpoints.down("lg")]: {
                //     fontSize: "1.4625",
                // },
            },
        },

        // drawer: {
        //     breakpoint: "md",
        //     width: "260px",
        //     titleFontSize: "28px",
        //     // color: "#43425d",
        //     color: "#0a1b45",
        //     activeItemColor: "#071330",

        //     logoSize: "45px",
        // },
        header: {
            breakpoint: "lg",
            height: "90px",
            triggerHeight: "65px",
            color: "#fff",
            background: `#3035b0`,
            titleFontSize: "20px",
        },
        footer: {
            height: "42px",
            zIndex: 1202,
            aboveFooter: 1304,
            zIndexOnModal: 1301,
        },
        palette: {
            primary: {
                main: primaryMain,
                dark: primaryDark,
                contrastText: "#fff",
                "300": "#2227a4",
                "100": "#d9e4f5",
            },
            secondary: {
                main: "#5773b9",
                contrastText: "#fff",
            },
            success: {
                main: "#28a745",
                contrastText: "#fff",
            },
            error: {
                main: "#d9042b",
                dark: "#af0121",
                contrastText: "#fff",
            },
            text: {
                primary: "#000000",
                secondary: "#b9b9d8",
            },
            background: {
                default: "#fff",
                paper: "#fff",
            },
            common: {
                black: "#000",
                white: "#fff",
            },
            grey: {
                "100": "#a9c4e4",
                "200": "#d5d6ee",
                "300": "#667281",
                "400": "#b7b8e3",
                "500": "#ebf3fe",
                "600": "#E7EEF8",
                "700": "#edeeff",
            },
        },

        zIndex: {},
        overrides: {
            MuiInputBase: {
                root: {
                    minHeight: 40,
                },
            },
        },
        ...options,
    });
}

const theme = createAppTheme({});

export default theme;
