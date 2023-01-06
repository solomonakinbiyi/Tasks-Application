import React, { FC, ReactElement } from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import PropTypes from "prop-types";
import { Status } from "../createTaskForm/enums/Status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e)}
            color="warning"
            defaultChecked={status == Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#ffffff" }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
