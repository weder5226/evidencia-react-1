import { createBrowserRouter } from "react-router";
import { ClientLayout } from "@/layouts/ClientLayout";
import { Catalog } from "@/pages/Catalog";
import { Home } from "@/pages/Home";
import { AboutUs } from "@/pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ClientLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "catalogo",
        Component: Catalog,
      },
      {
        path: "conocenos",
        Component: AboutUs,
      },
    ],
  },
]);
