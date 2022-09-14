import '../sass/components/Product.scss'
import { Link } from 'react-router-dom'
export default function Product ({
  item,
  item: { img, title, oldPrice, newPrice, currentPrice, rating, category }
}) {
  return (
    <div className='product'>
      <div className='product__img'>
        <img src={img} alt='' />
      </div>
      <div className='product__content'>
        <h2>{title}</h2>
        <div className='flex align-center justify-center mt-10'>
          {oldPrice && <strike className='mr-10'>100.000 UZS</strike>}
          <span>{newPrice ? newPrice : currentPrice}.000 so'm</span>
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
