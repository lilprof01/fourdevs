// src/App.tsx
import React from 'react';
import { LandingPage } from './pages';
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
    }
  ])
  return (
    <RouterProvider router={router} />
  );
};
export default AppRouter

