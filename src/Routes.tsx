// src/App.tsx
import React from "react";
import { LandingPage, Service } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/main/Error";
import About from "./pages/About/Page";
import Contact from "./pages/Contact/Page";
import Layout from "./layout/Layout";

const children = [
  { index: true, element: <LandingPage /> },
  { path: "about", element: <About /> },
  { path: "service", element: <Service /> },
  { path: "contact", element: <Contact /> },
];

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
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