import { Link } from 'react-router-dom'
import '../sass/components/SpecialDeal.scss'

export default function SpecialDeal ({
  item,
  item: { img, title, stockPrice, hasStockPrice, price }
}) {
  return (
    <div className='special-deal'>
      <div className='special-deal__title'>#Maxsus taklif</div>
      <div className='special-deal__subtitle'>
        Shoshil. Aksiya vaqti oz qoldi
      </div>
      <div className='special-deal__product-img'>
        <img src={img} alt='' />
      </div>
      <h2 className='fz-18 mb-10'>{title}</h2>
      <div className='special-deal__product-price'>
        {hasStockPrice && (
          <strike className='mr-10'>{stockPrice}.000 UZS</strike>
        )}
        <span>{price}.000 UZS</span>
      </div>
      <div className='special-deal__count-down'></div>
      <button className='special-deal__add-to-cart-btn btn mt-10'>
        <Link to={`/products/${item._id}`}>Ko'rish</Link>
      </button>
    </div>
  )
}
