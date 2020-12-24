import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link className="navStyle" to="/about">
          <li>About</li>
        </Link>
        <Link className="navStyle" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
