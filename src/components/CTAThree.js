import React from "react";
import { Container } from "react-bootstrap";

import Cta3Shape1 from "../assets/images/shapes/cta-three-bg-1-1.png";
import Cta3Shape2 from "../assets/images/shapes/cta-three-bg-1-2.png";

const CTAThree = () => {
  return (
    <section className="cta-three">
      <img src={Cta3Shape1} className="cta-three__bg-1" alt="awesome post" />
      <img src={Cta3Shape2} className="cta-three__bg-2" alt="awesome post" />
      <Container className="text-center">
        <h3>
          Download KOHO Today & <br /> Experience Infinite Possibilities
        </h3>
        <div className="cta-three__btn-wrap">
          <a href="#none" className="cta-three__btn">
            <i className="fa fa-play"></i>
            <span>Get in</span>
            <b>Google Play</b>
          </a>
          <a href="#none" className="cta-three__btn">
            <i className="fab fa-apple"></i>
            <span>Get in</span>
            <b>Apple Store</b>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTAThree;
