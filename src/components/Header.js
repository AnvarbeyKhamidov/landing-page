import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
            <div className="wrapper">
                <header className="header">
                    <div className="__container">
                        <div className="header__wrap">
                            <div className="header__logo">
                                <img src={"icon/head-logo-full.png"} alt="LOGO" />
                            </div>
                            <nav className="header__nav">
                                <input
                                    type="checkbox"
                                    name="menu"
                                    id="header__menu"
                                    className="header__menu"
                                />
                                <span />
                                <label htmlFor="header__menu" className="header__menu">
                                    MENU
                                </label>
                                <ul>
                                    <li className="header__list">
                                        <a href="#!" className="header__link">
                                            Work
                                        </a>
                                    </li>
                                    <li className="header__list">
                                        <a href="#!" className="header__link">
                                            About
                                        </a>
                                    </li>
                                    <li className="header__list">
                                        <a href="#!" className="header__link">
                                            Shop
                                        </a>
                                    </li>
                                    <li className="header__list">
                                        <a href="#!" className="header__link">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="header__list">
                                        <a href="#!" className="header__link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__shop shop__header">
                                <a href="#!" className="shop__header_bag">
                                    Cart (0)
                                </a>
                                <a href="#!" class="shop__header_icon"></a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            </>
        )
    }
}

