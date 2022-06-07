
import './Formulario.css'
import { Form, Input, Button } from 'antd';


 
const Formulario = () => {


    
  return (  
      
   <>
    <div className="parrafo-info">
       <div className='contacto_title_container'>
       <h2 className="title-contacto">Contactenos</h2>
       </div>
        <p className="content__text">Díganos qué piensa acerca de nuestro sitio Web, compañía, productos o servicios. Si incluye sus datos, podremos ponernos en contacto con usted en caso de que tengamos alguna pregunta.</p>
        <div className="content-form">
       <Form  className="form-container">
        <Form.Item className="item"  label="Nombre">
          <Input className="nombre" placeholder="  Alfonso bolaños acosta" type="text"/>
        </Form.Item>
        <Form.Item  label="Email">
          <Input className="email" placeholder="  alfonso3021@gmail.com" type="email"/>
        </Form.Item>
        <Form.Item label="Compañía">
          <Input className="web" placeholder="  www.bolaños.SA.com" type="text"/>
        </Form.Item>
        <Form.Item label="Dirección">
          <Input className="direccion" placeholder="  cll 34D #117 Barranquilla Atlantico" type="text"/>
        </Form.Item>
        <Form.Item label="Teléfono">
          <Input className="telefono" placeholder="  319640325" type="text"/>
        </Form.Item>
        <Form.Item label="Fax">
          <Input className="fax" placeholder="  9023527" type="text"/>
        </Form.Item>
        <Form.Item  label="Comentarios">
          <Input.TextArea className="comentario" placeholder="  Escriba un comentario" type="text"/>
        </Form.Item>
        <Form.Item >
          <Button className="submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
        </div>
   </>
);
};

export default Formulario
