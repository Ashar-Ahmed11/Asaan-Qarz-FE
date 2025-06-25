import React from 'react';
import asaanQarz3 from '../../Images/asan qarz3.jpg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Plan for Giving Credit to Asaan Qarz</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Asaan Qarz has a credit system that is easy to understand, open to everyone, and made to work for everyone. It makes it easy for people to get money because the payment system is simple and the application process is quick and doesn't require much papers. It is a popular choice in Pakistan because the interest rates are so low.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              Anyone from the Asaan Qarz head office can help you if you ever need it or aren't sure what to do. Their helpful and friendly staff is always ready to help you and make sure your experience goes smoothly and without any stress.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={asaanQarz3 }
              alt="Asaan Qarz Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;