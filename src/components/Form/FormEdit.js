import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Context } from "../../contexts/Context";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "../Settings/Styles";

export default function FormEdit({ staffId, handleClose }) {
  const [singleStaff, setSingleStaff] = useState({});
  const open = Boolean(staffId);
  const { products, FormatDate, handleUpdate } = useContext(Context);

  useEffect(() => {
    const findStaffById = (id) => {
      return products.find((staff) => staff.id === id);
    };

    if (staffId) {
      const foundStaff = findStaffById(staffId);
      setSingleStaff(foundStaff);
    }
  }, [staffId, products, FormatDate]);

  const formik = useFormik({
    initialValues: singleStaff,
    enableReinitialize: true, // Thêm thuộc tính enableReinitialize để cập nhật lại giá trị khi initialValues thay đổi
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
      await handleUpdate(staffId, values); // Sử dụng giá trị values từ formik thay vì singleStaff
      handleClose(); // Đóng modal sau khi hoàn thành cập nhật
    },
  });

  const handleInputChange = (event) => {
    formik.handleChange(event);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              style={{ textAlign: "center" }}
              onSubmit={formik.handleSubmit}
            >
              <Typography
                style={{ marginTop: "250px" }}
                variant="h3"
                id="modal-title"
              >
                News Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={formik.values.image}
                  alt="Img"
                  style={{
                    width: "50%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      id="isHot"
                      name="isHot"
                      checked={formik.values.isHot}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Is Hotest Film"
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
                rows={4}
                value={formik.values.description || ""}
                onChange={handleInputChange}
                error={formik.touched.description && formik.errors.description}
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              <TextField
                style={{ width: "500px", marginTop: "20px" }}
                id="outlined-basic"
                label="year"
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
              <Container
                maxWidth="lg"
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button type="submit" variant="contained">
                  Update
                </Button>
              </Container>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
