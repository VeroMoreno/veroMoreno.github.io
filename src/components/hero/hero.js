import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Hello There</h3>
            <h1>
              I'm Verónica Moreno. <br />
              Front-end + UI Developer, <br />
              &amp; future Fullstack <br />
            </h1>
            <div className="home-content__buttons">
              <a href="#works" className="smoothscroll btn btn--stroke">
                Latest Projects
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Me
              </a>
            </div>
            <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="home-social">
          <li>
            <a href="https://www.linkedin.com/in/vmorenoflores/"><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
          </li>
          <li>
            <a href="https://github.com/veroMoreno"><i className="im im-github" aria-hidden="true" /><span>Github</span></a>
          </li>
          <li>
            <a href="https://www.instagram.com/veritechie"><i className="im im-instagram" aria-hidden="true" /><span>Instagram</span></a>
          </li>
          <li>
            <a href="https://www.behance.net/vmoreno"><i className="im im-code" aria-hidden="true" /><span>Dev.to</span></a>
          </li>
          <li>
            <a href="https://www.behance.net/vmoreno"><i className="im im-behance" aria-hidden="true" /><span>Behance</span></a>
          </li>
        </ul>
      </section>
    )
  }
}