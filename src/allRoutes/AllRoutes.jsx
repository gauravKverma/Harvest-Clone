import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Customers } from '../pages/customers/Customers';
import { Integrations } from '../pages/integrations/Integrations';
import { Features } from '../pages/features/Features';
import Home from '../components/home/Home';
import Pricing from '../pages/pricing/Pricing';
import { Time } from '../proctedPages/time/Time';
import { Expenses } from '../proctedPages/expenses/Expenses';


export const AllRoutes = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/customers' element={<Customers/>} />
            <Route path='/integrations' element={<Integrations/>} />
            <Route path='/features' element={<Features/>} />
            <Route path="/prcing" element={<Pricing/>}/>
            
            {/* Protected Routes */}
            <Route path='/time' element={<Time/>} />
            <Route path='/expenses' element={<Expenses/>} />
        </Routes>
        {/* <Footer/>      */}
    </div>
  )
};
 
