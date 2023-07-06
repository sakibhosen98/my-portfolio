import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl	mx-auto text-white p-5">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);