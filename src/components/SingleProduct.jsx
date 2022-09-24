import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { addFavorite } from '../redux/favoriteRedux'
import '../sass/components/SingleProduct.scss'
import { Heart } from 'react-bootstrap-icons'

export default function SingleProduct () {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const dispatch = useDispatch()

  // get products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id)
        setProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [id])

  // quantity calculator
  const handleQuantity = type => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (type === 'inc') {
      setQuantity(quantity + 1)
    }
  }

  //  add product to cart
  const addToCart = () => {
    dispatch(addProduct({ ...product, quantity, size, color }))
  }

  //  add product to favorite (wishlist)
  const addToFavorite = () => {
    dispatch(addFavorite({ product, quantity }))
  }
  return (
    <div className='container single-product'>
      <div className='single-product__wrapper'>
        <div className='single-product__inner'>
          <div className='single-product__img'>
            <img src={product.img} alt='' />
          </div>
          <div className='single-product__content'>
            <div className='single-product__title'>{product.title}</div>
            <div className='single-product__descr'>{product.descr}</div>
            <div className='single-product__rating'></div>
            <div className='single-product__price'>
              {product.hasStockPrice && (
                <strike>{product.stockPrice}.000 UZS</strike>
              )}
              <span className='single-product__new-price ml-10'>
                {product.price}.000 UZS
              </span>
            </div>
            {product.size && (
              <div className='single-product__size'>
                O'lchamlar:
                <select
                  className='single-product__select'
                  onChange={e => setSize(e.target.value)}
                >
                  <option value=''>Tanlash</option>
                  {product.size.map(s => (
                    <option
                      key={s}
                      onClick={() => setSize(s)}
                      className='single-product__option'
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {product.color && (
              <div className='single-product__color'>
                Ranglar:
                {product.color.map(color => (
                  <span key={color} onClick={() => setColor(color)}>
                    {color}
                  </span>
                ))}
              </div>
            )}
            {product.categories && (
              <div className='single-product__categories'>
                Kategoriya:
                {product.categories.map(category => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            )}
            <div className='single-product__amount-wrapper'>
              <button
                className='single-product__quantity-dec'
                onClick={() => handleQuantity('dec')}
              >
                -
              </button>
              <span className='single-product__amount'>{quantity}</span>
              <button
                className='single-product__quantity-inc'
                onClick={() => handleQuantity('inc')}
              >
                +
              </button>
            </div>
            <div className='flex gap-10'>
              <button className='single-product__buy' onClick={addToCart}>
                Savatga qo'shish
              </button>
              <button className='single-product__buy' onClick={addToFavorite}>
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
