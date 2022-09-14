import { Trash } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../sass/pages/CartPage.scss'

export default function CartPage () {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <div className='container'>
        <div className='cart-page'>
          <div className='cart-page__wrapper'>
            <div className='cart-page__products'>
              {cart.products.map(product => (
                <div className='cart-item'>
                  <div className='cart-item__img'>
                    <img src={product.img} alt='' />
                  </div>
                  <div className='cart-item__info'>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <h2>{product.currentPrice}.000 UZS</h2>
                    <p>
                      O'lcham:
                      {product.size ? product.size : <span>Tanlanmagan</span>}
                    </p>
                    <p>Mahsulot ID: {product._id}</p>
                  </div>
                  <button className='cart-item__remove btn'>
                    <Trash />
                  </button>
                </div>
              ))}
            </div>
            {cart.products.length > 0 ? (
              <div className='cart-page__order'>
                <span>Jami: </span>
                <span>568.000 so'm</span>
                <button>Buyurtma berish</button>
              </div>
            ) : (
              <h2 className='cart-page__empty'>
                Savat bo'sh. Siz hali savatga hech nima qo'shmadingiz <br />
                <Link to='/products' className='btn'>
                  Savdo qilish
                </Link>
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
