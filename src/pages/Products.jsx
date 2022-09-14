import { useEffect, useState } from 'react'
import Product from '../components/Product'
import '../sass/pages/Products.scss'
import { Filter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
export default function ProductsPage () {
  const [isFilterPanel, setFilterPanel] = useState(false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get('/products/')

        setProducts(res.data)
      } catch {}
    }
    getProducts()
  })
  return (
    <div className='products-page container'>
      {products.length ? (
        <div className='products-page__header'>
          #KELING VA BIZNING ENG <span>QAYNOQ</span> va <span>JOZIBALI</span>{' '}
          TOVARLARIMIZNI KO'RING!
        </div>
      ) : (
        <div className='products-page__header'>TOVARLAR MAVJUD EMAS</div>
      )}
      <button
        className='products-page__filter-panel-toggler'
        onClick={() => setFilterPanel(!isFilterPanel)}
      >
        Filter <Filter />
      </button>
      <div className='products-page__content flex'>
        <div
          className={`products-page__filter-panel ${
            isFilterPanel ? 'active' : ''
          } ${products.length > 0 ? 'products' : 'hidden'}`}
        >
          <h4>Ustki kiyim</h4>
          <Link to='/'>Pololar</Link>
          <Link to='/'>Sviterlar</Link>
          <Link to='/'>Ko'ylaklar</Link>
          <Link to='/'>Xudilar</Link>
          <Link to='/'>Maykalar</Link>
          <Link to='/'>Futbolkalar</Link>
          <h4>Pastki kiyim</h4>
          <Link to='/'>Jinsilar</Link>
          <Link to='/'>Shtonlar</Link>
          <Link to='/'>Shimlar</Link>
          <Link to='/'>Shortiklar</Link>
          <h4>Oyoq kiyim</h4>
          <Link to='/'>Tuflilar</Link>
          <Link to='/'>Krossovkalar</Link>
          <Link to='/'>Tapochkalar</Link>
          <h4>Aksessuarlar</h4>
          <Link to='/'>Aksessuarlar</Link>
          <h4>Chegirmalar</h4>
          <Link to='/'>Chegirmalar</Link>
        </div>
        <div className='products-page__filtered-list'>
          {products.map(item => (
            <Product item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  )
}
