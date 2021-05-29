// Fonts
import "@fontsource/montserrat/";
import "@fontsource/roboto/";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

// Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import HomePage from "../pages/HomePage/HomePage";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/settings">
                    <SettingsPage />
                </Route>
            </Router>
        </ChakraProvider>
    );
};

export default App;
