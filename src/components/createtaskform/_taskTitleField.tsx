import { TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";

export const TaskTitleField: FC = (): ReactElement => {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
    />
  );
};
