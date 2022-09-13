import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import '../sass/components/CartItem.scss'
export default function CartItem ({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { product: title, price, img } = product
  // quantity calculator
  const handleQuantity = type => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (type === 'inc') {
      setQuantity(quantity + 1)
    }
  }
  return (
    <div className='cart-item'>
      <div>
        <div className='cart-item__img'>
          <img src='' alt='' />
        </div>
        <div className='cart-item__info'>
          <div className='cart-item__title'>
            {product.title}
            <div className='cart-item__price'>235.000 so'm</div>
          </div>
          <div className='cart-item__size'>O'lcham: </div>
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
          <span className='cart-item__amount'>1</span>
          <button
            className='cart-item__quantity-inc'
            onClick={() => handleQuantity('inc')}
          >
            +
          </button>
        </div>
        <span className='cart-item__total-price'>556.000 so'm</span>
      </div>
      <button classNames='cart-item__remove'>
        <Trash />
      </button>
    </div>
  )
}
