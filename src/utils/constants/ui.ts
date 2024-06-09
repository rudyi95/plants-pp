import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true;
    body: true;
    bodySmall: true;
    button1: true;
    button2: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    mainC: Palette["primary"];
    typographyC: Palette["primary"];
    iconC: Palette["primary"];
    socialIC: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    mainC?: PaletteOptions["primary"];
    typographyC?: PaletteOptions["primary"];
    iconC?: PaletteOptions["primary"];
    socialIC?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    ["blackColor"]?: string;
    ["thirdColor"]?: string;
    ["bgC"]?: string;
    ["bgWC"]?: string;
    ["bgDark"]?: string;
    ["bgGrayLight"]?: string;
    ["bgLightSecondary"]?: string;
    ["lightC"]?: string;
    ["bgLightThird"]?: string;
    ["gradient"]?: string;
    ["heading"]?: string;
    ["tWhite"]?: string;
    ["pColor"]?: string;
    ["pColorSecondary"]?: string;
    ["fb"]?: string;
    ["twitter"]?: string;
    ["google"]?: string;
    ["linkedIn"]?: string;
    ["pinterest"]?: string;
  }
  interface SimplePaletteColorOptions {
    ["blackColor"]?: string;
    ["thirdColor"]?: string;
    ["bgC"]?: string;
    ["bgWC"]?: string;
    ["bgDark"]?: string;
    ["bgGrayLight"]?: string;
    ["bgLightSecondary"]?: string;
    ["lightC"]?: string;
    ["bgLightThird"]?: string;
    ["gradient"]?: string;
    ["heading"]?: string;
    ["tWhite"]?: string;
    ["pColor"]?: string;
    ["pColorSecondary"]?: string;
    ["fb"]?: string;
    ["twitter"]?: string;
    ["google"]?: string;
    ["linkedIn"]?: string;
    ["pinterest"]?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    verified: true;
  }
  interface ButtonPropsVariantOverrides {
    contained_white: true;
    outlined_white: true;
  }
}

const defaultTheme = createTheme({
  palette: {
    mainC: {
      main: "#00730C",
      blackColor: "#0B0B0B",
      thirdColor: "#0C4B35",
      bgC: "#E3E3E3",
      bgWC: "#FFFFFF",
      bgDark: "#242424",
      bgGrayLight: "#F0F0F0",
      bgLightSecondary: "#D9F1E0",
      lightC: "#FBEEE7",
      bgLightThird: "#FFF8F1",
      gradient: "linear-gradient(#b4d4b4 81%, #FBF6EE 0%)",
    },
    typographyC: {
      main: "#212529",
      tWhite: "#FFFFFF",
      pColor: "#676767",
      pColorSecondary: "#D7D7D7",
    },
    iconC: {
      main: "#FFFFFF",
    },
    socialIC: {
      main: "#2E4980",
      fb: "linear-gradient(#2E4980 100%, #395795 100%)",
      twitter: "#009FEE",
      google: "#367CFF",
      linkedIn: "#0079B2",
      pinterest: "#EF1408",
    },
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 375,
      // small
      sm: 769,
      // medium
      md: 1100,
      // large
      lg: 1410,
      // extra-large
      xl: 1920,
    },
  },
});

const { breakpoints } = defaultTheme;

export const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "d1" },
          style: {
            fontSize: 78,

            [breakpoints.down("sm")]: {
              fontSize: 32,
            },
          },
        },
        {
          props: { variant: "body" },
          style: {
            fontSize: 16,

            [breakpoints.down("sm")]: {
              fontSize: 12,
            },
          },
        },
        {
          props: { variant: "bodySmall" },
          style: {
            fontSize: 14,

            [breakpoints.down("sm")]: {
              fontSize: 10,
            },
          },
        },
        {
          props: { variant: "button1" },
          style: {
            fontSize: 18,
            fontWeight: "bold",
          },
        },
        {
          props: { variant: "button2" },
          style: {
            fontSize: 16,
            fontWeight: "bold",
          },
        },
      ],
    },
    MuiContainer: {
      variants: [
        {
          props: {},
          style: {
            padding: "0px !important",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            backgroundColor: defaultTheme.palette.mainC.main,
            color: defaultTheme.palette.typographyC.tWhite,

            "&:hover": {
              color: defaultTheme.palette.mainC.main,
              boxShadow: `0 0 0 1px ${defaultTheme.palette.mainC.main}`,
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: {
            variant: "contained_white",
          },
          style: {
            backgroundColor: "transparent",
            color: defaultTheme.palette.mainC.main,
            boxShadow: `0 0 0 1px ${defaultTheme.palette.mainC.main}`,

            "&:hover": {
              color: defaultTheme.palette.typographyC.tWhite,
              backgroundColor: defaultTheme.palette.mainC.main,
            },
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            backgroundColor: defaultTheme.palette.mainC.main,
            color: defaultTheme.palette.typographyC.tWhite,

            "&:hover": {
              color: defaultTheme.palette.mainC.main,
              boxShadow: "10px 1px 4px #000000",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: {
            variant: "outlined_white",
          },
          style: {
            color: defaultTheme.palette.mainC.main,
            boxShadow: "10px 1px 4px #000000",
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: defaultTheme.palette.mainC.main,
              color: defaultTheme.palette.typographyC.tWhite,
            },
          },
        },
        {
          props: {
            variant: "text",
          },
          style: {
            backgroundColor: "transparent",
            color: defaultTheme.palette.typographyC.pColor,

            "&:hover": {
              color: defaultTheme.palette.mainC.main,
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: 58,

      [breakpoints.down("sm")]: {
        fontSize: 28,
      },
    },
    h2: {
      fontSize: 58,

      [breakpoints.down("sm")]: {
        fontSize: 22,
      },
    },
    h3: {
      fontSize: 45,

      [breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    h4: {
      fontSize: 33,

      [breakpoints.down("sm")]: {
        fontSize: 18,
      },
    },
    h5: {
      fontSize: 24,

      [breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    h6: {
      fontSize: 18,

      [breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
  },
});
