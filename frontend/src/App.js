import React from 'react';
import MainRoute from './routes/MainRoute';
import Navbar from './components/organism/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoute /> 
    </div>
  );
};

export default App;
