import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This  is  a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/janysoth/JavaScript-Practice" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio