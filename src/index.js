import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import NewScreen from './NewScreen';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/new-screen" element={<NewScreen />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
