import Alert from "@mui/material/Alert";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Alert severity="error">Route not found</Alert>,
  },
  {
    path: "/login",
    Component: () => <Alert severity="info">Not implemented</Alert>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
