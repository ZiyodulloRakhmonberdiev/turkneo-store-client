import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/Homepage-swiper.css'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper'

export default function SwiperHero () {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className='mySwiper container'
      >
        <div
          slot='container-start'
          className='parallax-bg'
          style={{
            'background-image':
              'url(https://res.cloudinary.com/idaproject/image/upload/v1662267917/turkneo/pexels-r-fera-432059_dldjkc.jpg)'
          }}
          data-swiper-parallax='-23%'
        ></div>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            TURKNEO SHOP
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Erkaklar va Ayollar kiyimlari
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Har kuni chet eldan, xususan, Turkiya va Xitoy davlarlaridan
              keltiriladigan eng sifatli va hamyonbop narxdagi maxsulotlardan
              doimiy xabardor bo'lib boring
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            DOIMIY AKSIYALAR
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Har kuni qaynoq aksiyalar
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Hatto siz tasavvur qila olmaydigan darajada har kunlik va katta
              hajmdagi aksiyalar faqat siz aziz mijozlarimiz uchun.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='title' data-swiper-parallax='-300'>
            YETKAZIB BERISH
          </div>
          <div className='subtitle' data-swiper-parallax='-200'>
            Uyingizdan, offisdan turib bizda savdo qiling
          </div>
          <div className='text' data-swiper-parallax='-100'>
            <p>
              Endi bizda sizning haridingizni O'zbekiston bo'ylab yetkazib
              berish imkoniyati mavjud. Mahsulotni ko'ring, tanlang, sotib oling
              va hech qanday yo'l harajatlari va vaqt sarflamasdan qabul qilib
              oling
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
