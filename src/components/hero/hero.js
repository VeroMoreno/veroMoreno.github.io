import React, { Component } from "react";

export default class Header extends Component {
  scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <section
        id="home"
        className="s-home page-hero target-section"
        data-parallax="scroll"
        data-image-src="images/hero-bg.jpg"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
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
              <button
                className="btn btn--stroke"
                onClick={() => this.scrollToSection("github-works")}
              >
                Latest Projects
              </button>
              <button
                className="btn btn--stroke"
                onClick={() => this.scrollToSection("about")}
              >
                More About Me
              </button>
            </div>

            <div className="home-content__scroll">
              <button
                className="scroll-link smoothscroll"
                onClick={() => this.scrollToSection("about")}
              >
                <span>Scroll Down ↓</span>
              </button>
            </div>
          </div>
        </div>
        <ul className="home-social">
          <li>
            <a href="https://www.linkedin.com/in/veritechie/">
              <i className="im im-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/veroMoreno">
              <i className="im im-github" aria-hidden="true" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/veritechie">
              <i className="im im-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://dev.to/veritechie">
              <i className="im im-code" aria-hidden="true" />
              <span>Dev.to</span>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/vmoreno">
              <i className="im im-behance" aria-hidden="true" />
              <span>Behance</span>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
