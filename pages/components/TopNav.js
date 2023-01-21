import React from 'react';
import Link from 'next/link';

function TopNav() {
  return (
    <header className="header-style-two">
        <div className="header-top-wrap">
            <div className="container custom-container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-none d-md-block">
                        <div className="header-top-subs">
                            <p>RomanceMate One Month Free <span>Subscription !</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-top-link">
                            <ul className="quick-link">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">FAQS</a></li>
                            </ul>
                            <ul className="header-social">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="sticky-header" className="menu-area">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav show">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><a href="#">Home</a></li>
                                    </ul>
                                </div>

                                <div className="header-action d-none d-md-block">
                                    <ul>
                                        <li className="d-none d-xl-block">
                                            <div className="footer-search">
                                                <form action="#">
                                                    <input type="text" placeholder="Find Favorite sex tapes" />
                                                    <button><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="header-lang">
                                            <form action="#">
                                                <div className="icon"><i className="flaticon-globe"></i></div>
                                                <select id="lang-dropdown">
                                                    <option value="">En</option>
                                                    <option value="">Au</option>
                                                    <option value="">AR</option>
                                                    <option value="">TU</option>
                                                </select>
                                            </form>
                                        </li>
                                        <li className="header-btn"><a href="#" className="btn">Sign In</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="mobile-menu">
                            <div className="close-btn"><i className="fas fa-times"></i></div>

                            <nav className="menu-box">
                                <div className="nav-logo"><Link href="/"><img src="/assets/img/logo/logo.png" alt="" title="" /></Link>
                                </div>
                                <div className="menu-outer">
                                </div>
                                <div className="social-links">
                                    <ul className="clearfix">
                                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                        <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="menu-backdrop"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default TopNav