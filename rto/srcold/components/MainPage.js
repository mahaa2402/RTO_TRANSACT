import React from 'react';
import './MainPage.css'; 
import Service from './service'; 
import Homepage from './homepage';
import VehicleService from './VehicleService';
import Menu from './menu';
import AdminDashboard from './AdminHomePage';

function MainPage() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Homepage />
        <Service />
        <VehicleService />
      </div>
    </div>
  );
}

export default MainPage;
