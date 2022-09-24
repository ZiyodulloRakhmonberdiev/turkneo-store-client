import './sass/global.scss'
import './sass/base.scss'
import './sass/utils.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import SingleProduct from './components/SingleProduct'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorite from './pages/Favorite'

function App () {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
