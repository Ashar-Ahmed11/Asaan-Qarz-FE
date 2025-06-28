import React from 'react';
import Akhuwat6 from '../../Images/newAkhuwat6.jpg'
import Akhuwat7 from '../../Images/newAkhuwat7.jpg'
// import asaanQarz5 from '../../Images/asan qarz5.jpg'

const AkhuwatImages1 = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 py-3 mb-4 mb-md-0 d-flex justify-content-center">
          <img 
            src={Akhuwat6}
            alt="Hasina Bibi - Stitching Business" 
            className="card-img-top rounded "
          
          />
        </div>
  
        <div className="col-md-6 py-3 d-flex justify-content-center">
          <img 
            src={Akhuwat7}
            alt="Farzana Bibi - Beauty Parlour" 
            className="card-img-top rounded "
          
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages1;