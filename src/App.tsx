import React from 'react';
import Routes from './routes';

// Standard files
import './styles/reset.css';
import HeaderGeralElement from './partials/headerGeralElement';

function App() {
  return (
    <>
      <HeaderGeralElement />
      <Routes />
    </>
  );
}

export default App;
