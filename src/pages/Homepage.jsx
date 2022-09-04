import ExtraHero from '../components/ExtraHero'
import Features from '../components/Features'
import Products from '../components/Products'
import SwiperHero from '../components/SwiperHero'
import '../sass/pages/Homepage.scss'

export default function App () {
  return (
    <div className='homepage container'>
      <div className='homepage__hero'>
        <SwiperHero />
      </div>
      <div className='homepage__extra-hero'>
        <ExtraHero />
      </div>
      <div className='homepage__products'>
        <Products />
      </div>
      <div className='homepage__features'>
        <Features />
      </div>
    </div>
  )
}
