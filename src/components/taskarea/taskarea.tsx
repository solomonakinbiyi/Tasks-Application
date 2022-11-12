import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h1>Content area</h1>
    </Grid>
  );
};
