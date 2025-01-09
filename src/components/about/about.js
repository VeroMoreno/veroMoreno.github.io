import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">
              Front-End Developer with more than 10 years of experience in
              international projects, combining interface design international
              projects, combining interface design, advanced front-end
              development and back-end and back-end development with Node.js,
              Express and MongoDB. Focused on creating scalable, intuitive and
              user-centric solutions, I'm looking to consolidate my career as a
              as a Full Stack Developer, integrating front-end and back-end
              skills with a commitment to back-end skills with a commitment to
              innovation and continuous learning.
            </p>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Howdy!</h3>
            <p>
              Since I started my career as a UI developer, I have built a wide
              experience in designing, developing, testing and improving
              applications and websites, covering definition, semantic
              structure, design and programming processes with a collaborative
              work style and in a fast-paced work environment.
            </p>
            <p>
              Experienced on agency, startup and client side and with a
              result-oriented performance , I have been involved in several
              product UI design and development projects, including sketching,
              information architecture, visual elements and interaction patterns
              of interface elements and developing solid skills in HTML5 markup,
              CSS3, responsive web, semantic web analysis and logical order of
              cascade sheets.
            </p>
            <p>
              You will find me to be a curious and strong analytical problem
              solver with a focus on continuous learning, keeping up-to-date on
              new technologies and adding value to projects and customers. As a
              result of my approach, in my last position I covered processes of
              front-end development with Javascript using Backbone / React
              technologies and of back-end development in Node JS, focused on
              REST API with Express framework and MongoDB database and including
              a continuous integration by using Circle / Docker and agile
              methodologies under Scrum.
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>Skills</h3>
            <ul className="skill-tags">
              <li>
                <h5>Principal Stack</h5>
                <span>Mongo</span> <span>Express</span> <span>React</span>{" "}
                <span>Node</span>
              </li>
              <li>
                <h5>Frontend Technologies</h5>
                <span>Javascript</span> <span>HTML</span> <span>CSS</span>{" "}
                <span>Responsive Design</span> <span>ReactJS</span>{" "}
                <span>Angular 2+</span> <span>Backbone JS</span>
                <span>Lodash </span>
              </li>
              <li>
                <h5>Backend Technologies</h5>
                <span>Mongoose</span> <span>Rest Api</span> <span>NodeJS</span>{" "}
                <span>Express</span> <span>MongoDB</span>
              </li>
              <li>
                <h5>Software Skills</h5>
                <span>Git</span> <span>Github</span> <span>Bitbucket</span>{" "}
                <span>Robo3T</span> <span>Postman</span> <span>Swagger</span>{" "}
                <span>Jira</span> <span>Storybook</span> <span>Terminal</span>{" "}
                <span>Linux</span> <span>Mac</span>
              </li>
              <li>
                <h5>Technologies I have worked with previously</h5>
                <span>PHP</span> <span>SQL</span> <span>MySQL</span>{" "}
                <span>jQuery</span>
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
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1md4hdBuEFl06orsCAIChM50ofSv4Z1eI/view?usp=sharing"
              className="btn btn--primary full-width"
            >
              Download My CV
            </a>
          </div>
          <div className="col-six tab-full right">
            <a
              href="mailto:veronica.moreno.work@gmail.com"
              className="btn full-width"
            >
              Hire Me Now
            </a>
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
                  <p className="timeline__timeframe">Jan 2022 - Now</p>
                  <h3>Proyecto TRAVELPORT, Pasiona</h3>
                  <h5>Frontend Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    I contributed to the migration of applications from desktop
                    to web for one of the world's leading one of the world's
                    leading GDS platforms. Implemented implemented front-end
                    solutions with React.js, ES6, HTML5 and CSS3, ensuring
                    quality assurance with Jest and Testing Library. On the
                    back-end I developed microservices using Node.js and
                    GraphQL. We applied agile methodologies such as SAFe and
                    Agile, managing tasks using Jira and Azure DevOps, and using
                    tools like Git, Webpack, npm and yarn for integration and
                    development.
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Feb 2019 - May 2021</p>
                  <h3>TAPTAP Networks</h3>
                  <h5>FullStack Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Development of technological solutions to optimise digital
                    advertising campaigns through data analysis and advanced
                    targeting. I did front-end development with JavaScript using
                    Backbone and React, and back-end with Node.js, creating REST
                    APIs with Express and MongoDB. Continuous integration with
                    CircleCI and Docker.
                  </p>
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
                  <p>
                    Layout and front-end development for hotel entities, using
                    WordPress, Bootstrap and JavaScript. Implemented search
                    engines search engines on external websites and offered
                    technical support and UX improvements to UX improvements to
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Sept 2014 - April 2015</p>
                  <h3>UNIR, Universidad Internacional de la Rioja</h3>
                  <h5>Front-end designer & Web designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Design and development of landings and mailings for
                    university advertising campaigns. advertising campaigns for
                    the university. Creation and layout of pages for the
                    UNIR.NET corporate website using Bootstrap, Sass and
                    Compass.
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Apr 2013 - Jul 2014</p>
                  <h3>Gowex</h3>
                  <h5>Front-end developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>
                    Development with HTML5, CSS and JavaScript of WiFi portals
                    for public spaces, transport and cafés in cities such as
                    Paris, Dublin, Dubai, New York, San Francisco and Madrid,
                    Dublin, Dubai, New York, San Francisco and Madrid.
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Jun 2008 - Apr 2013</p>
                  <h3>
                    OPENFINANCE S.L, IDEUP!, IS CREATIVE STUDIO, TECSHELL, EL
                    PAÍS DIARIO, E-STRATEGIA
                  </h3>
                </div>
                <div className="timeline__desc">
                  <p>
                    Front-end design for various entities, combining branding,
                    product design, interactive brand design, product design,
                    interactive interfaces and animation. I participated in
                    projects focused on usability and user experience (UX).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
