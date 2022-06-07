
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Navegator from './components/Navegator'
import './App.css';
import Title from './components/Title';
import Post from './pages/Post';

function App() {
  return (

    <BrowserRouter>
        
        <Navegator />
        <br/> <br/> <br/> 
        <Title />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/productos" element={<ProductosPage/>}/>
        <Route path="/contacto" element={<ContactPage/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
