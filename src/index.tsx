import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import router from "./router";
import App from "./App";

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
)