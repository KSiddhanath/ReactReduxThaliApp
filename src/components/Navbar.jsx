import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const thali = useSelector((state) => state.counter.thali);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">
        <div className="container-fluid">
          <img src="data:image/jpeg;base64,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" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ fontFamily: "sans-serif", fontSize: "25px" }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "25px",
                  margin: "5px",
                }}
                className="nav-item"
              >
                <Link className="nav-link" to="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  <img
                    src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-cart-sale-and-shopping-xnimrodx-lineal-color-xnimrodx.png"
                    width={"40px"}
                    height={"40px"}
                  />
                </Link>
              </li>{" "}
              <h3 style={{ color: "white" }}>{thali.length}</h3>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
