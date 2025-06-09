import React from 'react'

const Contact = () => {

  const handleFormSubmit = (formData) => {
      const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
  }

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">
          Contact Us
        </h2>

        <div className="container contact-wrapper">

          <form action={handleFormSubmit}>
            <input
              type="text"
              required
              autoComplete='off'
              placeholder='Enter Your Name'
              name='username'
              className='form-control'
            />

            <input
              type="email"
              required
              autoComplete='off'
              placeholder='Enter Your Email'
              name='email'
              className='form-control'
            />

            <textarea
              name="message"
              className='form-control'
              required
              rows={10}
              autoComplete='off'
              placeholder='Enter Your Message'
            ></textarea>

            <button type='submit' value='send'>
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;