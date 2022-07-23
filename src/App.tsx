import React from "react";
import {
    ThemeProvider,
    createGenerateClassName,
    StylesProvider,
} from "@material-ui/styles";
import theme from "JS/React/Style/Theme";
import { CssBaseline } from "@material-ui/core";
import { Root } from "JS/React/Scenes/Root";

export const App = () => {
    const generateClassName = createGenerateClassName();

    return (
        <StylesProvider generateClassName={generateClassName}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Root />
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;
