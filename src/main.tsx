import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog1 from './routes/Blog1.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: 'blogs/:blogId',
    element: <Blog1></Blog1>,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
