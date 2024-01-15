import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="sd-pricing" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Plans"
          titleText={`Choose a Plan \n That Suits Your Needs`}
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#none"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Monthly
            </a>
          </li>
          <li>
            <div
              role="button"
              tabIndex="0"
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              onKeyDown={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </div>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#none"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              Annualy
            </a>
          </li>
        </ul>
        {plan === true ? (
          <div id="yearly">
            <Row>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Easy</p>
                    <h3>FREE</h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Essential</p>
                    <h3>$40<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Extra</p>
                    <h3>$90<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Everything</p>
                    <h3>$200<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Easy</p>
                    <h3>FREE</h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Essential</p>
                    <h3>$4<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Extra</p>
                    <h3>$9<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="sd-pricing__single">
                  <div className="sd-pricing__circle"></div>
                  <div className="sd-pricing__inner">
                    <p>Everything</p>
                    <h3>$19<sub>CAD</sub></h3>
                    <ul className="list-unstyled sd-pricing__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#none" className="sd-btn sd-pricing__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
