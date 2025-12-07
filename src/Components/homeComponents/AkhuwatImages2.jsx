import React from 'react';
import Akhuwat8 from '../../Images/newAkhuwat8.jpg'
import Akhuwat9 from '../../Images/newAkhuwat9.jpg'
import { CDNImage } from '../shared/cdn';

const AkhuwatImages2 = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 py-3 mb-4 mb-md-0 d-flex justify-content-center">
          <CDNImage 
            src={Akhuwat8}
            alt="Hasina Bibi - Stitching Business" 
            className="card-img-top rounded "
          
          />
        </div>
  
        <div className="col-md-6 py-3 d-flex justify-content-center">
          <CDNImage 
            src={Akhuwat9}
            alt="Farzana Bibi - Beauty Parlour" 
            className="card-img-top rounded "
          
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages2;