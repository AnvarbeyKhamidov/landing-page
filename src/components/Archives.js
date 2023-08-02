import React, { Component } from 'react'

export default class Archives extends Component {
    render() {
        return (
            <>
                <section className="achievs">
                    <div className="__container">
                        <div className="achievs__title section__title">
                            <img src="icon/about/title.png" alt="" className="section__title-img" />
                            <span className="section__title-title">about</span>
                        </div>
                        <div className="achievs__wrap">
                            <div className="achievs__review rvw">
                                <div className="rvw__stars">
                                    <img src="icon/about/star.png" alt="" />
                                    <img src="icon/about/star.png" alt="" />
                                    <img src="icon/about/star.png" alt="" />
                                    <img src="icon/about/star.png" alt="" />
                                    <img src="icon/about/star.png" alt="" />
                                </div>
                                <p className="rvw__comment">
                                    Working with Alex was interesting. He went above and beyond what I've
                                    asking for and provided such an amazing design for my mobile
                                    application.
                                </p>
                                <div className="rvw__autor">
                                    <div className="rvw__img">
                                        <img src="icon/about/autor.jpg" alt="autor" />
                                    </div>
                                    <div className="rvw__autor-desc">
                                        <p className="rvw__autor-name">Steve McQuillen</p>
                                        <p className="rvw__post">CEO @ Vencortex</p>
                                    </div>
                                </div>
                            </div>
                            <div className="achievs__item achiev">
                                <h3 className="achiev__title title__h3">
                                    Trusted by the fastest growing digital startups
                                </h3>
                                <div className="achiev__achievs">
                                    <div className="achiev__exp">
                                        <div className="achiev__num">7 +</div>
                                        <p className="achiev__text">Years of experience</p>
                                    </div>
                                    <div className="achiev__proj">
                                        <div className="achiev__num">50 +</div>
                                        <p className="achiev__text">Projects completed</p>
                                    </div>
                                    <div className="achiev__client">
                                        <div className="achiev__num">30 +</div>
                                        <p className="achiev__text">Happy clients</p>
                                    </div>
                                </div>
                                <div className="achiev__logos">
                                    <img
                                        src="icon/about/1.png"
                                        alt="LOGO"
                                        className="achiev__logos-item"
                                    />
                                    <img
                                        src="icon/about/2.png"
                                        alt="LOGO"
                                        className="achiev__logos-item"
                                    />
                                    <img
                                        src="icon/about/3.png"
                                        alt="LOGO"
                                        className="achiev__logos-item"
                                    />
                                    <img
                                        src="icon/about/4.png"
                                        alt="LOGO"
                                        className="achiev__logos-item"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
