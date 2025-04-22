import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/base/common.scss"
import "../src/scss/base/variable.scss"
import "../src/scss/pages/home.scss"



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Pagenotfound from './Componant/page/Pagenotfound.jsx'
import Jobs from './Componant/page/Jobs.jsx'
import Internships from './Componant/page/Internships.jsx'
import Events from './Componant/page/Events.jsx'
import Login from './Componant/page/Login.jsx'


const router = createBrowserRouter ([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/*",
    element: <Pagenotfound />,
  },
  {
    path: "/internships",
    element: <Internships />
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
