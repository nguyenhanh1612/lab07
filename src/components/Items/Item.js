import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export const Item = ({ context }) => {
  return (
    <Grid item key={context.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component={Link}
          to={`/detail/${context.id}`}
          sx={{
            // 16:9
            pt: "100%",
          }}
          image={context.image}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6">
            <a
              style={{
                textDecoration: "none",
                borderBottom: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href={`/detail/${context.id}`}
            >
              {context.name}
            </a>
          </Typography>
          <Typography variant="h7">
            <strong>Year:</strong> {context.year}
          </Typography>
          <br />
          <Typography variant="h7">
            <strong>Rating:</strong> {context.rating} <StarIcon />
          </Typography>
          <br />
          <Typography variant="h7">
            <strong>Category:</strong> {context.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/detail/${context.id}`}
            size="large"
            variant="contained"
          >
            Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
