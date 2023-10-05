import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import App from "./App";



const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)


