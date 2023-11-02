import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../contexts/Context";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import ItemCard from "../components/Items/ItemCard";
import ModalDetail from "../components/Items/ModalFilmCase";

export const Detail = () => {
  const { id } = useParams();
  const { products } = useContext(Context);
  const [show, setShow] = useState(false);
  const Detail = products.find((obj) => {
    return obj.id === id;
  });
  if (!Detail) {
    return (
      <section className="s-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  return (
    <Box className="detail-staff" sx={{
      width: '100%',
      alignItems: 'center',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <Box className="card-wrapper">
        <Card className="card">
          <Box className="img-display">
            <Box className="img-showcase">
              <CardMedia
                onClick={() => setShow(true)}
                component="img"
                alt="shoe image"
                sx={{
                  margin: 'auto',
                  display: "block",
                  width: '400px',
                  height: '400px',
                  marginTop: '20px',
                  objectFit: 'contain'
                }}
                image={Detail.image}
              />
            </Box>
          </Box>
          <Box className="product-imgs">
            <ItemCard Detail={Detail} />
          </Box>
        </Card>
        <ModalDetail filmItem={Detail} setShow={setShow} show={show} />
      </Box>
    </Box>
  );
};
