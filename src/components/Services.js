import React from "react";
import BlockTitle from "./BlockTitle";

import icon4 from "../assets/images/resources/encryp-128x.png";
import icon3 from "../assets/images/resources/crypto2-128x.png";
import icon2 from "../assets/images/resources/bitcoin-128x.png";
import icon1 from "../assets/images/resources/crypto-128x.png";



const Services = () => {
  return (
    <section className="sd-service" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          titleText={`Unleashing New Dimensions \n in Financial Services!`}/>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="sd-service__single">
              <div className="sd-service__inner">
                <div className="sd-service__circle"></div>
                <div className="sd-service__icon">
                <img
                alt="awesome"
                src={icon1}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                </div>
                <h3>Buy & Sell Crypto</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-service__single">
              <div className="sd-service__inner">
                <div className="sd-service__circle"></div>
                <div className="sd-service__icon">
                <img
                alt="awesome"
                src={icon2}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                </div>
                <h3>Pay with Crypto</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-service__single">
              <div className="sd-service__inner">
                <div className="sd-service__circle"></div>
                <div className="sd-service__icon">
                <img
                alt="awesome"
                src={icon3}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                </div>
                <h3>Reports & Analytics</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-service__single">
              <div className="sd-service__inner">
                <div className="sd-service__circle"></div>
                <div className="sd-service__icon">
                <img
                alt="awesome"
                src={icon4}
                className="wow fadeInUp img_icon"
                data-wow-duration="1500ms"
              />
                </div>
                <h3>Top Tier Security</h3>
                <p>Lorem ipsum is are many variations of pass majy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
