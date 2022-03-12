import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <section id="social" className="s-social target-section">
        <div className="row section-intro narrow">
          <div className="col-full">
          <img width="40px" src="images/veritechie.png" alt="Veritechie" />
              <h3>Veritechie</h3>
              <h1>Share knowledge.</h1>
            </div>
            <p>In March 2021, I began my adventure as Veritechie with the aim of being able to share and help people who feel a strong concern about development, programming and the technology sector.</p>
            <p>With profiles on Instagram, TikTok and Youtube, I enjoy sharing training and practice resources in programming and talking about motivation and growth as a way to advance in our professional career</p>
            <div className="stats">
              <ul>
                <li>
                  <span>5.5%</span>
                  <span>Engagement Rate</span>
                </li>
                <li>
                  <span>132K</span>
                  <span>Weekly scope</span>
                </li>
                <li>
                  <span>17.8K</span>
                  <span>Views</span>
                </li>
                <li>
                  <span>18K</span>
                  <span>Interaction</span>
                </li>
              </ul>
            </div>
            <a className="btn btn--primary" href="https://instagram.com/veritechie" rel="noreferrer" target="_blank"><i className="im im-instagram" aria-hidden="true" />Follow me</a>
        </div>
        </section>
    )
  }
}