import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./nav-bar/Navbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <h1>Hello</h1>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
