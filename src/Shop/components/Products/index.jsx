import React, { useEffect, useState } from "react";

import ProductApi from "./../../../api/ProductApi";
import Product from "./Product";
import Loading from "../features/Loading";

export default function Products() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      var data = await ProductApi.getAll({});
      setProducts(data.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  var myView =
    loading === true ? (
      <Loading />
    ) : (
      products.map((product) => <Product product={product} key={product.id} />)
    );

  return (
    <div className="well well-small">
      <h3>Our Products </h3>
      <div className="row-fluid">
        <ul className="thumbnails">{myView}</ul>
      </div>
    </div>
  );
}
