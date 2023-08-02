import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <>
                <section className="services">
                    <div className="__container">
                        <div className="services_title section__title">
                            <img
                                src={'icon/services/title.png'}
                                alt=""
                                className="section__title-img"
                            />
                            <span className="section__title-title section__title-title-white">
                                services
                            </span>
                        </div>
                        <div className="services__wrap">
                            <div className="services__atention">
                                <h3 className="services__title title__h3">
                                    Pushing the boundaries of your potential
                                </h3>
                                <a href="#!" className="services__btn">
                                    Start a project
                                </a>
                            </div>
                            <div className="services__items">
                                <div className="services__item item__servs">
                                    <div className="item__servs-img">
                                        <img src={'icon/services/1.png'} alt="Branding" />
                                    </div>
                                    <h5 className="item__servs-title">Branding</h5>
                                    <p className="item__servs-text">
                                        Refresh your logo, revamp your website, and even your letterhead—
                                        develop a cohesive aesthetic for your brand.
                                    </p>
                                </div>
                                <div className="services__item item__servs">
                                    <div className="item__servs-img">
                                        <img src={'icon/services/2.png'} alt="Branding" />
                                    </div>
                                    <h5 className="item__servs-title">Packaging</h5>
                                    <p className="item__servs-text">
                                        Rethink labels, boxes, signage, and everything that'll help your
                                        product make a great first impression.
                                    </p>
                                </div>
                                <div className="services__item item__servs">
                                    <div className="item__servs-img">
                                        <img src={'icon/services/3.png'} alt="Branding" />
                                    </div>
                                    <h5 className="item__servs-title">Visual Aids</h5>
                                    <p className="item__servs-text">
                                        Make your point more convincingly with branded flyers, slides,
                                        catalogues, infographics.
                                    </p>
                                </div>
                                <div className="services__item item__servs">
                                    <div className="item__servs-img">
                                        <img src={'icon/services/4.png'} alt="Branding" />
                                    </div>
                                    <h5 className="item__servs-title">Memorabilia</h5>
                                    <p className="item__servs-text">
                                        Choose from easy, affordable options for merch like custom tees and
                                        sets of pins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
