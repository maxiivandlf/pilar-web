import React from 'react';
import './NotFound.css';
import svgReact from '../../../assets/404.jpeg';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='NotFoundContainer'>
      <p className='NotFoundTitle'>Opps!! Pagina no encontrada...</p>
      <img className='NotFoundImage' src={svgReact} alt='404 Not Found' />
      <button onClick={() => navigate('/')} className='NotFoundButton'>
        Ir al inicio
      </button>
    </div>
  );
}

export default NotFound;
