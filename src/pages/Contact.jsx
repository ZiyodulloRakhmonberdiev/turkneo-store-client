import '../sass/pages/Contact.scss'
export default function Contact () {
  return (
    <div className='contact container'>
      <form action=''>
        <label htmlFor='#'>Ismingiz:</label>
        <input type='text' placeholder='Ism' />
        <label htmlFor='#'>Emailingiz:</label>
        <input type='text' placeholder='Email' />
        <label htmlFor='#'>Telefon raqam:</label>
        <input type='text' placeholder='Telefon' />
        <label htmlFor='#'>Qisqacha xabar mazmuni:</label>
        <input type='text' placeholder='Xabar mazmuni' />
        <label htmlFor='#'>Xabaringizni qoldiring:</label>
        <textarea type='text' placeholder='Batafsil' />
      </form>
    </div>
  )
}
