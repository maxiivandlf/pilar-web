import React from 'react';
import './NotFound.css';
import svgReact from '../../../assets/404.jpeg';

function NotFound() {
  return (
    <div className='NotFoundContainer'>
      <p className='NotFoundTitle'>Opps!! Pagina no encontrada...</p>
      <img className='NotFoundImage' src={svgReact} alt='404 Not Found' />
      <button
        onClick={() => (window.location.href = '/')}
        className='NotFoundButton'
      >
        Ir al inicio
      </button>
    </div>
  );
}

export default NotFound;
