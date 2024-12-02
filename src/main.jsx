import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Layout'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Explore from "./Components/Explore/Explore"
import Gallery from "./Components/Gallery/Gallery"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "explore",
        element: <Explore />
      },
      {
        path: "gallery",
        element: <Gallery />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
