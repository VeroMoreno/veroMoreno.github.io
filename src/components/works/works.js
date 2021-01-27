import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <section id="works" className="s-works target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Portfolio</h3>
            <h1>See My Latest Projects.</h1>
            <p className="lead">These are some of the projects that I have been developing in which design, markup and application development prevail</p>
          </div>
        </div>
        <div className="row masonry-wrap">
          <div className="masonry">
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a target="_blank" href="https://veromoreno.github.io/meal-plan/" className="thumb-link" title="MealPlan Proyect!" data-size="1050x700">
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
                <a target="_blank" href="https://veromoreno.github.io/meal-plan/" className="item-folio__project-link" title="Project link">
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
                  <a target="_blank" href="http://veromoreno.com/finddel/" className="thumb-link" title="Finddel" data-size="1050x700">
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
                <a target="_blank" href="http://veromoreno.com/finddel/" className="item-folio__project-link" title="Project link">
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
    )
  }
}