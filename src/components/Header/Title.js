import { Stack, Typography } from "@mui/material";
import React from "react";

export const Title = ({ title }) => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        fontFamily={"sans-serif"}
      >
        {title}
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
      </Stack>
    </>
  );
};
