import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);

  return (
    <div className="navbar">
      <div className="nav_box">
        <div className="tabs-container">
          <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
            <span className="tab">E-commerce</span>
          </Link>

          <Link to={`/`} style={{ textDecoration: "none" }}>
            <span className="tab">Products</span>
          </Link>

          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="tab">Add a Product</span>
          </Link>
        </div>

        <div className="cart-profile-container">
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span className="cart-icon">
              <i className="fas fa-cart-plus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </i>
              <span>{lengthItems?.length}</span>
            </span>
          </Link>

          <div className="profile-container">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <h4 className="profile-name">Kundan Kumar</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
