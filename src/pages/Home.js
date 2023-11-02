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
export const Home = () => {
  const { products } = React.useContext(Context);
  const attractiveProducts = products.filter(
    (item) => item.isHot === true
  );
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
            <Title title="Hotest Film List" />
          </Container>
        </Box>
        <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {attractiveProducts.map((context) => (
              <Item context={context} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};
