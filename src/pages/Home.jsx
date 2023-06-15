import React, { useRef, useState, useEffect } from "react";

const Home = () => {
  const welcome = useRef();

  const [show, setShow] = useState(() => {
    const value = localStorage.getItem("show");

    return value === null ? "button-container" : localStorage.show;
  });

  const handleClick = () => {
    localStorage.setItem("show", "button-container no-show");
    setShow(localStorage.show);
  };

  useEffect(() => {
    localStorage.setItem("show", show);
  }, [show]);

  console.log(show);

  return (
    <>
      <div className={show} ref={welcome}>
        <div className="buttonHolder">
          <button
            className="closeBtn"
            title="Close"
            onClick={() => {
              handleClick();
            }}
          >
            <i className="fa-sharp fa-regular fa-circle-xmark"></i>
          </button>
          <h1 title="Welcome to Chaunies">WELCOME TO CHAUNIE'S</h1>
          <article>
            Feel free to navigate through the website and place your orders
            today!
          </article>
          <p>Click here to see our services</p>
          <a
            className="toServices"
            title="Services"
            href="chauniesServices.html"
            onClick={() => handleClick()}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      {/* <!-- Main Content --> */}
      <section className="main-area">
        {/* <!-- Greeting Section --> */}
        <div className="greeting-container">
          <h1>deliciously smooth</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, iure,
            voluptates non sint nemo dolorum quis impedit laudantium asperiores
            sequi distinctio quos voluptas iusto voluptate, nisi deleniti.
            Architecto placeat est, perspiciatis, ullam repellat, nostrum beatae
            fugit nobis tenetur itaque ad!
          </p>
        </div>
      </section>

      {/* <!-- Social Links --> */}
      <div className="socials-container">
        <ul className="socials">
          <li>
            <a
              title="Email"
              href="mailto:chaunies246@outlook.com ? subject=Ask Chaunie Anything "
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              title="Instagram"
              href="https://instagram.com/chaunies246?igshid=MTg0ZDhmNDA="
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a title="Whatsapp" href="wa.link/9mc4s6">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
