import { TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/ITextField";
import PropTypes from "prop-types";

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;
  return (
    <TextField
      id="description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      name="description"
      rows={4}
      fullWidth
      multiline
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
