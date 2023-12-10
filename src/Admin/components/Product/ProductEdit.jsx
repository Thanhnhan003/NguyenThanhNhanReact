import React, { useState, useEffect } from "react";
import SelectBox from "../formitems/SelectBox";
import SelectBrand from "./../formitems/SelectBrand";
import SelectCategory from "../formitems/SelectCategory";
import { validateProduct } from "../../../helper/validate";
import { toSlug } from "../../../helper/function";
import { ToastContainer, toast } from "react-toastify";
import ProductApi from "../../../api/ProductApi";
import { useParams } from "react-router-dom";

export default function ProductEdit() {
  var { id } = useParams();
  const [product, setProduct] = useState({
    id: id,
    product_name: "",
    slug: "",
    cat_id: "",
    brand_id: "",
    summary: "",
    detail: "",
    image: "",
    price: "",
    sale_price: "",
    status: "",
    type: "",
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchProduct = async (id) => {
      const product = await ProductApi.get(id);
      setProduct(product);
    };
    fetchProduct(id);
  }, []);
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
    console.log(product);
  };
  const handleProductNameBlur = (e) => {
    var productName = e.target.value;
    var slug = toSlug(productName);
    document.getElementById("slug").value = slug;
  };

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    var err = validateProduct(product);
    setErrMsg(err);
    if (err === "") {
      const addProduct = async (product) => {
        try {
          document.getElementById("submit").innerHTML = "Editing ....";
          const response = await ProductApi.update(product);
          console.log("api request" + response);
          document.getElementById("submit").innerHTML = "Editing product";
          toast.success("thanh cong");
          document.getElementById("editProduct").reset();
          setProduct({});
        } catch (error) {
          toast.error("error creating product" + error);
        }
      };
      addProduct(product);
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <form
        action=""
        className="m-auto"
        id="editProduct"
        onSubmit={handleSubmit}
        style={{ maxWidth: 600 }}
      >
        <h3 className="my-4">Edit Product</h3>
        <div
          className="bg-danger"
          dangerouslySetInnerHTML={{ __html: errMsg }}
        ></div>
        <hr className="my-4" />
        <div className="form-group mb-3 row">
          <label htmlFor="product-name2" className="col-md-5 col-form-label">
            Product Name
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="product_name"
              name="product_name"
              onChange={handleChange}
              onBlur={handleProductNameBlur}
              value={product.product_name}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="slug3" className="col-md-5 col-form-label">
            Slug
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              onChange={handleChange}
              value={product.slug}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="category4" className="col-md-5 col-form-label">
            Category
          </label>
          <div className="col-md-7">
            <SelectCategory
              defaultValues={product.cat_id}
              handleFunction={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="brand5" className="col-md-5 col-form-label">
            Brand
          </label>
          <div className="col-md-7">
            <SelectBrand
              defaultValues={product.brand_id}
              handleFunction={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="product-name2" className="col-md-5 col-form-label">
            Hinh anh
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              onChange={handleChange}
              value={product.image}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="sumary6" className="col-md-5 col-form-label">
            Sumary
          </label>
          <div className="col-md-7">
            <textarea
              className="form-control"
              id="sumary6"
              name="sumary"
              defaultValue={""}
              onChange={handleChange}
              value={product.summary}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="detail7" className="col-md-5 col-form-label">
            Detail
          </label>
          <div className="col-md-7">
            <textarea
              className="form-control"
              id="detail7"
              name="detail"
              defaultValue={""}
              onChange={handleChange}
              value={product.detail}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="price8" className="col-md-5 col-form-label">
            Price
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="price8"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="sale-price9" className="col-md-5 col-form-label">
            Sale Price
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="sale-price9"
              name="sale_price"
              onChange={handleChange}
              value={product.sale_price}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="types10" className="col-md-5 col-form-label">
            Types
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              id="types10"
              name="types"
              onChange={handleChange}
              value={product.type}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="status11" className="col-md-5 col-form-label">
            Status
          </label>
          <div className="col-md-7">
            {/* <select className="form-select custom-select" id="status11">
              <option value="0">an</option>
              <option value="1"> Hien</option>
            </select> */}
            <SelectBox
              name="status"
              defaultValue={product.status}
              data={[
                { label: "an", value: 0 },
                { label: "hien", value: 1 },
              ]}
              handleFunction={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label
            htmlFor="create-product12"
            className="col-md-5 col-form-label"
          />
          <div className="col-md-7">
            <button className="btn btn-primary" type="submit" id="submit">
              Update Product
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
