import React, { useState, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../../contexts/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const initialState = {
  name: "",
  year: 0,
  description: "",
  image: "",
  rating: 0,
  category: "",
  isHot: true,
  embeddedUrl: "",
};

export const FormAdd = () => {
  const [newProductState, setNewProductState] = useState(initialState);
  const { handleAddNew } = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: newProductState,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required!")
        .min(5, "Name must be 5 characters or more"),
      year: Yup.number()
        .typeError("Must be a number")
        .required("year is required!")
        .positive("year must be a positive number")
        .integer("year must be an integer"),
      description: Yup.string()
        .required("Description is required!")
        .min(10, "Description must be 10 characters or more"),
      category: Yup.string()
        .required("Category is required!")
        .min(4, "Category must be 4 characters or more"),
      image: Yup.string().required("Image is required!"),
      rating: Yup.number()
        .typeError("Must be a number")
        .required("Rating is required!")
        .positive("Rating must be a positive number")
        .integer("Rating must be an integer")
        .lessThan(6, "Rating max is 5"),
      embeddedUrl: Yup.string()
        .required("Embedded is required!")
        .min(4, "Embedded must be 4 characters or more"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await handleAddNew(values);
      setIsSubmitted(true);
    },
  });

  if (isSubmitted) {
    return <Navigate to="/dashboard" />; // Chuyển đến trang "/dashboard" sau khi thêm thành công
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update formik's values
    formik.handleChange(event);
    // Update newStaffState, bao gồm cả trường createdAt
    setNewProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "#cfe8fc",
            height: "115vh",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              noWrap
              component="a"
              href="/"
              sx={{
                margin: "20px",
                fontFamily: "inherit",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Add Product
            </Typography>
          </div>
          <div style={{ width: "full", textAlign: "center" }}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <div>
                  <FormControlLabel
                    control={
                      <Switch
                        id="status"
                        name="status"
                        checked={formik.values.isHot}
                        onChange={formik.handleChange}
                      />
                    }
                    label="Is Hot Film"
                  />
                </div>

                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formik.values.name || ""}
                  onChange={handleInputChange}
                  error={formik.touched.name && formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  name="description"
                  multiline
                  rows={3}
                  value={formik.values.description || ""}
                  onChange={handleInputChange}
                  error={
                    formik.touched.description && formik.errors.description
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Year"
                  variant="outlined"
                  name="year"
                  value={formik.values.year || ""}
                  onChange={handleInputChange}
                  error={formik.touched.year && formik.errors.year}
                  helperText={formik.touched.year && formik.errors.year}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Image"
                  variant="outlined"
                  name="image"
                  value={formik.values.image || ""}
                  onChange={handleInputChange}
                  error={formik.touched.image && formik.errors.image}
                  helperText={formik.touched.image && formik.errors.image}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Rating"
                  variant="outlined"
                  name="rating"
                  value={formik.values.rating || ""}
                  onChange={handleInputChange}
                  error={formik.touched.rating && formik.errors.rating}
                  helperText={formik.touched.rating && formik.errors.rating}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  name="category"
                  value={formik.values.category || ""}
                  onChange={handleInputChange}
                  error={formik.touched.category && formik.errors.category}
                  helperText={formik.touched.category && formik.errors.category}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Embedded Url"
                  variant="outlined"
                  name="embeddedUrl"
                  value={formik.values.embeddedUrl || ""}
                  onChange={handleInputChange}
                  error={formik.touched.embeddedUrl && formik.errors.embeddedUrl}
                  helperText={formik.touched.embeddedUrl && formik.errors.embeddedUrl}
                />
                <div style={{ marginTop: "20px" }}>
                  <Button type="submit" variant="contained">
                    Add New
                  </Button>
                </div>
              </FormControl>
            </form>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};
