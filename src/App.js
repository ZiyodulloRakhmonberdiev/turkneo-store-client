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
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

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
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
