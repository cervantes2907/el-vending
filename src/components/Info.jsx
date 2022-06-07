import React from 'react'
import './Info.css';

const Info = () => {
  return (
    <div className='general_info'>
    <h1 className="title-info-title"> Productos servicios  que se pueden vender</h1>
       <div className="info-container">
         <div className="info-productos">
            <h2 className="title-info">Productos</h2>
            <div className="text-content-productos">
            <p className='text-info-productos'>
               Entre los productos que se pueden vender podemos encontrar:
               Bebidas Frías y Calientes, Snacks, Dulces, Medicamentos,
               Preservativos, Elementos de Aseo, Comidas, Combustibles, Tarjetas telefónicas,
               loterías, entre muchos otros.<br/> <span className="especial-info">SU PRODUCTO TAMBIÉN PODRÍA VENDERSE EN UNA MÁQUINA!
               PREGÚNTANOS Y TE SORPRENDERÁS. </span> 
             </p>
            </div>
         </div>
         <div className="info-servicios">
            <h2 className="title-info">Servicios</h2>
            <div className="text-content-servicios">
            <p className="text-info">No sólo productos se pueden vender en máquinas,
              también se pueden vender servicios como:
              Maquinas de autopago de Servicios públicos, Multas de bibliotecas,
              Impuestos, Peajes, y cualquier otro servicio que implique un <span className="especial-info">RECAUDO</span> y
              un comprobante de pago.  Cuotas moderadoras de salud, 
              Boletería de eventos, <br/> 
              Adicionalmente, pueden comercializarse servicios
              como el llenado y calibración de llantas, Control de agua para lavado,
              Servicios públicos prepagados, <span className="especial-info">SU TESORERÍA </span>
              puede prestar el servicio 24 horas con nuestras máquinas a bajísimos costos.
              </p>
            </div>
         </div>
       </div>

    </div>
  )
    
}

export default Info
