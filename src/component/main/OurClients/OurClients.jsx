import React from "react";
import { Link } from "react-router-dom";
import "./OurClients.css";

export default function OurClients() {
  return (
    <>
      <section
        className="our-clients"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: "url('images/ourclients_bg.png')",
        }}
      >
        <div className="container">
          <div className="our-clients__wrapper">
            <div
              className="our-clients__title"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h2>Our Clients</h2>
            </div>
            <div className="our-clients__content">
              <div className="our-clients__content__wrapper">
                <div className="our-clients__content__list">
                  <div className="our-clients__content__list__wrapper">
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="600"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_1.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_2.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_3.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_4.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="1800"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_5.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="our-clients__content__list__item"
                      data-aos="fade-right"
                      data-aos-duration="2100"
                    >
                      <Link>
                        <div className="our-clients__content__list__item__wrapper">
                          <div className="our-clients__content__list__item__icon">
                            <picture>
                              <img src="images/ourclients_6.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="our-clients__content__img"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <picture>
                    <img
                      src="images/ourclients_hand.png"
                      alt="customer services"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
