import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


import UserDetails from './UserDetails';
import Edit from './Edit';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
       <Navbar />
          </div>
          <Routes>
            
            <Route path='/' element={<UserDetails/>}/>
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/create' element={<Create />} />
          </Routes>
          </BrowserRouter>
      
    </div>
  );
};

export default App