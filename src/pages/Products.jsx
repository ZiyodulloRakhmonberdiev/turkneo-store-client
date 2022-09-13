import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import '../sass/pages/Products.scss'
import { Filter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
export default function ProductsPage () {
  const [isFilterPanel, setFilterPanel] = useState(true)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        // const res = await axios.get('http://node.turkneo.uz/api/users')
        const res = await axios.get('http://localhost:5500/api/products')
        // const list = res.data.sort((a, b) => a.getTime() - b.getTime())
        setProducts(res.data)
      } catch {}
    }
    getProducts()
  })
  return (
    <div className='products-page container'>
      <div className='products-page__header'>
        #KELING VA BIZNING ENG <span>QAYNOQ</span> va <span>JOZIBALI</span>{' '}
        MAHSULOTLARIMIZNI KO'RING!
      </div>
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
          }`}
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
