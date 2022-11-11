import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { Taskarea } from "../../components/taskarea/taskarea";
import { Sidebar } from "../../components/sidebar/sidebar";

export const Dashbaord: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Taskarea />
      <Sidebar />
    </Grid>
  );
};
