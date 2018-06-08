import App from './js/app.js';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App className={style.app}/>
  </BrowserRouter>,
  document.getElementById('root')
);
