import { Button } from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

const ButtonAdd = ({ title }) => {
  return (
    <Button component={Link} to="/add" variant="contained">
      <AddBoxIcon />
      {title}
    </Button>
  );
};

export default ButtonAdd;
