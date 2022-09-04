import './App.css'
import './sass/global.scss'
import './sass/base.scss'
import './sass/utils.scss'
// import './sass/swiper.scss'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App () {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='main'>
        <Homepage />
      </div>
    </div>
  )
}

export default App
