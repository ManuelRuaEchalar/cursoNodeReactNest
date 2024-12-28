// Importa React y ReactDOM desde un CDN o configuración local
import React from 'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js';

// Selecciona el elemento del DOM donde renderizar React
const appDomElement = document.getElementById('app');

// Crea el root de React
const root = ReactDOM.createRoot(appDomElement);

// Renderiza un contenido de ejemplo
root.render(React.createElement('div', null, 'Hola React'));
