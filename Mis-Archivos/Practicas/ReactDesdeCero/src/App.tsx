import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/molecules/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRutas from './routes/AppRutas';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <AppRutas />
    </Router>
  );
}

export default App;
