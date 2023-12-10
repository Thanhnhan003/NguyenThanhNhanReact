import React, { useState, useEffect } from "react";
import SelectBox from "./SelectBox";
import Loading from "./../../../Shop/components/features/Loading";
import brandApi from "../../../api/brandApi";

export default function SelectBrand(props) {
  const defaultValues = props.defaultValues;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const handleFunction = props.handleFunction;
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await brandApi.getAll();
      setData(
        response.map((brand) => {
          return {
            label: brand.brand_name,
            value: brand.id,
          };
        })
      );
    };
    fetchBrands();
  }, []);

  return (
    <SelectBox
      name="brand_id"
      data={data}
      defaultValue={defaultValues}
      handleFunction={handleFunction}
    />
  );
}
