import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.tsx';
import TicTacToePage from './pages/TicTacToePage.tsx';
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/tic-tac-toe",
      element: <TicTacToePage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
