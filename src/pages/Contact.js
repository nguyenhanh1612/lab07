import React from "react";
import { Box } from "@mui/material";
import FormContact from "../components/Form/FormContact";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        <FormContact handleSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};
