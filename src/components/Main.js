import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>  <div className="wrapper">
                    <section className="main">
                        <div className="__container">
                            <div className="main__wrap">
                                <h1 className="main__title">
                                    I design digital products that make an impact.
                                </h1>
                                <p className="main__text">
                                    Hi! I’m Alex, a product designer based in Oakland. I create
                                    user-friendly interfaces for fast-growing startups.
                                </p>
                                <a href="#!" className="main__btn">
                                    Hire me!
                                </a>
                                <div className="main__awwards awwards">
                                    <div className="awwards__img _ibg">
                                        <img src={'icon/main-icon.png'} alt="CUP" />
                                    </div>
                                    <div className="awwards__text">
                                        <p className="awwards__text-title">Independent Of The Year</p>
                                        <p className="awwards__text-subtitle">
                                            Annual Awards 2020 • awwwards.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>    
            </>
        )
    }
}
