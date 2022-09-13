import React from 'react'

export default function RegisterPage () {
  return (
    <div className='register-page'>
      <div className='register-page__inner'>
        <div className='register-page__title'>Kirish</div>
        <div className='register-page__form'>
          <div className='register-page__label'>Emailingizni kiriting *</div>
          <input className='register-page__input' type='email' />
          <div className='register-page__label'>Prolingiz kiriting *</div>
          <input className='register-page__input' type='password' />
          <div className='register-page__label' id='remember'>
            Meni eslab qol
          </div>
          <input className='register-page__input' type='checkbox' />
          <button classNames='register-page__button'>Kirish</button>
          <a href='#'>Parolingizni unutdingizmi?</a>
        </div>
      </div>
    </div>
  )
}
