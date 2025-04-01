import React, { useState } from 'react';
import './MainPage.css'; 
import Service from './service'; 
import Homepage from './homepage';
import VehicleService from './VehicleService';
import Menu from './menu';
import UserLogin from './UserLogin'; // Import UserLogin component
import FAQPage from './FAQPage';
import Footer from './Footer';
function MainPage() {
 // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  

  return (
    <div className="App">
      <Menu />
      <div className="content">
       
            <Homepage />
            <Service />
            <VehicleService />
            <FAQPage />
            <Footer />
          
      </div>
    </div>
  );
}

export default MainPage;
