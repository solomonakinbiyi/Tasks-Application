import { Box } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { Priority } from "../createTaskForm/enums/Priority";
import { Status } from "../createTaskForm/enums/Status";
import { ITask } from "./interfaces/ITask";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { TaskHeader } from "./_taskHeader";

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = "Test title",
    date = new Date(),
    description = "Lorem ipsum dolor sit",
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};
