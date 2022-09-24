import '../sass/components/Product.scss'
import { Link } from 'react-router-dom'
export default function Product ({
  item,
  item: { img, title, descr, stockPrice, hasStockPrice, price }
}) {
  return (
    <div className='product'>
      <div className='product__img'>
        <img src={img} alt='' />
      </div>
      <div className='product__content'>
        <h2>{title}</h2>
        <h4>{descr}</h4>
        <div className='flex align-center justify-center mt-10'>
          {hasStockPrice && (
            <strike className='mr-10'>{stockPrice}.000 UZS</strike>
          )}
          <span>{price}.000 UZS</span>
        </div>
      </div>
      <div className='product__btn-group justify-center align-center'>
        <Link to={`/products/${item._id}`} className='product__buy-btn btn'>
          Batafsil
        </Link>
      </div>
    </div>
  )
}
