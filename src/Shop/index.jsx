import React, { useEffect } from "react";
import TopNav from "./components/features/TopNav";
import Header from "./components/features/Header";
import GlobalNav from "./components/features/GlobalNav";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import Copyright from "./components/features/Copyright";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/megamenu.css";
import "./assets/font-awesome/css/font-awesome.css";
import { Outlet } from "react-router-dom";
import ProductApi from "./../api/ProductApi";
// import './assets/ico/favicon.ico'
// import './assets/css/font-awesome-ie7.min.css'

export default function Shop() {
  useEffect(() => {
    const fetchProducts = async () => {
      var $response = await ProductApi.getAll({});
      console.log($response);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <TopNav />
      <div className="container">
        <div id="gototop"></div>
        <Header />
        <GlobalNav />
        <div className="row">
          <Sidebar />
          <div className="span9">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      <Copyright />
    </>
  );
}
