import { useState } from 'react'
import '../sass/components/Product.scss'
import { Bag, Heart, HeartFill } from 'react-bootstrap-icons'
// import { Link } from 'react-router-dom'

// export default function ListItem ({
//   item,
//   item: { img, title, oldPrice, newPrice, currentPrice, rating, category }
// }) {
export default function Product () {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(!selected)
  }
  return (
    <div className='product'>
      <button
        type='button'
        className='product__selected'
        // className={`product__favorite ${selected ? 'active' : ''}`}
        onClick={handleSelect}
      >
        {selected ? (
          <HeartFill className='fz-18' />
        ) : (
          <Heart className='fz-18' />
        )}
      </button>
      <div className='product__img'>
        <img
          src='https://res.cloudinary.com/idaproject/image/upload/v1662268075/turkneo/pexels-andrea-piacquadio-3755706_tyog1l.jpg'
          alt=''
        />
      </div>
      <div className='product__content'>
        <h2>Title</h2>
        <div className='flex align-center justify-center mt-10'>
          {/* {oldPrice && ( */}
          <strike className='mr-10'>100.000 UZS</strike>
          {/* )} */}
          <span>
            {/* {newPrice ? newPrice : currentPrice}.000 so'm */}
            120.000 UZS
          </span>
        </div>
      </div>
      <div className='product__btn-group justify-center align-center'>
        {/* <Link to={`/product/${item._id}`} className='product__buy-btn btn'>
          Sotib olish
        </Link> */}
        <a href='#' className='btn'>
          Sotib olish
        </a>
        <button className='btn'>
          <Bag />
        </button>
      </div>
    </div>
  )
}

// import { useState } from 'react'
// import '../sass/components/Product.scss'
// import { Bag, Heart, HeartFill } from 'react-bootstrap-icons'

// export default function Product () {
//   const [selected, setSelected] = useState(false)
//   const activeSelect = () => {
//     setSelected(!selected)
//   }
//   return (
//     <div className='product flex justify-center flex-column'>
//       <button onClick={activeSelect} className='btn fz-24'>
//         {selected ? <HeartFill /> : <Heart />}
//       </button>
//       <div className='product__img flex justify-center'>
//         <img
//           src='https://res.cloudinary.com/idaproject/image/upload/v1652112995/turkneo/krossovka_ad4dxu.jpg'
//           alt=''
//         />
//       </div>
//       <h2 className='mb-10'>Nike Air Jordan</h2>
//       <div className='flex mb-10 align-center'>
//         <strike className='mr-10'>100.000 UZS</strike>
//         <span className='fz-18'>100.000 UZS</span>
//       </div>
//       <div className='product__btn-group align-center justify-center'>
//         <button className='btn'>Sotib olish</button>
//         <button className='btn  ml-10'>
//           <Bag />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default function Product () {
// {
//   item,
//   item: { img, title, oldPrice, newPrice, currentPrice, rating, category }
// }

//   return (
//     <div className='product'>
//       <button
//         type='button'
//         className={`product__favorite ${selected ? 'active' : ''}`}
//         onClick={activeSelect}
//       >
//         <Heart />
//       </button>
//       <div className='product__img'>
//         <img src='../assets/img/hero.jpg' alt='' />
//       </div>
//       <div className='product__content'>
//         <div className='product__name'>title</div>
//         <div className='product__price'>
//           {/* {oldPrice && ( */}
//           <strike className='product__old-price'>prise.000</strike>
//           {/* )} */}
//           <span className='product__new-price'>
//             {/* {newPrice ? newPrice : currentPrice}.000 so'm */}
//             10000
//           </span>
//         </div>
//       </div>
//       <div className='product__btn-group-actions'>
//         {/* <Link to={`/product/${item._id}`} className='product__buy-btn btn'>
//           Sotib olish
//         </Link> */}
//         <button className='product__add-to-cart-btn btn'>
//           <Bag />
//         </button>
//       </div>
//     </div>
//   )
// }
