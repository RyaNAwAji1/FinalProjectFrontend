import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import React from 'react';
import History from './component/History';
import Product from './component/Product';
// import Gift from './component/Gift';
import NotFound from './component/NotFound';



function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/History" element ={<History />} />
        <Route path="/Product" element ={<Product />} />
        {/* <Route path="/Gift" element ={<Gift />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
