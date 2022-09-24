import { Trash } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/apiCalls'
import { Link } from 'react-router-dom'
import '../sass/pages/CartPage.scss'

export default function CartPage () {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const handleDelete = id => {
    deleteProduct(id, dispatch)
  }
  return (
    <div>
      <div className='container'>
        <div className='cart-page'>
          <div className='cart-page__wrapper'>
            <div className='cart-page__products'>
              {cart.products.map(product => (
                <div className='cart-item' key={product._id}>
                  <div className='cart-item__img'>
                    <Link to={`/products/${product._id}`}>
                      <img src={product.img} alt='' />
                    </Link>
                  </div>
                  <div className='cart-item__info'>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    {product.hasStockPrice && (
                      <strike>{product.stockPrice}.000 UZS</strike>
                    )}
                    <h2>{product.price}.000 UZS</h2>
                    <p>
                      O'lcham:
                      {product.size ? (
                        <span className='ml-5'>{product.size}</span>
                      ) : (
                        <span className='ml-5'>Tanlanmagan</span>
                      )}
                    </p>
                    <p>
                      Soni:
                      {product.quantity ? (
                        <span className='ml-5'>{product.quantity} ta</span>
                      ) : (
                        <span>1</span>
                      )}
                    </p>
                    <p>
                      Umumiy:
                      <span className='ml-5'>
                        {product.quantity * product.price}.000 UZS
                      </span>
                    </p>
                    <p>
                      ID: <span className='ml-5'>{product._id}</span>
                    </p>
                  </div>
                  <button
                    className='cart-item__remove btn'
                    onClick={handleDelete}
                  >
                    <Trash />
                  </button>
                </div>
              ))}
            </div>
            {cart.products.length > 0 ? (
              <div className='cart-page__order'>
                <span>Jami: </span>
                <span>{cart.total}.000 UZS</span>
                <button className='btn btn-blue'>Buyurtma berish</button>
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
