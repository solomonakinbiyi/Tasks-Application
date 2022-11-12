import { TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { IDateField } from "./interfaces/IDateField";

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
