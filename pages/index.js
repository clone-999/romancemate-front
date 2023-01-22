import Banner from "./components/Banner";
import TopNav from "./components/TopNav";
import { baseUrl, fetchApi } from '../utils/fetchApi';
import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [weeklyTop, setWeeklyTop] = useState([]);
  const [homemade, setHomemade] = useState([]);
  const [show, setShow] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://www.eporner.com/api/v2/video/search/?query=teen&per_page=20&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json");
      setWeeklyTop(data?.videos)
      //console.log("weeklyTop", weeklyTop)
      const { data: homemadeData } = await axios.get("https://www.eporner.com/api/v2/video/search/?query=homemade&per_page=20&page=2&thumbsize=big&gay=1&lq=1&format=json");
      setHomemade(homemadeData?.videos)
    };
    fetchData();
  }, []);

  return (
    <>
      <TopNav />
      <main>
        <Banner handleShow={handleShow} setVideoUrl={setVideoUrl} />

        <section className="ucm-area ucm-bg2" style={{backgroundImage: "url(/assets/img/bg/ucm_bg02.jpg)"}}>
          <div className="container">
            <div className="row align-items-end mb-55">
              <div className="col-lg-6">
                <div className="section-title title-style-three text-center text-lg-left">
                  <span className="sub-title">ONLINE STREAMING</span>
                  <h2 className="title" style={{color: "white"}}>New Exciting Releases</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ucm-nav-wrap">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="tvShow-tab" data-toggle="tab" href="#tvShow" role="tab" aria-controls="tvShow" aria-selected="true">Porn Shows</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="movies-tab" data-toggle="tab" href="#movies" role="tab" aria-controls="movies" aria-selected="false">Get a Partner</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="anime-tab" data-toggle="tab" href="#anime" role="tab" aria-controls="anime" aria-selected="false">Porn Stars</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="tvShow" role="tabpanel" aria-labelledby="tvShow-tab">
                <div className="row movie-item-row">
                
                  {weeklyTop && weeklyTop.map((weekly) => (
                    <div key={uuidv4()} className="custom-col-">
                      <div className="movie-item movie-item-two">
                        <div className="movie-poster">
                          <img src={weekly.default_thumb.src} alt="" />
                          <ul className="overlay-btn">
                            <li>
                              <button className="popup-video btn" onClick={() => {
                                setVideoUrl(weekly.embed);
                                handleShow();
                              }}>Watch Now</button>
                            </li>
                            <li><a href="#" className="btn">Details</a></li>
                          </ul>
                        </div>
                        <div className="movie-content">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h5 className="title"><a href="#">{weekly.title}</a></h5>
                          <span className="rel">Views: {weekly.views}</span>
                          <div className="movie-content-bottom">
                            <ul>
                              <li className="tag">
                                <a href="#">HD</a>
                                <a href="#">English</a>
                              </li>
                              <li>
                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.5</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="gallery-area position-relative">
          <div className="gallery-bg"></div>
          <div className="container p-0 fix">
            <div className="row gallery-active">
              <div className="col-4">
                <div className="gallery-item">
                  <img src="/assets/img/images/gallery_01.jpeg" alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="gallery-item">
                  <img src="/assets/img/images/gallery_02.jpeg" alt="" />
                </div>
              </div>
              <div className="col-4">
                <div className="gallery-item">
                  <img src="/assets/img/images/gallery_03.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav"></div>
        </div>

        <section className="services-area services-bg-two" style={{backgroundImage: "url(/assets/img/bg/services_bg02.jpg)"}}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="services-img-wrap">
                  <img src="/assets/img/images/services_img02.png" alt="" />
                  <a href="/assets/img/images/services_img02.png" className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="services-content-wrap">
                  <div className="section-title mb-40">
                    <span className="sub-title">ONLINE STREAMING</span>
                    <h2 className="title" style={{color: "white"}}>Download Your Shows Watch Offline.</h2>
                  </div>
                    <div className="services-list">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="flaticon-television"></i>
                          </div>
                          <div className="content">
                            <h5 style={{color: "white"}}>Enjoy Exciting Porn Shows.</h5>
                            <p>Watch unlimited porn & get hooked to horny ladies around you.</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-video-camera"></i>
                          </div>
                          <div className="content">
                            <h5 style={{color: "white"}}>Watch Everywhere.</h5>
                            <p>Have the pleasure of satisfying yourself at every moment.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="top-rated-movie tr-movie-bg2" style={{backgroundImage: "url(/assets/img/bg/tr_movies_bg.jpg)"}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title title-style-three text-center mb-70">
                  <span className="sub-title">top home made</span>
                  <h2 className="title" style={{color: "white"}}>Watch Them Do It At Home</h2>
                </div>
              </div>
            </div>

            <div className="row movie-item-row">
              
              {homemade && homemade.map((madehome) => (
                <div key={uuidv4()} className="custom-col-">
                  <div className="movie-item movie-item-two">
                    <div className="movie-poster">
                      <img src={madehome.default_thumb.src} alt="" />
                      <ul className="overlay-btn">
                        <li>
                          <button className="popup-video btn" onClick={() => {
                            setVideoUrl(madehome.embed);
                            handleShow();
                          }}>Watch Now</button>
                        </li>
                        <li><a href="#" className="btn">Details</a></li>
                      </ul>
                    </div>
                    <div className="movie-content">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h5 className="title"><a href="#">{madehome.title}</a></h5>
                      <span className="rel">Views: {madehome.views}</span>
                      <div className="movie-content-bottom">
                        <ul>
                          <li className="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span className="like"><i className="fas fa-thumbs-up"></i> 3.5</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <Modal show={show} onHide={handleClose}>
          <iframe width="600" height="600" src={videoUrl} frameborder="1" allowfullscreen />
        </Modal>

      </main>

      <Footer />
    </>
  )
}

export default Home;
