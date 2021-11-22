import React, { Component } from 'react';

export default class header extends Component {

  state = {
    data: []
}

  componentDidMount() {
    const headers = {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      }
    // https://api.github.com/users/veromoreno/repos
    return fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=veromoreno', headers)
    .then((res) => res.json())
    .then(githubData => {
        this.setState({ data: githubData });
    })
    .catch((error) => {
      console.error('error', error);
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <section id="github-works" className="s-testimonials target-section">
        <div className="row section-intro">
          <div className="col-full">
          <div className="col-full">
              <h3>Github</h3>
              <h1>See my last Projects.</h1>
            </div>
      <ul className="githubList">
        {this.state.data.map((data) => (
          <a rel="noreferrer" target="_blank" href={data.link}>
              <li className="githubPinned" key={data.id}>
                <div className="d-flex">
                  <div className="pinned-item">
                <p>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo mr-1 color-fg-muted">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                  </svg>{data.repo}</p>
                <p>{data.description}</p>
                <p>{data.language}</p>
                </div>
                </div>
              </li>
            </a>
            ))}
        </ul>
        <a className="btn btn--primary" href="https://github.com/veroMoreno" rel="noreferrer" target="_blank"><i className="im im-github" aria-hidden="true" />Follow me on Github</a>
        </div></div>
        </section>
        <section id="works" className="s-works target-section">
          <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full">
              <h3>Portfolio</h3>
              <h1>See more Projects.</h1>
              <p className="lead">These are some of the projects that I have been developing in which design, markup and application development prevail</p>
            </div>
          </div>
          <div className="row masonry-wrap">
            <div className="masonry">
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a rel="noreferrer" target="_blank" href="https://veromoreno.github.io/meal-plan/" className="thumb-link" title="MealPlan Proyect!" data-size="1050x700">
                      <img src="images/portfolio/mealplan.png" srcSet="images/portfolio/mealplan.png 1x, images/portfolio/mealplan@2x.png 2x" alt="mealPlan!"/>
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                    MealPlan!
                    </h3>
                    <p className="item-folio__cat">
                      REACT Hooks Proyect
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" href="https://veromoreno.github.io/meal-plan/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </div>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}

              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a rel="noreferrer" target="_blank" href="http://veromoreno.com/finddel/" className="thumb-link" title="Finddel" data-size="1050x700">
                      <img src="images/portfolio/finddel.png" srcSet="images/portfolio/finddel.png 1x, images/portfolio/finddel.png 2x" />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Finddel!
                    </h3>
                    <p className="item-folio__cat">
                      Javascript + PHP + SQL
                    </p>
                  </div>
                  <a rel="noreferrer" target="_blank" href="http://veromoreno.com/finddel/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </div>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank" href="ihttps://www.veromoreno.com" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/oldportfolio.png" srcSet="images/portfolio/oldportfolio.png 1x, images/portfolio/oldportfolio.png 2x" />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      VeroMoreno.com
                    </h3>
                    <p className="item-folio__cat">
                      HTML5 + CSS3 Old Portfolio
                    </p>
                  </div>
                  <a target="_blank" href="https://www.veromoreno.com" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank"  href="https://www.altafullamarhotel.com/" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/altafulla.png" srcSet="images/portfolio/altafulla.png 1x, images/portfolio/altafulla.png 2x"  />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Altafulla Mar Hotel
                    </h3>
                    <p className="item-folio__cat">
                      HTML5, CSS3, JQuery + Wordpress
                    </p>
                  </div>
                  <a target="_blank" href="https://www.altafullamarhotel.com/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank"  href="https://www.hotelvictoria4.com/" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/victoria4.png" srcSet="images/portfolio/victoria4.png 1x, images/portfolio/victoria4.png 2x"  />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Hotel Victoria 4
                    </h3>
                    <p className="item-folio__cat">
                      HTML5, CSS3, JQuery + Wordpress
                    </p>
                  </div>
                  <a target="_blank" href="https://www.hotelvictoria4.com/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank"  href="https://www.cangalvany.com/" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/can.png" srcSet="images/portfolio/can.png 1x, images/portfolio/can.png 2x"  />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Can Galvany
                    </h3>
                    <p className="item-folio__cat">
                        HTML5, CSS3, JQuery + Wordpress
                    </p>
                  </div>
                  <a target="_blank" href="https://www.cangalvany.com/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank"  href="https://veromoreno.com/work/asustaninios/" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/asus.png" srcSet="images/portfolio/asus.png 1x, images/portfolio/asus.png 2x" />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Asustaniños
                    </h3>
                    <p className="item-folio__cat">
                      Action Script 3
                    </p>
                  </div>
                  <a target="_blank" href="https://veromoreno.com/work/asustaninios/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
              <div className="masonry__brick">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a target="_blank"  href="https://veromoreno.com/work/arcanoid/" className="thumb-link" data-size="1050x700">
                      <img src="images/portfolio/archa.png" srcSet="images/portfolio/archa.png 1x, images/portfolio/archa.png 2x"  />
                      <span className="shadow-overlay" />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      Archanoid
                    </h3>
                    <p className="item-folio__cat">
                    Action Script 3
                    </p>
                  </div>
                  <a target="_blank" href="https://veromoreno.com/work/arcanoid/" className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>
                  <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                  </span>
                </div> {/* end item-folio */}
              </div> {/* end masonry__brick */}
            </div>
          </div> {/* end masonry */}
        </section>
      </>
    )
  }
}