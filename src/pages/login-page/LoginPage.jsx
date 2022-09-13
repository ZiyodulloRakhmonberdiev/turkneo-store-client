import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import './login-page.scss'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.user)
  const error = useSelector(state => state.user)

  const handleClick = e => {
    e.preventDefault()
    login(dispatch, { username, password })
  }
  return (
    <div className='login-page'>
      <div className='login-page__inner'>
        <div className='login-page__title'>Kirish</div>
        <div className='login-page__form'>
          <label className='login-page__label'>Emailingizni kiriting *</label>
          <input
            className='login-page__input'
            type='email'
            onChange={e => setUsername(e.target.value)}
          />
          <label className='login-page__label'>Prolingiz kiriting *</label>
          <input
            className='login-page__input'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
          <label className='login-page__label' htmlFor='remember'>
            Meni eslab qol <input className='' type='checkbox' id='remember' />
          </label>
          <button
            className='login-page__btn'
            onClick={handleClick}
            disabled={isFetching}
          >
            Kirish
          </button>
          {error && <span>Something went wrong</span>}
          <a href='#'>Parolingizni unutdingizmi?</a>
        </div>
      </div>
    </div>
  )
}
