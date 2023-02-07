import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Component/Navbar";
class Layout extends Component {
  state = {};
  render() {
    return (
      <main>
        <NavBar />
        <Outlet />
      </main>
    );
  }
}

export default Layout;
