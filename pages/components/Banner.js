import React from 'react'

function Banner({handleShow, setVideoUrl}) {
  return (
    <section className="slider-area slider-bg" style={{backgroundImage: "url(/assets/img/banner/s_slider_bg.jpg)" }} >
        <div className="slider-active">
            <div className="slider-item">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="slider-img text-center text-lg-right">
                                <img src="/assets/img/banner/slider_img03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h6 className="sub-title">RomanceMate</h6>
                                <h2 className="title" style={{color: "white"}}>Unlimited <span>Sex Mates</span>, Porn Shows, & More.</h2>
                                <div className="banner-meta">
                                    <ul>
                                        <li className="quality">
                                            <span>Pg 18</span>
                                            <span>hd</span>
                                        </li>
                                        <li className="category">
                                            <a href="#">Romance,</a>
                                            <a href="#">Exotics</a>
                                        </li>
                                        <li className="release-time">
                                            <span><i className="far fa-calendar-alt"></i> 2023</span>
                                            <span><i className="far fa-clock"></i> 24 / 7</span>
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={() => {
                                    setVideoUrl('https://www.eporner.com/embed/hOFmu0rywqW/');
                                    handleShow()
                                }} className="banner-btn btn popup-video"><i className="fas fa-play"></i> Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner