import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="__container">
                        <div className="footer__title section__title">
                            <img
                                src={'icon/services/title.png'}
                                alt=""
                                className="section__title-img"
                            />
                            <span className="section__title-title">contact</span>
                        </div>
                        <h2 className="footer__subtitle title">
                            Have something in mind? <span>Let's connect.</span>
                        </h2>
                        <div className="footer__nav navigation">
                            <div className="navigation__mail">
                                <a href="#!" className="navigation__mail">
                                    alexsmith@example.com
                                </a>
                            </div>
                            <div className="navigation__menu">
                                <a href="#!" className="navigation__menu-link">
                                    About
                                </a>
                                <a href="#!" className="navigation__menu-link">
                                    Shop
                                </a>
                                <a href="#!" className="navigation__menu-link">
                                    Blog
                                </a>
                                <a href="#!" className="navigation__menu-link">
                                    Contact
                                </a>
                                <a href="#!" className="navigation__menu-link">
                                    Work
                                </a>
                            </div>
                            <div className="navigation__social">
                                <a href="#!" className="navigation__social-link">
                                    Twitter
                                </a>
                                <a href="#!" className="navigation__social-link">
                                    LinkedIn
                                </a>
                                <a href="#!" className="navigation__social-link">
                                    Behance
                                </a>
                                <a href="#!" className="navigation__social-link">
                                    GitHub
                                </a>
                                <a href="#!" className="navigation__social-link">
                                    Dribbble
                                </a>
                            </div>
                            <form action="" className="navigation__form">
                                <div className="navigation__form-title">
                                    Subscribe to my weekly newsletter
                                </div>
                                <input type="search" name="" id="" />
                                <button type="submit" className="navigation__btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="footer__base">
                            <div className="footer__creator">
                                © Template by Sumit Hegde Sumit Hegde Webflow
                            </div>
                            <div className="footer__help">
                                <a href="#!">Style Guide /</a>
                                <a href="#!">Licenses /</a>
                                <a href="#!">Instructions /</a>
                                <a href="#!">Change Log</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
