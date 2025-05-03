// src/App.tsx
import React from "react";
import { LandingPage, Service } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/main/Error";
import About from "./components/main/About/Page";
import Contact from "./components/main/Contact/Page";
import Layout from "./components/layout/Layout";

const children = [
  { index: true, element: <LandingPage /> },
  { path: "about", element: <About /> },
  { path: "service", element: <Service /> },
  { path: "contact", element: <Contact /> },
];

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <LandingPage />,
    //   errorElement: <Error />,
    // },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    // {
    //   path: "/service",
    //   element: <Service />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    {
      path: "/",
      element: <Layout />,
      children,
      errorElement: <Error />
    }
  ]);
  return (
      <RouterProvider router={router} />
  );
};
export default AppRouter;
