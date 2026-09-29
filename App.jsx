import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useSelector } from "react-redux";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function Navbar() {
  const cartItems = useSelector(
    state => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <h2>Paradise Nursery 🌱</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/plants">
          Plants
        </Link>

        <Link to="/about">
          About Us
        </Link>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

      </div>

    </nav>
  );
}

<Link to="/plants">
  <button className="get-started-btn">
    Get Started
  </button>
</Link>

