import React from "react";
import "./Diseños.css";

const Diseños = () => {
  return (
    <div className="container">
      <h1 className="title-diseños">Nuestros Diseños</h1>
      <div className="container-diseños">
        <div className="content-text">
          <p className="diseños-text">
            Diseñamos sus máquinas a medida, tanto del producto como de su tipo,
            carcazas en acero de 3 mm de espesor, impenetrables en ambientes
            hostiles, carcazas plásticas, en acrilico, en lámina de acero
            inoxidable, Galvanizado.
          </p>
        </div>
        <div className="content-img-diseños">
        <img
          className="diseños-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwtHsQYdEy2_vyjJ8fkqR95uHSr9xbq7HQQ&usqp=CAU"
          alt="diseños"
          height="auto"
          width="500px"
        />
        </div>
      </div>
    </div>
  );
};

export default Diseños;
