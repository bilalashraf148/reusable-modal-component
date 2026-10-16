import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    duro: {
      dialogModal: {
        backgroundColor: string;
        backdropColor: string;
      };
    };
  }

  interface ThemeOptions {
    duro?: {
      dialogModal?: {
        backgroundColor?: string;
        backdropColor?: string;
      };
    };
  }
}