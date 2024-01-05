import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './LoginPage.js';
import reportWebVitals from './reportWebVitals';

const display = document.getElementById('root');
const root = ReactDOM.createRoot(display)

function App(){
  return(
    <div className='background-page'>
      <Page />
    </div>
  )
}

root.render(<App />)


reportWebVitals();
