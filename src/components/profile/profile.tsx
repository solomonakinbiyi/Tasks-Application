import React, { FC, ReactElement } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: "96px",
          height: "96px",
          backgroundColor: "primary.main",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" color="text.primary">
          S
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome Solomon
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};
