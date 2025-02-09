import React from 'react';
import MainRoute from './routes/MainRoute';
import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer';
import SearchBar from './components/organism/SearchBar';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <MainRoute /> 
      <Footer />
    </div>
  );
};

export default App;
