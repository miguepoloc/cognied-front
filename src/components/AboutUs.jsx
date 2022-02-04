import React from 'react';
import DigitalmenteProyectoImg from "../assets/img/digitalmente.jpg";
import "../assets/css/AboutUs.css"
const AboutUs = ({section}) => {
  return (
      <>
          <section id={section.id} >
              <div className="aboutUs">
                  <div className="container py-5">
                      <div className="row mb-2 p-5 mb-4 bg-white rounded-3 shadow-sm ">
                          <div className="col-md-9">
                              <div className="container-fluid py-5">
                                  <h1 className="display-5 fw-bold">
                                      Digitalmente
                                  </h1>
                                  <p className="col-md-11 fs-4">
                                      Using a series of utilities, you can
                                      create this jumbotron, just like the one
                                      in previous versions of Bootstrap. Check
                                      out the examples below for how you can
                                      remix and restyle it to your liking.
                                  </p>
                              </div>
                          </div>
                          <div className="col-md-3 py-4">
                              <img
                                  className="imageProject"
                                  src={DigitalmenteProyectoImg}
                              />
                          </div>
                      </div>
                      <div className="row align-items-md-stretch">
                          <div className="col-md-6">
                              <div className="h-100 p-5 text-white bg-dark rounded-3">
                                  <h2>Otro proyecto</h2>
                                  <p>
                                      Swap the background-color utility and add
                                      a `.text-*` color utility to mix up the
                                      jumbotron look. Then, mix and match with
                                      additional component themes and more.
                                  </p>
                                  <button
                                      className="btn btn-outline-light"
                                      type="button"
                                  >
                                      Example button
                                  </button>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="h-100 p-5 bg-light border rounded-3">
                                  <h2>Otro proyecto</h2>
                                  <p>
                                      Or, keep it light and add a border for
                                      some added definition to the boundaries of
                                      your content. Be sure to look under the
                                      hood at the source HTML here as we've
                                      adjusted the alignment and sizing of both
                                      column's content for equal-height.
                                  </p>
                                  <button
                                      className="btn btn-outline-secondary"
                                      type="button"
                                  >
                                      Example button
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                      fill="#FC8890"
                      fill-opacity="1"
                      d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                  ></path>
              </svg>
          </section>
      </>
  );
};

export default AboutUs;
