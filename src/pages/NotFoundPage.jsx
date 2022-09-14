import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/pages/NotFoundPage.css'

export default function NotFoundPage () {
  return (
    <div className='container'>
      <div className='not-found-page'>
        <h1 className='title'>404</h1>
        <div className='cloak__wrapper'>
          <div className='cloak__container'>
            <div className='cloak'></div>
          </div>
        </div>
        <div className='info'>
          <h2 className='mb-10'>404 sahifa. Siz qidirgan sahifa mavjud emas</h2>
          <Link to='/' className='link-to-home mt-10 btn'>
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}
