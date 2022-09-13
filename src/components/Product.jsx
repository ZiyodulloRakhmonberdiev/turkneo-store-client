import { useState } from 'react'
import '../sass/components/Product.scss'
import { Bag, Heart, HeartFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import { addFavorite } from '../redux/favoriteRedux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Product ({
  item,
  item: { img, title, oldPrice, newPrice, currentPrice, rating, category }
}) {
  const [selected, setSelected] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [product, setProduct] = useState({})
  const location = useLocation()
  const id = location.pathname.split('/')[2]
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

  const handleSelect = () => {
    setSelected(!selected)
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
    <div className='product'>
      <button
        type='button'
        className={`product__selected mb-5 ${selected ? 'active' : ''}`}
        onClick={handleSelect}
      >
        {selected ? (
          <HeartFill className='fz-18' />
        ) : (
          <Heart className='fz-18' onClick={addToFavorite} />
        )}
      </button>
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
          Sotib olish
        </Link>
        <button className='btn' onClick={addToCart}>
          <Bag />
        </button>
      </div>
    </div>
  )
}
