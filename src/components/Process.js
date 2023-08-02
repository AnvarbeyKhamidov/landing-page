import React, { Component } from 'react'

export default class Process extends Component {
    render() {
        return (
            <>
                <section className="process">
                    <div className="__container">
                        <div className="process__title section__title">
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                            <span className="section__title-title">work</span>
                        </div>
                        <div className="process__title-box">
                            <h2 className="process__subtitle title">Getting started is easy.</h2>
                            <p className="process__title-text">
                                I've developed a structure that saves time (and money) while making the
                                most of our interactions.
                            </p>
                        </div>
                        <div className="process__items">
                            <div className="process__item progress">
                                <div className="progress__num">
                                    <span>[1]</span>
                                    <img src={'icon/process/arrows.png'} alt="next" />
                                </div>
                                <h5 className="progress__title">Listen</h5>
                                <p className="process__text">
                                    I get to know you and your company, your goals and expectations.
                                </p>
                            </div>
                            <div className="process__item progress">
                                <div className="progress__num">
                                    <span>[2]</span>
                                    <img src={'icon/process/arrows.png'} alt="next" />
                                </div>
                                <h5 className="progress__title">Ideate</h5>
                                <p className="process__text">
                                    I create a couple of pitches based on the project brief and goals.
                                </p>
                            </div>
                            <div className="process__item progress">
                                <div className="progress__num">
                                    <span>[3]</span>
                                </div>
                                <h5 className="progress__title">Execute</h5>
                                <p className="process__text">
                                    I work on the approved plan while keeping you in the loop until we
                                    have a finished project.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
