import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <>
                <section className="blog">
                    <div className="__container">
                        <div className="blog__title section__title">
                            <img src={'icon/about/title.png'} alt="" className="section__title-img" />
                            <span className="section__title-title">blog</span>
                        </div>
                        <div className="blog__title-box">
                            <h2 className="blog__subtitle title">
                                Words On Design, Tech &amp; Other Things I Love
                            </h2>
                            <a className="blog__btn" href="#!">
                                Explore all posts
                            </a>
                        </div>
                        <div className="blog__item posts">
                            <figure className="posts__figure">
                                <img className='posts__img' src={'img/blog/1.jpg'} alt="" />
                                <figcaption className="posts__cptn">
                                    <p className="posts__date">Design • 6 Oct, 2021</p>
                                    <h5 className="posts__title-cptn">On our obsession with circles</h5>
                                    <p className="post__text">
                                        Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                        laoreet. Nulla facilisi.
                                    </p>
                                </figcaption>
                            </figure>
                            <a className="posts__link" href="#!">
                                View post
                            </a>
                        </div>
                        <div className="blog__item posts">
                            <figure className="posts__figure">
                                <img className="posts__img" src={'img/blog/2.jpg'} alt="" />
                                <figcaption className="posts__cptn">
                                    <p className="posts__date">Design • 6 Oct, 2021</p>
                                    <h5 className="posts__title-cptn">
                                        From bullet points to Yayoi Kusama— On our obsession with circles
                                    </h5>
                                    <p className="post__text">
                                        Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                        laoreet. Nulla facilisi.
                                    </p>
                                </figcaption>
                            </figure>
                            <a className="posts__link" href="#!">
                                View post
                            </a>
                        </div>
                        <div className="blog__item posts">
                            <figure className="posts__figure">
                                <img className="posts__img" src={'img/blog/3.jpg'} alt="" />
                                <figcaption className="posts__cptn">
                                    <p className="posts__date">Technology • 6 Oct, 2021</p>
                                    <h5 className="posts__title-cptn">
                                        It's a jungle out there for gig workers
                                    </h5>
                                    <p className="post__text">
                                        Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                                        laoreet. Nulla facilisi.
                                    </p>
                                </figcaption>
                            </figure>
                            <a className="posts__link" href="#!">
                                View post
                            </a>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
