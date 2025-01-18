import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Portfolio from './Pages/Portfolio';
import Navbar from './Components/Navbar';
import Info from './Pages/Info';

function App() {
  return (
    <Router>
      <div className='min-h-screen w-full flex flex-col items-center bg-black text-white'>
        
        <main className='flex-grow flex justify-center items-center'>
          <Routes>
            <Route path='/info' element={<Portfolio section="info" />} />
            <Route path='/work' element={<Portfolio section="work" />} />
            <Route path='/me' element={<Portfolio section="me" />} />
            <Route path='/' element={<Portfolio section="info" />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;