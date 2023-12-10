import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductApi from "../../../api/ProductApi";
import Loading from "../../../Shop/components/features/Loading";
import Paginate from "../Paginate";

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const { page } = useParams();
  //variable delete
  const [msgSuccess, setSuccessMsg] = useState("");
  const [msgWarning, setWarningMsg] = useState("");
  const [loadData, setLoadData] = useState(1);

  const handleDelete = (event) => {
    event.target.classList.remove("fa-trash");
    event.target.classList.add("fa-spinner");

    const delProduct = async (id) => {
      try {
        await ProductApi.del(id);
        setSuccessMsg("delete successfully id = " + id);
        setLoadData("loadData" + 1);
      } catch (error) {
        setWarningMsg("delete not successful id = " + id + " " + error);
      } finally {
        event.target.classList.remove("fa-spinner");
        event.target.classList.add("fa-trash");
      }
    };
    delProduct(event.target.getAttribute("name"));
  };

  var allDelBtn = document.querySelectorAll(".btn-del");
  allDelBtn.forEach((btnDel) => {
    btnDel.addEventListener("click", handleDelete);
  });

  useEffect(() => {
    const fetchProducts = async () => {
      var params = {
        page: page,
      };

      var response = await ProductApi.getAll(params);
      setLoading(false);
      setProducts(response.data);
      setMeta(response.meta);
    };
    fetchProducts();
  }, [page, loadData]);
  var myView =
    loading === true ? (
      <tr>
        <td>
          <Loading />
        </td>
      </tr>
    ) : (
      products.map((product) => {
        return (
          <tr className="odd" key={product.id}>
            <td>{product.id}</td>
            <td>{product.product_name}</td>
            <td>{product.slug}</td>
            <td>{product.cat_id}</td>
            <td>{product.brand_id}</td>
            <td>{product.status}</td>
            <td>{product.price}</td>
            <td>
              <i className="fas fa-eye"></i>
              <Link to={"/admin/product/edit/" + product.id}>
                <i className="fas fa-edit"></i>
              </Link>
              <i name={product.id} className="fas fa-trash btn-del"></i>
            </td>
          </tr>
        );
      })
    );

  var myView1 =
    loading === true ? (
      <tr>
        <td>
          <Loading />
        </td>
      </tr>
    ) : (
      <Paginate meta={meta} basePath="/admin/product/list/" />
    );
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div>
              <p className="btn btn-secondary">
                <Link to="/admin/product/add">Create Product</Link>
              </p>
            </div>
            <div className="col-12">
              <p className="bg-success">{msgSuccess}</p>
              <p className="bg-warning">{msgWarning}</p>
            </div>
            <h3 className="card-title">Product List</h3>
          </div>

          {/* /.card-header */}
          <div className="card-body">
            <div
              id="example2_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6" />
                <div className="col-sm-12 col-md-6" />
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    id="example2"
                    className="table table-bordered table-hover dataTable dtr-inline"
                    aria-describedby="example2_info"
                  >
                    <thead>
                      <tr>
                        <th
                          className="sorting sorting_asc"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-sort="ascending"
                          aria-label="Rendering engine: activate to sort column descending"
                        >
                          ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Browser: activate to sort column ascending"
                        >
                          Product Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Platform(s): activate to sort column ascending"
                        >
                          Slug
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Engine version: activate to sort column ascending"
                        >
                          Category Id
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="CSS grade: activate to sort column ascending"
                          style={{}}
                        >
                          Brand Id
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="CSS grade: activate to sort column ascending"
                          style={{}}
                        >
                          Status
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example2"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="CSS grade: activate to sort column ascending"
                          style={{}}
                        >
                          Price
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{myView}</tbody>
                  </table>
                </div>
              </div>

              {myView1}
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>
  );
}