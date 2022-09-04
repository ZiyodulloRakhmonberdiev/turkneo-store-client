import '../sass/components/SpecialDeal.scss'

export default function SpecialDeal () {
  return (
    <div className='special-deal'>
      <div className='special-deal__title'>#Maxsus taklif</div>
      <div className='special-deal__subtitle'>
        Shoshil. Aksiya vaqti oz qoldi
      </div>
      <div className='special-deal__product-img'>
        <img
          src='https://res.cloudinary.com/idaproject/image/upload/v1662268075/turkneo/pexels-andrea-piacquadio-3755706_tyog1l.jpg'
          alt=''
        />
      </div>
      <h2 className='fz-18 mb-10'>Erkaklar uchun libos</h2>
      <div className='special-deal__product-price'>
        <strike>499.000 so'm</strike>
        <span className='fz-24 ml-10'>279.000 so'm </span>
      </div>
      <div className='special-deal__count-down'></div>
      <button className='special-deal__add-to-cart-btn btn'>
        Savatga qo'shish
      </button>
    </div>
  )
}
