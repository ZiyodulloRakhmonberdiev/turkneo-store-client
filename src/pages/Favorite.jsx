import { Trash } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/apiCalls'
import { Link } from 'react-router-dom'
import '../sass/pages/CartPage.scss'

export default function Cart () {
  const dispatch = useDispatch()
  const favorite = useSelector(state => state.favorite)
  const handleDelete = id => {
    deleteProduct(id, dispatch)
  }
  return (
    <div>
      <div className='container'>
        <div className='cart-page'>
          <div className='products-page__header mb-10'>
            Sizning yoqtirgan narsalaringiz
          </div>
          <div className='cart-page__wrapper mt-10'>
            <div className='cart-page__products'>
              {favorite.products.map(product => (
                <div className='cart-item' key={product._id}>
                  <div className='cart-item__img'>
                    <Link to={`/products/${product._id}`}>
                      <img src={product.img} alt='' />
                    </Link>
                  </div>
                  <div className='cart-item__info'>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    {product.hasStockPrice && (
                      <strike className='mr-10'>
                        {product.stockPrice}.000 UZS
                      </strike>
                    )}
                    <span>{product.price}.000 UZS</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}
