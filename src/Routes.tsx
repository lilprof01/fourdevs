// src/App.tsx
import React from 'react';
import { LandingPage, Service } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/main/Error';
import About from './components/main/About/Page';

const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/', element: <LandingPage/>,
      errorElement: <Error/>
    },
    {
      path: '/about', element: <About/>,
    },
    {
      path: '/service', element: <Service/>,
    }
  ])
  return (
    <RouterProvider router={router} />
  );
};
export default AppRouter

