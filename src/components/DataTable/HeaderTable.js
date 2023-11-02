import { Typography } from "@mui/material";
import React from "react";

const HeaderTable = ({ title }) => {
  return (
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="primary"
      gutterBottom
      marginTop={2}
      fontWeight="bold"
    >
      {title}
    </Typography>
  );
};

export default HeaderTable;
