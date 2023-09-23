import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Root from "./routes/root";
import Accounts from "./routes/accountspage";
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
    path: "/contas-lol",
    element: <Accounts />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
