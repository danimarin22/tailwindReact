import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SingleLots from "./pages/SingleLots.jsx";
import Barrels from "./pages/Barrels.jsx";
import Collections from "./pages/Collections.jsx";
import Signin from "./pages/Signin.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./components/Cart.jsx";
import ShopDetails from "./pages/ShopDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="collections" element={<Collections />} />
      <Route path="barrels" element={<Barrels />} />
      <Route path="singleLots" element={<SingleLots />} />
      <Route path="shop/page/:page" element={<Shop />} />
      <Route path="shop/:id" element={<ShopDetails />} />
      <Route path="signin" element={<Signin />} />
      <Route path="cart" element={<Cart />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="*" element={<div>You are not where you should</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

