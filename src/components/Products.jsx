import { useState, useEffect } from 'react'
import axios from 'axios'
import '../sass/components/Products.scss'
import Product from '../components/Product'
import SpecialDeal from '../components/SpecialDeal'
import '../sass/components/Products.scss'
export default function Products () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/products')
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  return (
    <div className='products flex'>
      <div className='products__special'>
        <SpecialDeal />
      </div>
      <div className='products-section'>
        <div className='products-section__controller'>
          <button type='button' className='products-section__btn active'>
            Tovarlar
          </button>
          <button type='button' className='products-section__btn'>
            Erkaklar
          </button>
          <button type='button' className='products-section__btn'>
            Ayollar
          </button>
          <button type='button' className='products-section__btn'>
            Barchasi
          </button>
        </div>
        <div className='products-section__container'>
          {/* {pro flexducts.slice(0, 8).map(item => ( */}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          {/* // <Product key={item.id} item={item} /> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Product from './Product'
// import '../sass/components/Products.scss'

// export default function Products () {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5500/api/products')
//         setProducts(res.data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getProducts()
//   }, [])
//   return (
//     <div className='products'>
//       <h2>So'nggi tovarlar</h2>
//       <div>
//         {/* {products.slice(0, 8).map(item => ( */}
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         <Product className='product' />
//         {/* ))} */}
//         {/* key={item._id} item={item} */}
//       </div>
//     </div>
//   )
// }
