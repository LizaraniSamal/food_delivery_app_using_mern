import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(false);
  const initialState = {
    name: "",
    description: "",
    price: "",
    category: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required").positive("Must be positive"),
    category: Yup.string().required("Category is required"),
  });
  
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    dirty,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!image) {
        toast.error("Image is required");
        return;
      }
      
      console.log(values);
      const formData = new FormData();
      formData.append("name",values.name)
      formData.append("description",values.description)
      formData.append("price",values.price)
      formData.append("category",values.category)
      formData.append("image",image);
      const response = await axios.post("http://127.0.0.1:4000/api/food/add",formData);
      console.log(response.data);
      if(response.data.success){
          setImage(false);
          toast.success(response.data.message);
          resetForm();

      }
      else{
          toast.error(response.data.message);
      }
      
    },
  });

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
            onChange={(e) => setImage(e.target.files[0])}
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
          
        </div>
        <div className="add_product_description flex_col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="write content here"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex_col">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              placeholder="$20"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <button className="add_btn" type="submit" disabled={!isValid || !dirty}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
