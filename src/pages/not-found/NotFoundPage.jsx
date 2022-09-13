import React from 'react'
import { Link } from 'react-router-dom'
import './not-found-page.css'

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
          <h2>Sahifa topilmadi</h2>
          <Link to='/' className='link-to-home'>
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}
