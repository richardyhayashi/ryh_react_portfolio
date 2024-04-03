import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.tsx';
import Root from './pages/Root.tsx';
import TicTacToePage from './pages/TicTacToePage.tsx';
import './index.css'
import ContactPage from './pages/ContactPage.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/tic-tac-toe",
        element: <TicTacToePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
