// src/App.tsx
import React from 'react';
import { LandingPage } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/main/Error';
import About from './components/main/About/Page';
import Contact from './components/main/Contact/Page';

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
      path: '/contact', element: <Contact/>,
    }
  ])
  return (
    <RouterProvider router={router} />
  );
};
export default AppRouter

