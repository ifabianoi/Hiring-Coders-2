import React, { useState } from 'react';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const Principal = () => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  return (
    <section className="section center-content">
      <div className="container-sm">
        <div className="section-inner">
          <div className="section-content">
          <h3 className="mt-0 mb-16">
              <span className="text-color-primary">GAMA EXPERIENCE (NANODEGREE)</span>
            </h3>
            <h1 className="mt-0 mb-16">
              DEV FULL STACK
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32">
                     Sem enrolação, esse é o curso que vai te fazer arranjar um trampo na área!
              </p>
            </div> 
          </div>
          <div className="section-figure illustration-element-01">
            <a
              data-video="https://www.youtube.com/embed/ENvz3s1d-gU?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Vídeo Gama Academy"
                width={500}
                height={400} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/ENvz3s1d-gU?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

export default Principal;