import React, { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { Box, Chip, Typography } from "@mui/material";
import { ITaskHeader } from "./interfaces/ITaskHeader";
import { format } from "date-fns";

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = "Default Title", date = new Date() } = props;
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, "PPP")} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
