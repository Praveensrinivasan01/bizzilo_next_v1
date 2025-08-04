'use client';
import React from 'react'
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useState, useRef } from "react";

const Testimonials = () => {
      const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
      
            <section className='testimonials_sec'>
              <div className="sectionheader">
                <h2 className='textalign_center'>Testimonials</h2>
              </div>
              <div className='testimonialsmapframe'>
                <div className='container height100per'>
                  <div className='threeRowMap'>
                    <div className='topRow'>
                      <div>
                        <div className='profiledp videoReview'>
                          <img src="/assets/images/sathish.png" alt='sathish' />
                        </div>
                      </div>
      
                      <div ref={ref}>
                        <div className='profiledp' >
                          <button onClick={handleClick} className='emptyBtn'>
                            <img src="/assets/images/pavi.png" alt='Pavidp' />
                          </button>
                          <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref}
                            containerPadding={20}
                          >
                            <Popover id="popover-contained">
                              <Popover.Body>
                                <div className="custom_tooltiptext">
                                  <h4>Ananth</h4>
                                  <h5>DIRECTOR</h5>
                                  <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                                </div>
                              </Popover.Body>
                            </Popover>
                          </Overlay>
                        </div>
                      </div>
      
                      <div>
                        <div className='userIconProfile'>
                          <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                        </div>
                      </div>
      
      
                      <div ref={ref}>
                        <div className='profiledp'>
                          <button onClick={handleClick} className='emptyBtn'>
                            <img src="/assets/images/praveen.png" alt='Praveendp' />
                          </button>
                          <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref}
                            containerPadding={20}
                          >
                            <Popover id="popover-contained">
                              <Popover.Body>
                                <div className="custom_tooltiptext">
                                  <h4>Ananth</h4>
                                  <h5>DIRECTOR</h5>
                                  <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                                </div>
                              </Popover.Body>
                            </Popover>
                          </Overlay>
                        </div>
                      </div>
      
      
                      <div>
                        <div className='emptyDp'></div>
                      </div>
                      <div>
                        <div className='emptyDp'></div>
                      </div>
                    </div>
      
                    <div className='centerRow'>
                      <div>
                        <h3>Join us to begin <br className='brHideOnMobile' /> your journey</h3>
                      </div>
                    </div>
      
      
                    <div className='bottomRow'>
      
      
                      <div>
                        <div className='emptyDp'></div>
                      </div>
                      <div >
                        <div ref={ref}>
                          <div className='profiledp'>
                            <button onClick={handleClick} className='emptyBtn'>
                              <img src="/assets/images/saravana.png" alt='Saravanadp' />
                            </button>
      
      
                            <Overlay
                              show={show}
                              target={target}
                              placement="bottom"
                              container={ref}
                              containerPadding={20}
                            >
                              <Popover id="popover-contained">
                                <Popover.Body>
                                  <div className="custom_tooltiptext">
                                    <h4>Ananth</h4>
                                    <h5>DIRECTOR</h5>
                                    <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                                  </div>
                                </Popover.Body>
                              </Popover>
                            </Overlay>
      
      
                          </div>
                        </div>
                        <div ref={ref}>
                          <div className='profiledp'>
                            <button onClick={handleClick} className='emptyBtn'>
                              <img src="/assets/images/hema.png" alt='Hemadp' />
                            </button>
      
                            <Overlay
                              show={show}
                              target={target}
                              placement="bottom"
                              container={ref}
                              containerPadding={20}
                            >
                              <Popover id="popover-contained">
                                <Popover.Body>
                                  <div className="custom_tooltiptext">
                                    <h4>Ananth</h4>
                                    <h5>DIRECTOR</h5>
                                    <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                                  </div>
                                </Popover.Body>
                              </Popover>
                            </Overlay>
      
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
      
                </div>
              </div>
            </section>
  )
}

export default Testimonials