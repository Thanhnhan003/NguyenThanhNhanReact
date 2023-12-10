import React from "react";
import { Link } from "react-router-dom";

export default function GloBalNav() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="container">
          <a
            href="#st"
            data-target=".nav-collapse"
            data-toggle="collapse"
            className="btn btn-navbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <div className="nav-collapse">
            <ul className="nav">
              <li className="active">
                <a href="/">Home </a>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
            <form action="#stst" className="navbar-search pull-left">
              <input
                type="text"
                placeholder="Search"
                className="search-query span2"
                fdprocessedid="sxdvmi"
              />
            </form>
            <ul className="nav pull-right">
              <li className="dropdown">
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle"
                  href="#stst"
                >
                  <span className="icon-lock" /> Login <b className="caret" />
                </a>
                <div className="dropdown-menu">
                  <form className="form-horizontal loginFrm">
                    <div className="control-group">
                      <input
                        type="text"
                        className="span2"
                        id="inputEmail"
                        placeholder="Email"
                      />
                    </div>
                    <div className="control-group">
                      <input
                        type="password"
                        className="span2"
                        id="inputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="control-group">
                      <label className="checkbox">
                        <input type="checkbox" /> Remember me
                      </label>
                      <button type="submit" className="shopBtn btn-block">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
