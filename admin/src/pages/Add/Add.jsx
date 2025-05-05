import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .positive("Price must be positive"),
    category: Yup.string().required("Category is required"),
  });

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    dirty,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!image) {
        toast.error("Image is required");
        return;
      }

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("image", image);

      try {
        const response = await axios.post(
          "http://127.0.0.1:4000/api/food/add",
          formData
        );
        if (response.data.success) {
          setImage(null);
          toast.success(response.data.message);
          resetForm();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error(error);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }
    setImage(file);
  };

  return (
    <div className="add">
      <form className="flex_col" onSubmit={handleSubmit}>
        <div className="add_img_upload flex_col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>

        <div className="add_product_name flex_col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <small className="error">{errors.name}</small>
          )}
        </div>

        <div className="add_product_description flex_col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write content here"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.description && errors.description && (
            <small className="error">{errors.description}</small>
          )}
        </div>

        <div className="add_category_price">
          <div className="add_category flex_col">
            <p>Product Category</p>
            <select
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
            {touched.category && errors.category && (
              <small className="error">{errors.category}</small>
            )}
          </div>

          <div className="flex_col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.price && errors.price && (
              <small className="error">{errors.price}</small>
            )}
          </div>
        </div>

        <button
          className="add_btn"
          type="submit"
          disabled={!isValid || !dirty}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
