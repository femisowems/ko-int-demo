import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerMoc from "../assets/images/resources/banner-moc-1-5.png";

import BannerBG2 from "../assets/images/resources/banner-image-1-3.png";


const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const openModal = () => {
    setOpen({
      isOpen: true
    });
  };

  return (
    <section className="sd-banner" id="home">
      <img
        src={BannerShape}
        className="sd-banner__bg-shape-1"
        alt="awesome post"
      />
      <div
        className="sd-banner__bg"
        style={{ backgroundImage: `url(${BannerBG2})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="oHRNrgDIJfo"
          onClose={() => setOpen({ isOpen: false })}
        />  
        <div
          onClick={openModal}
          onKeyDown={openModal}
          role="button"
          tabIndex="0"
          className="sd-banner__video video-popup"
        >
          <i className="fa fa-play"></i>
        </div>
        <div className="sd-banner__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt="awesome post"
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="sd-banner__content">
              <form
                className="sd-banner__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Enter your Email address" />
                <button type="submit" className="sd-btn sd-banner__mc-btn">
                  <span>Download</span>
                </button>
              </form>
              <div className="mc-form__response"></div>
              <h3>
              Bridging Your Finances & <br /> Crypto, <br />Seamlessly.
              </h3>
              <p>
              Duis aute irure dolor in reprehenderit in voluptate < br/> velit esse cillum dolore eu fugiat nulla pariatur. < br/> Lorem Ipsum is simply dummy text of the printing.
              </p>
              <a href="#none" className="sd-btn sd-banner__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
