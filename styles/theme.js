import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
    ...chakraTheme.fonts,
    body: `"BioRhyme" -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
     "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
     heading:`"BioRhyme" -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
     "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
}
const overrides = {
    ...chakraTheme,
    fonts,
}

const theme = extendTheme(overrides);

export default  theme;