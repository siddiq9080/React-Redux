// Products.js

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Product from "./ProductCard";
import CartPage from "./CartPage";
import { useSelector, useDispatch } from "react-redux";
import data from "./data.json";

const Products = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <BrowserRouter>
      <nav className="nav navbar bg-warning-subtle">
        <img
          src="https://i.pinimg.com/236x/09/0f/55/090f5516b8b09acf34fd4d55517c2e24.jpg"
          alt="logo"
          style={{ height: 60 }}
          className="ms-2"
        />
        <h1 className="hover:scale-110 transition-all">
          <Link to="/">
            {" "}
            <i className="fa-brands fa-shopify"></i> Shop{" "}
          </Link>
        </h1>
        <h1 className="hover:scale-110 transition-all">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart
            {count.length}
          </Link>
        </h1>

        <div className="me-3">
          <h1>Login</h1>
        </div>
      </nav>

      <div className="container mt-3 mb-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="row g-3 mt-4">

<h1 className="text-center font-bold text-3xl md:text-5xl md:my-5 text-primary">Shopping Area</h1>

                {data.map((eData) => (
                  <div className="col-md-4" key={eData.id}>
                    <Product
                      {...eData}
                      addCart={addToCart}
                      removeCart={removeFromCart}
                      isInCart={Boolean(count.find((cf) => cf.id === eData.id))}
                    />
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Products;
