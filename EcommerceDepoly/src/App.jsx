
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Applayout from './components/Applayout/Applayout'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Product from './components/Product/Product'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Productbox from './components/Productbox/Productbox'
import Checkout from './components/Checkout/Checkout'
function App() {
     const router = createBrowserRouter([
         {
          path:'/',
          element:<Applayout/>,
          children: [
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/product',
              element:<Product/>
            },
            {
              path:'/about',
              element:<About/>
            },
            {
              path:'/contact',
              element:<Contact/>
            },
            {
              path: '/product/:name',
              element: <Productbox />,
            },
            {
              path:'/cart',
              element:<Cart/>
            },
            {
              path:'/checkout',
              element:<Checkout/>
            }
          ]

         }
     ])

     return (
      <>
         <RouterProvider router={router}/>
      </>
    )
}

export default App
