import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";

export const Dashbaord: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Grid item md={8} px={4}>
        <h1>Content area</h1>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          height: "100vh",
          position: "fixed",
          right: 0,
          top: 0,
          width: "100%",
          backgroundColor: "background.paper",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Sidebar Arena</h1>
      </Grid>
    </Grid>
  );
};
