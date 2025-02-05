import React from 'react';
import MainRoute from './routes/MainRoute';
import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoute /> 
      <Footer />
    </div>
  );
};

export default App;
