import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <ul>
          <li
            style={{
              display: "inline",
              justifyContent: "space-evenly",
            }}
          >
            Home
          </li>
          <li
            style={{
              display: "inline",
              justifyContent: "space-evenly",
            }}
          >
            About
          </li>
          <li
            style={{
              display: "inline",
              justifyContent: "space-evenly",
            }}
          >
            Menu
          </li>
          <li
            style={{
              display: "inline",
              justifyContent: "space-evenly",
            }}
          >
            Staff
          </li>
          <li
            style={{
              display: "inline",
              justifyContent: "space-evenly",
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    );
  }
}
