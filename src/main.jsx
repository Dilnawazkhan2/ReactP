import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './Contact.jsx';
import App from './App.jsx'
import Product from './Product.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Product",
    element: <Product />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
