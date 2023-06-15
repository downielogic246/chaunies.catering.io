import React from "react";
import TopBtn from "../components/TopBtn";

const About = () => {
  return (
    <>
      <TopBtn />
      <section className="main-area">
        <h1 className="title">about us</h1>
        <hr />
        <article className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
          eligendi! Veniam debitis, vel illo dignissimos, cumque consequuntur
          quod fuga ad alias quasi atque aperiam, aliquid deleniti excepturi.
          Perspiciatis aperiam corporis rem doloremque, praesentium modi
          voluptate ipsum at nam labore atque eligendi alias impedit error
          magnam repellendus eveniet adipisci. Nostrum accusantium voluptatem ut
          amet ducimus vel eos eaque et soluta voluptate consequatur totam atque
          assumenda, tenetur voluptates debitis sapiente sed quaerat, beatae
          nobis repellat corrupti accusamus. Nulla temporibus aliquid
          voluptatibus autem adipisci, harum nemo enim officiis id illum
          distinctio repudiandae, qui sint, impedit facere eveniet voluptas
          quibusdam ab neque veniam magnam?
        </article>

        <h2>mission statement</h2>
        <article className="mission">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          quibusdam eaque necessitatibus quos repudiandae omnis molestiae facere
          sapiente laboriosam nulla? Optio voluptates amet nisi magnam beatae,
          saepe minima dolore tempore.
        </article>
        <div className="leadership">
          <h2>Management</h2>
          <img id="ceo" src="Photos/chaunies_2.jpg" alt="founder" />
          <h3>Chantal Downie</h3>
          <article className="roles">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            repudiandae.
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
