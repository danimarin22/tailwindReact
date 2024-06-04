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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="Collections" element={<Collections />} />
      <Route path="Barrels" element={<Barrels />} />
      <Route path="SingleLots" element={<SingleLots />} />
      <Route path="Shop/page/:page" element={<Shop />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="*" element={<div>You are not where you should</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

