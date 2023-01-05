import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";

export const CreateTaskForm: FC = (): ReactElement => {
  // declare component states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(null);
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  // create task mutation
  const createTaskMutation = useMutation((data) =>
    sendApiRequest("http://localhost:3200/tasks", "POST", data)
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully
      </Alert>
      <Typography mb={2} component="h2" variant="h6">
        Create a task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(e) => setDate(date)} />
        <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
            ]}
          />
        </Stack>
        <LinearProgress />
        <Button variant="contained" size="large" fullWidth>
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
