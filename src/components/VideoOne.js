import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import BlockTitle from "./BlockTitle";
import videoBG from "../assets/images/resources/video-bg-2-1.jpg";

const VideoOne = () => {
  const [open, setOpen] = useState({
    isOpen: false
  });
  const openModal = (e) => {
    e.preventDefault();
    setOpen({
      isOpen: true
    });
  };
  return (
    <section className="sd-video">
      <div
        className="container-fluid"
        style={{ backgroundImage: `url(${videoBG})` }}
      >
        <div
          className="sd-video__content wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <BlockTitle
            textAlign="left"
            paraText="Testimonial"
            titleText={`Don’t just \n take our \n word for it`}
          />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="oHRNrgDIJfo"
          onClose={() => setOpen({ isOpen: false })}
        />
        <a
          href="#none"
          onClick={openModal}
          className="sd-video__btn video-popup"
        >
          <i className="fa fa-play"></i>
        </a>
      </div>
    </section>
  );
};
export default VideoOne;
