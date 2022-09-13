import '../sass/components/ExtraHero.scss'

export default function ExtraHero () {
  return (
    <div className='extra-hero gap-10'>
      <div
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/idaproject/image/upload/v1662268082/turkneo/pexels-subhan-saad-3613388_c8awrm.jpg)'
        }}
      >
        <div className='extra-hero__shadow'></div>
        <div className='extra-hero__content'>
          <h2>Shohona kiyimlar</h2>
          <h4>Erkaklar uchun liboslar to'plamimizni ko'zdan kechir</h4>
          <a href='#' className='btn'>
            Ko'rib chiqish
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/idaproject/image/upload/v1662268189/turkneo/pexels-antonio-sokic-3839432_fgokwe.jpg)'
        }}
      >
        <div className='extra-hero__shadow'></div>
        <div className='extra-hero__content'>
          <h4>Shoshil. Bu so'nggi hafta</h4>
          <h1>EXTRA CHEGIRMA 75%</h1>
          <a href='#' className='btn'>
            Ko'rib chiqish
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/idaproject/image/upload/v1662268075/turkneo/pexels-andrea-piacquadio-3755706_tyog1l.jpg)'
        }}
      >
        <div className='extra-hero__shadow'></div>
        <div className='extra-hero__content'>
          <h2>Top Erkaklar liboslari</h2>
          <h4>Yangi tovarlar bilan hoziroq tanishib chiq</h4>
          <a href='#' className='btn'>
            Ko'rib chiqish
          </a>
        </div>
      </div>
    </div>
  )
}
