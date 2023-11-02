import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Context } from "../contexts/Context";
import { Title } from "../components/Header/Title";
import { Item } from "../components/Items/Item";
const defaultTheme = createTheme();
export const TopNews = () => {
  const { products } = React.useContext(Context);
  const attractiveNews = products?.filter((item) => item.isHot === true);
  let mostViewNews = [];
  if (attractiveNews?.length > 0) {
    mostViewNews = attractiveNews.sort((a, b) => b.rating - a.rating);
    // The `mostViewNews` array will now be sorted in descending order based on the `views` property
  } else {
    return <div>Loading....</div>;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Title title="Top news" />
          </Container>
        </Box>
        <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {mostViewNews.map((context) => (
              <Item context={context} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};
