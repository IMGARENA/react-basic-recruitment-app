import { createTheme, Theme, ThemeOptions } from "@mui/material";

export type MsfpTheme = Theme & {
  appBar: {
    main: string;
  };
};

export type MsfpThemeOptions = ThemeOptions & {
  appBar?: {
    main?: string;
  };
};

export const customOverridesLight: MsfpThemeOptions = {
  appBar: {
    main: "#272727",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FF4D00",
    },
    secondary: {
      main: "#2D2D2D",
      contrastText: "#fff",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Roboto","Helvetica","Arial",'sans-serif'].join(',')
  }
};

export const customOverridesDark: MsfpThemeOptions = {
  appBar: {
    main: "#272727",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4D00",
    },
    secondary: {
      main: "#757575",
    },
    text: {
      primary: "#F5F5F5",
    },
    background: {
      default: "#202020",
      paper: "#303030",
    },
  },
  typography: {
    fontFamily: ["Roboto","Helvetica","Arial",'sans-serif'].join(',')
  }
};

export const lightTheme = createTheme(customOverridesLight) as MsfpTheme;
export const darkTheme = createTheme(customOverridesDark) as MsfpTheme;
