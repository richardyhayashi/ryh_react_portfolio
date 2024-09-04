import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout.tsx';
import Root from './pages/Root.tsx';
import TicTacToePage from './pages/TicTacToePage.tsx';
import TestPage from './pages/TestPage.tsx';
import ReactHooks from './pages/ReactHooks.tsx';
import './index.css'

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
        element: <TicTacToePage />,
      },
      {
        path: "/tests",
        element: <TestPage />,
      },
      {
        path: "/reacthooks",
        element: <ReactHooks />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
