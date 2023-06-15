import React from "react";
import "../css/services.css";
import TopBtn from "../components/TopBtn";

const Services = () => {
  return (
    <>
      <TopBtn />
      {/* <!-- Main Area --> */}
      <div className="main-area">
        {/* <!-- Services Message --> */}
        <section className="message">
          <h1>services</h1>
          <article>
            here are events in which we cater
            <ul>
              <li>
                <a href="#wedding">
                  <i className="fa-solid fa-arrow-right"></i>
                  Weddings
                </a>
              </li>
              <li>
                <a href="#parties">
                  <i className="fa-solid fa-arrow-right"></i>
                  Parties
                </a>
              </li>
              <li>
                <a href="#corporate_events">
                  <i className="fa-solid fa-arrow-right"></i>
                  Corporate Events
                </a>
              </li>
            </ul>
          </article>
        </section>

        {/* <!-- Services --> */}
        <div id="wedding" className="service-1">
          <div
            className="title"
            style={{ backgroundImage: "url(../Photos/wedding.jpg)" }}
          >
            <h1>Weddings</h1>
          </div>
          <div className="desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              autem laudantium voluptatum itaque sit debitis, nam, officiis
              maiores blanditiis quidem amet ipsa nobis quisquam ullam obcaecati
              dolorum quo ducimus vel!
            </p>
          </div>
        </div>
        <div id="parties" className="service-2">
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eveniet, expedita reiciendis deleniti ipsa beatae maxime
              voluptates reprehenderit earum quo eius repellat non quasi
              corrupti. Enim earum dicta incidunt assumenda.
            </p>
          </div>
          <div
            className="title"
            style={{ backgroundImage: "url(../Photos/party.jpg)" }}
          >
            <h1>Parties</h1>
          </div>
        </div>
        <div id="corporate_events" className="service-3">
          <div
            className="title"
            style={{ backgroundImage: "url(Photos/corporate_events.jpg)" }}
          >
            <h1>Corporate Events</h1>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem ad laboriosam necessitatibus temporibus, excepturi
              maiores itaque quae repellendus unde cupiditate eligendi culpa
              blanditiis cum possimus officia ipsum nulla dignissimos! Deleniti.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
