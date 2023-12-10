import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import Admin from "./Admin";
import Products from "./Shop/components/Products";
import Contact from "./Shop/components/features/Contact";
import AboutUs from "./Shop/components/features/AboutUs";
import Home from "./Shop/screens/home";
import ProductDetailScreen from "./Shop/components/Products/ProductDetail";
import DashBoard from "./Admin/components/DashBoard";
import Product from "./Admin/components/Product";
import ProductAdd from "./Admin/components/Product/ProductAdd";
import ProductList from "./Admin/components/Product/ProductList";
import ProductEdit from "./Admin/components/Product/ProductEdit";
import ProductTrash from "./Admin/components/Product/ProductTrash";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailScreen />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "/admin/product",
        element: <Product />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: "/admin/product/list/:page",
            element: <ProductList />,
          },
          {
            path: "/admin/product/add",
            element: <ProductAdd />,
          },
          {
            path: "/admin/product/edit/:id",
            element: <ProductEdit />,
          },
          {
            path: "/admin/product/trash",
            element: <ProductTrash />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
