import './sass/global.scss'
import './sass/base.scss'
import './sass/utils.scss'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App () {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='main'>
        <Homepage />
      </div>
      <Footer />
    </div>
  )
}

export default App
