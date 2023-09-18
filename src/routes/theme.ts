import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const font = extendTheme({
    fonts: {
        body: `'Roboto', sans-serif`,
    },
})

const components = {
    Drawer: {
    variants: {
        alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
            pointerEvents: "auto"
        },
        dialogContainer: {
            pointerEvents: "none"
        }
        }
    }
    }
};

const config:ThemeConfig = {
    initialColorMode:"dark",
    useSystemColorMode:false,
}

const theme = extendTheme({ font, config, components });

export default theme