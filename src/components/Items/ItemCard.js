import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const ItemCard = ({ Detail }) => {
  return (
    <CardContent>
      <Typography variant="h4" component="h2" className="product-title">
        {Detail.name}
      </Typography>
      <Box className="product-detail">
        <Typography variant="h5" component="h3">
          Description:
        </Typography>
        <Typography variant="body1">{Detail.description}</Typography>
        <Typography variant="h5" component="h3">
          Information:
        </Typography>
        <Typography variant="h7">
          <strong>Rating: </strong> {Detail.rating} <StarIcon />
        </Typography>
        <br />
        <Typography variant="h7">
          <strong>Category: </strong> {Detail.category}{" "}
        </Typography>
        <Typography variant="h7">
          <strong>Year: </strong> {Detail.year}{" "}
        </Typography>
        <ul
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: "flex",
            listStyleType: "none",
            marginLeft: "10px",
          }}
        >
          <li style={{ marginRight: "10px" }}>
            <Typography variant="h7">
              Hot Movie Film ? :{" "}
              {Detail.isHot
                ? "Is a Hotest Film (True)"
                : "Is not a Hotest Film(False)"}
            </Typography>
          </li>
        </ul>
      </Box>
    </CardContent>
  );
};

export default ItemCard;
