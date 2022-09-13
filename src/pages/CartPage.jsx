import { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import '../sass/pages/CartPage.scss'
import cartRedux from '../redux/cartRedux'

export default function CartPage () {
  const [quantity, setQuantity] = useState(1)

  // const KEY = process.env.REACT_APP_STRIPE
  // StripeCheckout.setPublishedKey()

  // quantity calculator
  const handleQuantity = type => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (type === 'inc') {
      setQuantity(quantity + 1)
    }
  }
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <div className='container'>
        <div className='cart-page'>
          <div className='cart-page__wrapper'>
            <div className='cart-page__products'>
              {cart.products.map(product => (
                <div className='cart-item'>
                  <div className='cart-item__inner'>
                    <div className='cart-item__img'>
                      <img src={product.img} alt='' />
                    </div>
                    <div className='cart-item__info'>
                      <div className='cart-item__id'>
                        Mahsulot ID: {product._id}
                      </div>
                      <div className='cart-item__title'>
                        <span>{product.title}</span>
                        <div className='cart-item__price'>
                          {product.currentPrice}.000 UZS
                        </div>
                      </div>
                      <div className='cart-item__size'>
                        O'lcham:
                        {product.size ? product.size : <span>Tanlanmagan</span>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='cart-item__amount-wrapper'>
                      <button
                        className='cart-item__quantity-dec'
                        onClick={() => handleQuantity('dec')}
                      >
                        -
                      </button>
                      <span className='cart-item__amount'>
                        {product.quantity}
                      </span>
                      <button
                        className='cart-item__quantity-inc'
                        onClick={() => handleQuantity('inc')}
                      >
                        +
                      </button>
                    </div>
                    <span className='cart-item__total-price'>
                      {product.price * product.quantity}
                    </span>
                  </div>
                  <button className='cart-item__remove btn'>
                    <Trash />
                  </button>
                </div>
              ))}
            </div>
            <div className='cart-page__order'>
              <span>Jami: </span>
              <span>568.000 so'm</span>
              <button>Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
