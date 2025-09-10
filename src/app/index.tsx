import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { ThemeProvider } from "./providers/ThemeProvider";
import { App } from "./App";
import { AboutPage } from "@/pages/AboutPage";
import { Shop } from "@/pages/ShopPage";
import './styles/index.scss'

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    ),
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'Loading...'}><AboutPage /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      },
    ]
  }
])

const container = createRoot(root);

container.render(
  <RouterProvider router={router}/>
)
