import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
            <>
                <section className="shop">
                    <div className="__container">
                        <div className="shop__title section__title">
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                            <span className="section__title-title mr">shop</span>
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                        </div>
                        <h2 className="shop__subtitle title">In a rush?</h2>
                        <h2 className="shop__subtitle title">Shop ready designs here.</h2>
                        <div className="shop__items">
                            <div className="shop__item">
                                <div className="shop__img">
                                    <img src={'img/shop/1.jpg'} alt="Ergonomic Frozen Pants" />
                                </div>
                                <h5 className="shop__about">Ergonomic Frozen Pants</h5>
                                <p className="shop__text">In et consequ</p>
                            </div>
                            <div className="shop__item">
                                <div className="shop__img">
                                    <img src={'img/shop/2.jpg'} alt="Handmade Fresh Bike" />
                                </div>
                                <h5 className="shop__about">Handmade Fresh Bike</h5>
                                <p className="shop__text">Qui in facere</p>
                            </div>
                            <div className="shop__item">
                                <div className="shop__img">
                                    <img src={'img/shop/3.jpg'} alt="Small Soft Pizza" />
                                </div>
                                <h5 className="shop__about">Small Soft Pizza</h5>
                                <p className="shop__text">Aspernatur expli</p>
                            </div>
                        </div>
                        <a className="shop__link" href="#!">
                            View all products
                        </a>
                    </div>
                </section>

            </>
        )
    }
}
