import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const Component = (props) => {
  return (
    <h1>Hello from Root</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

