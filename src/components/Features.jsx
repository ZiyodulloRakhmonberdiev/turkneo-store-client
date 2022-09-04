import '../sass/components/Features.scss'
import { Headset, Truck, Umbrella } from 'react-bootstrap-icons'
export default function Features () {
  return (
    <div className='features'>
      <div className='features__item'>
        <div className='features__img'>
          <Truck />
        </div>
        <div className='features__content'>
          <div className='features__title'>Bepul yetkazib berish</div>
          <div className='features__subtitle'>
            500.000 so'mdan ortiq haridlar bepul yetkazib beriladi
          </div>
        </div>
      </div>
      <div className='features__item'>
        <div className='features__img'>
          <Umbrella />
        </div>
        <div className='features__content'>
          <div className='features__title'>Pul kafolati</div>
          <div className='features__subtitle'>
            30 kun ichida pulingizni qaytarib olishingiz mumkin
          </div>
        </div>
      </div>
      <div className='features__item'>
        <div className='features__img'>
          <Headset />
        </div>
        <div className='our-chanses__content'>
          <div className='features__title'>Online maslahat</div>
          <div className='features__subtitle'>
            Istalgan vaqt biz bilan bog'laning
          </div>
        </div>
      </div>
    </div>
  )
}
