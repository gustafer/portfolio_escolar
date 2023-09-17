import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Root from "./routes/root";
import Art from "./routes/arts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/artes",
    element: <Art />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
