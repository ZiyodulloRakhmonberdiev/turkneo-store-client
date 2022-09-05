import '../sass/components/Footer.scss'
import logo from '../assets/img/logo.png'
import { Facebook, Instagram, Map, Telegram } from 'react-bootstrap-icons'

export default function Footer () {
  return (
    <div className='footer container'>
      <div className='footer__row'>
        <div className='footer__column'>
          <div className='footer__logo'>
            <img src={logo} alt='' />
            <span>Turkneo</span>
          </div>
          <div className='footer__text'>
            <p className='mb-10'>
              Endi uyingizdan chiqmasdan turib harid qilishingiz mumkin.
              O'zbekiston bo'yicha yetkazib beramiz.
            </p>
            <p>
              <Map /> Manzilimiz: Urganch sh. Shum Bolo Yonida 2-chi manzil
              Darital ro'parasida
            </p>
          </div>
        </div>
        <div className='footer__column'>
          <div className='footer__label'>Menu</div>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Bosh sahifa
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Maxsulotlar
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Biz haqimizda
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Bog'lanish
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__column'>
          <div className='footer__label'>Kategoriya</div>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Erkaklar
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Ayollar
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Aksessuarlar
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Chegirmalar
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__column'>
          <div className='footer__label'>Bog'lanish</div>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='tel:998999999999' className='footer__link'>
                +998 99 999 99 99
              </a>
            </li>
            <li className='footer__item footer__item-social'>
              <a href='#' className='footer__link'>
                <Telegram />
              </a>
              <a href='#' className='footer__link'>
                <Instagram />
              </a>
              <a href='#' className='footer__link'>
                <Facebook />
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Biz haqimizda
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Bog'lanish
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        Copyright. Barcha huquqlar himoyalangan
      </div>
    </div>
  )
}
