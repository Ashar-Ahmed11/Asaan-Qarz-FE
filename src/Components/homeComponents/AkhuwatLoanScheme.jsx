import React from 'react';
import Akhuwat12 from '../../Images/newAkhuwat12.jpg'
import Editable from '../shared/Editable';
import { CDNImage } from '../shared/cdn';

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">
              <Editable page="home" field="loanScheme_title" defaultHtml={"Support Lives with Akhuwat Foundation Credit"} />
            </h1>
            
            <p className="mb-4 fw-bold mt-1">
              <Editable page="home" field="loanScheme_p1" defaultHtml={"Akhuwat Foundation’s credit system is designed with compassion and fairness at its heart, making it accessible to everyone and easy to use. The simple application process and minimal paperwork ensure that anyone in need can get support quickly, without unnecessary stress, while the low or interest-free rates make a real difference in people’s lives."} />
            </p>
            <p className="mb-4 fw-bold mt-1">
              <Editable page="home" field="loanScheme_p2" defaultHtml={"By supporting Akhuwat Foundation, you’re not just giving money but you’re giving hope, opportunity, and a chance for someone to build a better future. Every loan helps families cover medical bills, start businesses, pursue education, and improve their lives. The friendly and dedicated staff at the head office are always there to guide you, ensuring the process is smooth, supportive, and filled with care."} />
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
                <Editable page="home" field="loanScheme_note" defaultHtml={"When you contribute or participate, you become part of a movement that uplifts communities and spreads kindness, showing that even small acts of support can create lasting change in someone’s life."} />

              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <CDNImage 
              src={Akhuwat12}
              alt="Akhuwat Foundation Loan Scheme Details in Urdu" 
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