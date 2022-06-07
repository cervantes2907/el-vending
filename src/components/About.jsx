import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container_content_about">
      <h1 className="title-2">Somos Expertos En El Mercado De Vending</h1>
      <div className="about-container">
        <div className="about-img-content">
          <img
            className="about-img"
            src="https://phantom-elmundo.unidadeditorial.es/15a028f76e9c569d6f3b344bc331adf7/f/jpg/assets/multimedia/imagenes/2019/07/29/15644102909649.jpg"
            alt="vending"
            height="auto"
            width="400px"
          />
        </div>
        <div className="about-text-content">
          <p className="about-text">
            Somos una empresa de consultoría y tecnología especializada en el
            desarrollo de soluciones para el{" "}
            <span className="especial-text">Mercado de Vending</span> de
            Colombia con énfasis en modelamiento e impacto regulatorio.
            Desarrollamos mejores soluciones de acuerdo a las necesidades de
            nuestros clientes, permitiéndoles obtener mejores resultados y
            operar de forma más eficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
