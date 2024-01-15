import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFact = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="sd-funfact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="sd-funfact__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 5000 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Downloads</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-funfact__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 6400 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Likes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-funfact__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 7000 : 0} />
                </VisibilitySensor>
              </h3>
              <p>5 Star Rating</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sd-funfact__single">
              <h3 className="counter">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8600 : 0} />
                </VisibilitySensor>
              </h3>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
