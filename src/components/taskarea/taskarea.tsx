import React, { FC, ReactElement } from "react";
import { Grid, Box, Alert } from "@mui/material";
import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/taskCounter";
import { Task } from "../task/task";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(["tasks"], async () => {
    return await sendApiRequest<ITaskApi[]>(
      "http://localhost:3200/tasks",
      "GET"
    );
  });
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h1>Status of your Tasks as on {format(new Date(), "PPPP")}</h1>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="error">
                You do not have any tasks created yet. Start by creating some
                tasks
              </Alert>
            )}

            <Task id="123" />
            <Task id="123" />
            <Task id="123" />
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
