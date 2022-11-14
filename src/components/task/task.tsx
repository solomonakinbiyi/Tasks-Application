import { Box } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { TaskHeader } from "./_taskHeader";

export const Task: FC = (): ReactElement => {
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
      <TaskHeader />
      <TaskDescription />
      <TaskFooter />
    </Box>
  );
};
