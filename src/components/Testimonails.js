import React, { Component } from 'react'

export default class Testimonails extends Component {
    render() {
        return (
            <>
                <section className="testimonials">
                    <div className="__container">
                        <div className="testimonials__title section__title">
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                            <span className="section__title-title mr">Testimonials</span>
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                        </div>
                        <h2 className="testimonials__subtitle title">
                            Hear it directly from my clients.
                        </h2>
                        <div className="testimonials__items">
                            <div className="testimonials__item rvw">
                                <div className="rvw__stars">
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                </div>
                                <p className="rvw__title">Highly professional</p>
                                <p className="rvw__comment">
                                    Alex was in control throughout the project. They delivered on the
                                    promised deadlines and we love the work they did!
                                </p>
                                <div className="rvw__autor">
                                    <div className="rvw__img">
                                        <img src={'icon/testimonials/1.png'} alt="autor" />
                                    </div>
                                    <div className="rvw__autor-desc">
                                        <p className="rvw__autor-name">Steve McQuillen</p>
                                        <p className="rvw__post">Marketing Manager, Vowels</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonials__item rvw">
                                <div className="rvw__stars">
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                    <img src={'icon/testimonials/star.png'} alt="" />
                                </div>
                                <p className="rvw__title">Creative and fearless</p>
                                <p className="rvw__comment">
                                    Working with Alex was interesting. He went above and beyond what I've
                                    asking for and provided such an amazing design for my mobile
                                    application.
                                </p>
                                <div className="rvw__autor">
                                    <div className="rvw__img">
                                        <img src={'icon/testimonials/2.png'} alt="autor" />
                                    </div>
                                    <div className="rvw__autor-desc">
                                        <p className="rvw__autor-name">Rebecca Smith</p>
                                        <p className="rvw__post">CEO, Consonants</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials__nav">
                            <a href="#!" className="testimonials__link">
                                <img
                                    src={'icon/testimonials/arrow-left.png'}
                                    alt="back"
                                    className="testimonials__arrow"
                                />
                            </a>
                            <a href="#!" className="testimonials__link">
                                <img
                                    src={'icon/testimonials/arrow-right.png'}
                                    alt="next"
                                    className="testimonials__arrow"
                                />
                            </a>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
