import {createBrowserRouter} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig";
import {RootLayout} from "@/app/layouts/RootLayout";

import { MainPage } from "@/pages/MainPage";


export const router = createBrowserRouter([
  {
    path: RoutePath.main,        // '/'
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: RoutePath.about,
        async lazy() {
          const { AboutPage } = await import('@/pages/AboutPage');
          return { Component: AboutPage };
        },
      },
      {
        path: RoutePath.shop,
        async lazy() {
          const { ShopPage } = await import('@/pages/ShopPage');
          return { Component: ShopPage };
        },
      },
    ],
  },

]);
