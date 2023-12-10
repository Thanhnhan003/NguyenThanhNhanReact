import React from "react";
import FooterMenu from "./FooterMenu";
export default function index() {
  return (
    <footer className="footer">
      <div className="row-fluid">
        <FooterMenu></FooterMenu>
        <FooterMenu></FooterMenu>
        <FooterMenu></FooterMenu>
        <FooterMenu></FooterMenu>
      </div>
    </footer>
  );
}
