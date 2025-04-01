import React from 'react';
import './VehicleService.css';
import {useNavigate} from 'react-router-dom';
import DuplicateLicense from './Duplicatelicense';



function Service() {
  const navigate = useNavigate();
  
  const LicenseDetails = () => {
    navigate('/VehicleRegistration');
  };

  const DriverLicenseDetails = () => {
    navigate('/VehicleInspectionServices');
  };

  const AppointmentDetails = () => {
    navigate('/VehiclePermit');
  };

  
  const DuplicateLicenseDetails = () => {
    navigate('/ViewFines');
  };
  
  return (
    <div className="main">
      <h1 className="title2">Vehicle Related Services</h1>
     
      <div className="service-container">
        <div className="service-box">
          <img src="https://www.shutterstock.com/image-vector/driver-license-icon-vector-isolated-260nw-1782325556.jpg" alt="Learners License" />
          <h1>Vehicle Registration</h1>
          <p>License Registration on your Fingerprints.</p>
          <button className="btn btn-gradient btn-glow" onClick={LicenseDetails}> More</button>

        </div>
        <div className="service-box">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAAYGBiUlJQrKyvGxsampqbn5+f6+vqKiooTExM4ODhSUlIcHBwgICD29vaenp4NDQ22trZlZWXNzc3w8PAlJSXg4ODAwMCwsLBdXV0xMTFHR0dxcXHU1NRBQUF/f38WQ68hAAAJ7UlEQVR4nO2dDZuqLBCGVys/SFE0U7PM//8rX6itBEZE1HTP63Nde+rsWs0tX8Mw0M/Ppk2bNm3atGnTpk2bNv0/FeWHIilOube0IaN18oPrsdrv98f7NXXcpc0ZI2cfWi2R8HJY2iRTORakYmmzDOSdjiCLZYVl9seaTxSHHSxUlfOneoPM70Z54MSnaGkbdRU1ahaqvV/8EZyecnkKN0m2tKEagrsxWeebs3qcXJOFlU4Qrxznrg9jWajarbntJENYHvLXWzp7yVgbnzFS4txWOvAkwmiJ7k2RZ3mZHokSp15h8XgX3shq9zKy9q/q0jmszqlO+FpWtf3KPL50gDyVJvlidkPybpx5dsL/OXduHSC/OOWacA68r9xIF7iJGueyq79udIc8wZGBWoF7UHtu1+b0dbtBnfgB8wZfFdVqnGO6Bhwv7i+Y54W52hfF9+Vxar7zTZUX75Q4fD+4hAR3+eSqFLk9s54qUb7+qSzLohm8B889qEdFWUqfQFfHm1O70/JEdTwUZUJd43pC37veKQIY31A42fjkOoPmMPPoPk3ANL+pHfwvCd0m8IXqBRsLr+voqpZXSzN8VI0sm8xemqAte9QUz1tRuTBVY0ac/tjll9WYswyIkX1Lxs3GW01H9tHVFCYBvKv9VyV/Pkn67QYlBijsm1McvqrCuYnd6cWM5SR0ZcES0SL3EPBWVGYTO2G6mC4U+HJT3g7f6F34N7kvFgGPeD9XPcPtUM6Vr71gyCvn2k1gYknBNZmOUMx3xAXjjMIHDnc/Fo1F1lwdcQzegY+vTG7gIHGm7Aze4N+FsSe3b5DsDaal/ytMdIh9P07mcxG+B5On2Kb+NUG4Kum8wdRglTiYxuAjNGEyzutBgBvo+hVSKLzGvUXKu86X4YOeHkwhRgl2wn3zetYDHnI8dYkK84BrPbQC6MB4hZxE53MeqadeF3wpVtsiTmoG+2c6MFCE0Ha8rndRSB3gkwJel4FBJw2YDLzt95Zhblf6o2TdMBirmRymI5GmlS1TnjVh1P4SEIoc5jv3w0Qd0Rv0KRpfe8VJWW8AmGHxwH6YWv6Ipz6tRitr8CFl9wwFiQeNnf0wnTmB6fs2x9rLIUpbIJjjkHk8F5oFYVLgIx7C79ssRng6VQ2GIQMmafxoCMJ0L6h9hgF1ctBH6sx7cC0i0GYRBm4Qprvb/cDkekuIjdoaEOauvfgk5Mcbl8zPSSNgfe7zHUEYrFvPxNQSEKbTUwnbXVPup9ejSsEt6etm4SWvRhNGrB0gTNkFIzgb7kkZUNZY5IdhNMNfntjrgjCdyzfx1JMaGCbV65xdsTnAHkBXPZs8aQmGuehNbSWnC/bNTjBLM3mq7BiYSOp0YZgIdPDx9Lu1xsAcpNd1zGdcaEzsmWiZqKPNaNUAeTTsmjbnEg0R581TaERvBjSFLhivFJ2vG9TFePoaANPowEBzYfjK3Je8Yjn9yD0ljr4KaNgBYWyd+gxNUzpmmgFwqXU5cLc36XSuYe13crQChDnqjADQh8PzmY458b1s0UCTnjNT90wnkKwEYa4ajTPHmjAxcN1T+/J9UQHMm/EeUxjoY34lRflAGJ2VWjBfBoDp9Myowte99aCKuEd7FJ5DRXhAnBJDMFgjdhaB7UCGaSei2ZJdr2SqA5BkYVVoH+K9/KKPxGV6CEZn1Rne6CvDtJgJUGV+42A7yGJ0JITCdLNYYko6dK1OUBP8eBmmvXxLQqD+P6eBQp0lGLO3t6tKnY4rrigDMFqTZtgTFmGi98hPCHrAEEKe/2HWEvRbNDv0+hX7JSG2HSJEngnchAmR15u0P+7aXzI6c+aOQLcI897iRMLwbFMYCkRvOg5DTBs2wtg+52ytpqCtIwwfbZ0+OSObXo/PFv07uwiz621WYM/Ht/rbjFaqVgYPcSLMO7hn2yhEFAbZtm2FxMb05lsY2WHoMCcmCyxiIxQyg+klJLRD+goLE0yf2qH1/C/9B1utQYuIY7sMo+WZg36wBJO/kKmd6NESGAuFoLecEiFaFOT240XRT2GFtAxs1uOdWTlS02mNoiiUlxLRQmKw7GUtgyXfXoK5ak0y9WDe+7Xo3aW1KmTG0REdY8SGjxCxDuFCYTKPeQDk3IahpfeACWk5EWzZtMAQPuNWjxBI7UGC0Uuh04N5D5i0RGjzIL8wZ3KmJtLWzFpJkDEYLzroxgFfHxX3+2ZXvQmzXpv5OFy0HSDK8oRB9Mmj+tBfvWE8ty7KMinpDxV7kjx/EvHHYb8GT30RYXRzG7V6s5ZbZmN8JqyvYj0WOtP/0WesxwqyH9pmWLuhjwyKGUkf2e4e7/GLxx+j5yO7JOs8fkOAueuuAsKpzN0wnQq8xzq693l46Jfp9eS11u61r+mD0Q6Zw2tdhjBTiYfR3+EAR7pXBTMgygD2AGuCOQ4IZZXQFHBNMEPSTSJosWtNMIMWMyFLx8Bk5c7XVwyFKcxhPGB2MgKmDLRzAZjIHdhcNiJFqz8IOADGYFdkT3RmYL6ZPHAawxQm+7zUXvNAGPGoDHMYz2yLpxhFGpUJmIkRWlOYAorO9EsMnI1LaxRnAqYwcHikV3dhXByZo5nfuD7NFEY/d4aTMjpjkHDK55KZwujnznBSRmemzp7VhtHOneGljM4sBgPGmntFlLHmJWCeUcDOnDSVAnGxclYYKQEY0O+Ko7zY2yt5Q/a8Gef9+4TfqxraOacvNbIt88JEt54BBLWCktmANc0SnHnNvReguAQKjTmGti/UtG052WDm0bQwaHL7BglNCvNP7Qa0Fj3bMxoN43CTd9MzBSYRl8sXmuyg5ff5HCe3cIB4S0z2NvO7zockq08th/M2jHadC0Hn/WJHywtZHkbnAYjz92qZ06SzhPfQpbmOnmrBz7ebQ/7lTi3KD40QeKsMj5+Somc49XdflZ9KoV3D003AXLGlRYyPeTSawM8r/U0zotylTZc1YjO4YQxvPpkdOvOrlVU080rGJO8KWFKDNgACyld0LNh19Hkxcrb/UjI4BkCS6y98vOlToT/JqRZZsoKqdp3MM8wdRXr4N4SdCY9X8txywU46KCc+5PgncpNmgX763iTubK76gG09v6p7Fpz3cfR6V3kOtfTp4bLqVN3kyM59ZtTVYl02m1XOrLqvhqZxUe6kIgzXVzAP1b5BDzLOFZtT+W6wL7HSgnkod4ZtP1tli/mo74tDeK3uG2tEZT1fHNLSohFhTUW5Hs7k+/DnkZdp4Kz6O8U+egyQfelOu55DwtalKL52Jwm2Nnr+BdHbHjkpnFpn304zHcc3p7zkBuCkzt9oLpK8xA+41nNv/vK3DHt1EjfBMUT2PrjtytMKv6pukDw3r0+nU53PNw3btGnTpk2bNm3atGnTpk2bNm3aNL/+A7wnnpCNq56VAAAAAElFTkSuQmCC" alt="Driving License" />
          <h1>Vehicle Inspection</h1>
          <p>One click for all vehicle related inspections</p>
          <button className="btn btn-gradient btn-glow" onClick={DriverLicenseDetails}> More</button>
        </div>
        <div className="service-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNg7qZMlicw8ZmabK8oFIPQ3-UZ6B4Wxi_0g&s" />
          <h1>Vehicle Permit</h1>
          <p>Seamless online way for vehicle permits</p>
          <button className="btn btn-gradient btn-glow" onClick={AppointmentDetails}>More</button>
        </div>
        <div className="service-box">
          <img src="https://w7.pngwing.com/pngs/154/149/png-transparent-duplicate-office-tools-icon.png" alt="Online Test" />
          <h1>Fines</h1>
          <p>View your Vehicle Fines.</p>
          <button className="btn btn-gradient btn-glow " onClick={DuplicateLicenseDetails}>More</button>
        </div>
      </div>
      
    </div>
    
  );
}

export default Service;
