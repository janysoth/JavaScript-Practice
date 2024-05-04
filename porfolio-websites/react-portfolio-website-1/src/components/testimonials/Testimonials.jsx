import React from 'react'
import './testimonials.css'
import customerReviews from '../../assets/customerReviews'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      {
        customerReviews.map((data) => {
          return (
            <div className="container testimonials__container">
              <article className="testimonial">
                <div className="client__avatar">
                  <img src={data.avatar} alt="Avatar One" />
                </div>
                <h5>{data.name}</h5>
                <small className="client__review">
                  {data.review}
                </small>
              </article>
            </div>
          )
        })}
    </section>
  )
}

export default Testimonials