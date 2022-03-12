import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">With over 6 years of professional experience as UI & Front Developer, I have solid skills in HTML5 markup, CSS3, responsive web & semantic web analysis. In my last position I covered processes of front-end with Javascript using React and back-end in Node JS, focused on REST API with Express and MongoDB.
              You will find me to be a curious, analytical problem solver with a focus on continuous learning and keeping up-to-date on new technologies.</p>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Howdy!</h3>
            <p>Since I started my career as a UI developer, I have built a wide experience in designing, developing,
            testing and improving applications and websites, covering definition, semantic structure, design and programming
            processes with a collaborative work style and in a fast-paced work environment.</p>
            <p>Experienced on agency, startup and client side and with a result-oriented performance ,
            I have been involved in several product UI design and development projects, including sketching,
            information architecture, visual elements and interaction patterns of interface elements and developing solid
            skills in HTML5 markup, CSS3, responsive web, semantic web analysis and logical order of cascade sheets.</p>
            <p>You will find me to be a curious and strong analytical problem solver with a focus on continuous learning,
              keeping up-to-date on new technologies and adding value to projects and customers. As a result of my approach,
              in my last position I covered processes of front-end development with Javascript using Backbone / React technologies
              and of back-end development in Node JS, focused on REST API with Express framework and MongoDB database and including
              a continuous integration by using Circle / Docker and agile methodologies under Scrum.
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>Skills</h3>
            <ul className="skill-tags">
              <li>
                <h5>Principal Stack</h5>
                <span>Mongo</span> <span>Express</span> <span>React</span> <span>Node</span>
              </li>
              <li>
                <h5>Frontend Technologies</h5>
                <span>Javascript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Responsive Design</span>
                <span>ReactJS</span>
                <span>Angular 2+</span>
                <span>Backbone JS</span>
                <span>Lodash </span>
              </li>
              <li>
                <h5>Backend Technologies</h5>
                <span>Mongoose</span> <span>Rest Api</span> <span>NodeJS</span> <span>Express</span> <span>MongoDB</span>
              </li>
              <li>
                <h5>Software Skills</h5>
                <span>Git</span> <span>Github</span> <span>Bitbucket</span> <span>Robo3T</span> <span>Postman</span> <span>Swagger</span> <span>Jira</span> <span>Storybook</span> <span>Terminal</span> <span>Linux</span> <span>Mac</span>
              </li>
              <li>
                <h5>Technologies I have worked with previously</h5>
                <span>PHP</span> <span>SQL</span> <span>MySQL</span> <span>jQuery</span>
              </li>
              <li>
                <h5>Methodologies</h5>
                <span>Scrum</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row about-content about-content--buttons">
          <div className="col-six tab-full left">
            <a target="_blank" href="https://drive.google.com/file/d/16dYAcvkrrN6ivD5UqwIyTyeJWjBuxzi4/view?usp=sharing" className="btn btn--primary full-width">Download My CV</a>
          </div>
          <div className="col-six tab-full right">
            <a href="mailto:veronica.moreno.work@gmail.com" className="btn full-width">Hire Me Now</a>
          </div>
        </div>
        <div className="row about-content about-content--timeline">
          <div className="col-full text-center">
            <h3>My Work Experience</h3>
          </div>
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Feb 2019 - Jan 2021</p>
                  <h3>TAPTAP Networks</h3>
                  <h5>Junior FullStack Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Junior Full Stack profile, front-end development with Javascript using Backbone / React technologies, back-end development in NodeJS focused on REST API with Express framework and MongoDB database. Continuous integration using Circle / Docker and agile methodologies under Scrum.</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">May 2015 - Jan 2019</p>
                  <h3>Mirai</h3>
                  <h5>Front-end & UI Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Websites Development for hotel companies using Wordpress and Bootstrap tool. Currently I am part of "Support area" within the frontend department where we improve and create search engines for the correct visualization of different sites as the Hotel manager request.</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Sept 2014 - April 2015</p>
                  <h3>UNIR, Universidad Internacional de la Rioja</h3>
                  <h5>Front-end designer & Web designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Development and testing of corporate mailings, landings, and corporate banners design.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2011 - June 2012</p>
                  <h3>Gowex</h3>
                  <h5>Front-end developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Wiloc connects advertisers and users through this platform. Here advertisers have a physical and virtual space that allows them to interact with consumers to show advertising campaigns, personalized offers and discounts depending on their needs and the place they access to the network.</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Feb 2013 - April 2013</p>
                  <h3>E-strategia</h3>
                  <h5>Front-end & UI Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Development of corporate websites, newsletters, landings, pure HTML layout, CSS + Javascript</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Oct 2011 - May 2012</p>
                  <h3>Openfinance</h3>
                  <h5>Graphic Designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Impok is a meeting place for investors and professional managers. Here they can learn/discover the community decisions in real time. This start-up has been one of the best received by Wayra (Telefónica group). Here I developed my skills as Graphic designer and Web interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
