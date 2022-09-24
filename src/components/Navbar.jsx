import '../sass/components/Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import {
  Bag,
  Heart,
  Instagram,
  Telegram,
  Telephone
} from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function Navbar () {
  const quantity = useSelector(state => state.cart.quantity)
  const favorite = useSelector(state => state.favorite.quantity)

  return (
    <div className='navbar'>
      <div className='navbar__top'>
        <div className='container flex center'>
          <h4>Turkneo do'koni online sahifasiga hush kelibsiz</h4>
          <div className='align-center justify-center col-gap-10'>
            <a href='tel:998997777777'>
              <Telephone />
            </a>
            <span>
              <a href='tel:998997777777'>+998997777777 </a>
            </span>
            <a href='#'>
              <Telegram />
            </a>
            <a href='#'>
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className='navbar__body'>
        <div className='container align-center justify-between'>
          <a href='/' className='align-center'>
            <img src={logo} alt='' width={60} height={60} />
            <p>TURKNEO</p>
          </a>
          <nav>
            <ul className='flex'>
              <li>
                <Link to='/'>Bosh sahifa</Link>
              </li>
              <li>
                <Link to='/products'>Tovarlar</Link>
              </li>
              <li>
                <Link to='/contact'>Bog'lanish</Link>
              </li>
            </ul>
          </nav>
          <div className='align-center'>
            <Link to={'/cart'} className='mr-10 fz-24'>
              <Bag />
              <span>{quantity}</span>
            </Link>
            <Link to='/favorite' className='mr-10 fz-24'>
              <Heart />
              <span>{favorite}</span>
            </Link>
            <Link className='navbar__login-btn btn' to='/login'>
              A'zo bo'lish
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
