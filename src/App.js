import './sass/global.scss'
import './sass/base.scss'
import './sass/utils.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import Contact from './pages/Contact'
import SingleProduct from './components/SingleProduct'
import CartPage from './pages/CartPage'

function App () {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
