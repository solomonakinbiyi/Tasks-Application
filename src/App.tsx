import React, { FC, ReactElement } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { customTheme } from "./theme/customTheme";
import { Dashbaord } from "./pages/dashboard/dashbaord";

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashbaord />
      Ready to build 🚀🔥
    </ThemeProvider>
  );
};

export default App;
