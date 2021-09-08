import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css'
import './Css/Header.css'
import './Css/Home.css'
import './Css/Footer.css'
import './Css/Projects.css'
import './Css/About.css'
import './Css/Modal.css'
import './Css/Sidebar.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
