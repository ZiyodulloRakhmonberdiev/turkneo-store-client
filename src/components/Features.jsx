import '../sass/components/Features.scss'
import { Headset, Truck, Umbrella } from 'react-bootstrap-icons'
export default function Features () {
  return (
    <div className='features'>
      <div className='features__item'>
        <div className='features__img align-center justify-center'>
          <Truck />
        </div>
        <div className='features__content'>
          <h2>Bepul yetkazib berish</h2>
          <h4>500.000 so'mdan ortiq haridlar bepul yetkazib beriladi</h4>
        </div>
      </div>
      <div className='features__item'>
        <div className='features__img align-center justify-center'>
          <Umbrella />
        </div>
        <div className='features__content'>
          <h2>Pul kafolati</h2>
          <h4>30 kun ichida pulingizni qaytarib olishingiz mumkin</h4>
        </div>
      </div>
      <div className='features__item'>
        <div className='features__img align-center justify-center'>
          <Headset />
        </div>
        <div className='features__content'>
          <h2>Online maslahat</h2>
          <h4>Istalgan vaqt biz bilan bog'laning</h4>
        </div>
      </div>
    </div>
  )
}
