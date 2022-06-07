import React from "react";

import "./PiePagina.css";

const PiePagina = () => {
  return (
    <>
      <div className="piepagina-container">
        <h1 className="title-piepagina">Infomacion de Contacto</h1>
        <p className="parrafo">
          Envíenos sus dudas, comentarios, solicitud de cotización, asesorías :
        </p>
        <div className="piepagina-content">
          <ul className="pie-content">
            <li>
              <h4>Telefono</h4> <span>(574)-3434092</span>
            </li>
            <li>
              <h4>Fax</h4> <span>(574)-3434092</span>
            </li>
            <li>
              <h4>Celular</h4> <span>(57) 301-4473344</span>
            </li>
            <li>
              <h4>Direccion</h4> <span>Medellin colombia</span>
            </li>
            <li>
              <h4>Email</h4>
              <span className="content-email">maya.ruben@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="copyrigth-container">
          <div className="copyrigth">
          <span>Envíe un mensaje a maya.ruben@gmail.com,  con preguntas o comentarios sobre este sitio Web.</span><br/>
          <span>Copyright&copy;  2007 Mecanio Ltda <br/> Última modificación: 4 de jnio de 2022 </span>
          </div>
          </div>

      </div>
    </>
  );
};

export default PiePagina;
