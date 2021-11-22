import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <img src="images/veritechie.png" alt="Veritechie" />
            </div>
            <ul className="footer-social">
              <li><a href="https://www.linkedin.com/in/vmorenoflores/" target="_blank">
                  <i aria-hidden="true" />
                  <span>LinkedIn</span>
                </a></li>
              <li><a href="https://github.com/veroMoreno" target="_blank">
                  <i aria-hidden="true" />
                  <span>Github</span>
                </a></li>
                <li><a href="https://instagram.com/veritechie" target="_blank">
                  <i aria-hidden="true" />
                  <span>Instagram</span>
                </a></li>
                <li><a href="https://dev.to/veritechie" target="_blank">
                  <i aria-hidden="true" />
                  <span>Dev.to</span>
                </a></li>
              <li><a href="https://www.behance.net/vmoreno" target="_blank">
                  <i aria-hidden="true" />
                  <span>Behance</span>
                </a></li>
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright 2021</span>
              <span>Design by <a href="https://veromoreno.github.io/my-portfolio/">me, Verónica, with ♥</a></span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}