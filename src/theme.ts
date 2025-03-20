"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const BeVietnamPro = localFont({
  src: "../public/font/BeVietnamPro-Light.ttf",
  display: "swap",
});

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: BeVietnamPro.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
