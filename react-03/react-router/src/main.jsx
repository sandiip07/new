import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Github from './components/Github/Github'
import Name from './components/Name/Name'


// const router = createBrowserRouter([

//   {
//     path: "",
//     element: <Layout />,

//     children: [

//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }

//     ]

//   }

// ])

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Name' element={<Name />} />
      <Route path='/Github' element={<Github />} />
    </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />

  </React.StrictMode>
)
