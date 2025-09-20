import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WeddProForgotPassword from './components/ForgotPassword/ForgotPass'
import WeddProLogin from './components/Login/Login'
import WeddProRegister from './components/Register/Register'
import About from './pages/About'
import Advantage from './pages/Advantages'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import News from './pages/News'
import Pricing from './pages/Pricing'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WeddProLogin />
    }, {
      path: '/home',
      element: <Home />
    },
    {
      path: '/blog',
      element: <Blog />
    }, {
      path: '/about',
      element: <About />
    }, {
      path: '/news',
      element: <News />
    }, {
      path: '/contact',
      element: <Contact />
    }, {
      path: '/pricing',
      element: <Pricing />
    }, {
      path: '/adventages',
      element: <Advantage />
    }, {
      path: '/register',
      element: <WeddProRegister />
    }, {
      path: '/forgotPass',
      element: <WeddProForgotPassword />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
