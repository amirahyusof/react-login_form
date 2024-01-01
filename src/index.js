import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './LoginPage.js';
import reportWebVitals from './reportWebVitals';

const display = document.getElementById('root');

function App(){
  return(
    <div className='background-page'>
      <Page />
    </div>
  )
}

ReactDOM.render(<App />, display)


reportWebVitals();
