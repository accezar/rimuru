import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap')",
  ],
  "html, body, #root, #__next": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    fontFamily: "Nunito",
  },

  "*": {
    margin: 0,
    fontSize: 12,
    padding: 0,
  },
});
