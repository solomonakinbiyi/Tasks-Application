import React, { FC, ReactElement } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { customTheme } from "./theme/customTheme";

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      Ready to build 🚀🔥
    </ThemeProvider>
  );
};

export default App;
