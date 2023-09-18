import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import { ChakraProvider, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";



const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)


