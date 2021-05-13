import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowerRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowerRouter>
      <App />
    </BrowerRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
