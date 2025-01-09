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
      <header className="s-header">
        <div className="header-logo">
          <a
            className="site-logo"
            href="https://veromoreno.github.io/my-portfolio/"
          >
            <img src="images/logo.png" alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className="current">
              <button
                className="smoothscroll"
                onClick={() => this.scrollToSection("home")}
                title="home"
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="smoothscroll"
                onClick={() => this.scrollToSection("about")}
                title="about"
              >
                About
              </button>
            </li>
            <li>
              <button
                className="smoothscroll"
                onClick={() => this.scrollToSection("github-works")}
                title="Github"
              >
                Github Repos
              </button>
            </li>
            <li>
              <button
                className="smoothscroll"
                onClick={() => this.scrollToSection("social")}
                title="veritechie"
              >
                Veritechie
              </button>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/veritechie"
                title="blog"
              >
                Blog
              </a>
            </li>
            <li>
              <button
                className="smoothscroll"
                onClick={() => this.scrollToSection("contact")}
                title="contact"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <a className="header-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </header>
    );
  }
}
