import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <>
                <section className="work">
                    <div className="__container">
                        <div className="work__wrap">
                            <div className="work__title section__title">
                                <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                                <span className="section__title-title">work</span>
                            </div>
                            <h2 className="work__subtitle title">
                                Bringing stellar results for every client.
                            </h2>
                            <div className="work__items">
                                <div className="work__items-double">
                                    <figure className="work__item work__item-small">
                                        <img src={'img/work/1.jpg'} alt="Maize Website Design" />
                                        <figcaption>
                                            <h2 className="work__item-title">Maize Website Design</h2>
                                            <p className="work__item-text">
                                                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                                laoreet. Nulla facilisi.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    <figure className="work__item work__item-midlde">
                                        <img src={'img/work/2.jpg'} alt="Maize Website Design" />
                                        <figcaption>
                                            <h2 className="work__item-title">Datadash Product Design</h2>
                                            <p className="work__item-text">
                                                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                                laoreet. Nulla facilisi.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <figure className="work__item work__item-big">
                                    <img src={'img/work/3.jpg'} alt="Maize Website Design" />
                                    <figcaption>
                                        <h2 className="work__item-title">Joggr Website Design</h2>
                                        <p className="work__item-text">
                                            Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                            laoreet. Nulla facilisi.
                                        </p>
                                    </figcaption>
                                </figure>
                                <div className="work__items-double">
                                    <figure className="work__item work__item-midlde">
                                        <img src={'img/work/4.jpg'} alt="Maize Website Design" />
                                        <figcaption>
                                            <h2 className="work__item-title">Otsuka Pharmaceutical</h2>
                                            <p className="work__item-text">
                                                Partnering with healthcare researchers to improve patient
                                                communications and experience.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    <figure className="work__item work__item-small">
                                        <img src={'img/work/5.jpg'} alt="Maize Website Design" />
                                        <figcaption>
                                            <h2 className="work__item-title">Origin UI/UX Design</h2>
                                            <p className="work__item-text">
                                                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                                laoreet. Nulla facilisi.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <a className="work__btn" href="#!">
                                view all projects
                            </a>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
