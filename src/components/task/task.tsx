import { Box } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { TaskDescription } from "./_taskDescription";
import { TaskHeader } from "./_taskHeader";

export const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <TaskHeader />
      <TaskDescription />
    </Box>
  );
};
