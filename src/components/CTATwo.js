import React from "react";
import BlockTitle from "./BlockTitle";

import icon1 from "../assets/images/resources/cta-2-icon-1-256x.png";
import icon2 from "../assets/images/resources/cta-2-icon-2-256x.png";

import CTAImage4 from "../assets/images/resources/cta-2-moc-1-2.png";


const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Features"
                titleText={`Unveiling Exclusive Crypto Features You Can't Find Anywhere Else!`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                  <img
                  alt="awesome"
                src={icon1}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                  </div>
                  <h3>
                  Seamless <br /> Crypto Transactions
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                  <img
                  alt="awesome"
                src={icon2}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                  </div>
                  <h3>
                  Crypto Educational Resources
                  </h3>
                </div>
              </div>
              <div className="cta-two__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply
                  dummy text of the printing laborum perspiciatis unde.
                </p>
              </div>
              <a href="#none" className="sd-btn cta-two__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={CTAImage4}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt="awesome post"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
