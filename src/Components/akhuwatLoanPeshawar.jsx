import React from 'react';
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg'
import asaanQarz9 from '../Images/newAkhuwat14.jpg'
import asaanQarz10 from '../Images/newAkhuwat15.jpg'
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';
import asaanQarz13 from '../Images/newAkhuwat18.jpg'
import asaanQarz14 from '../Images/newAkhuwat19.jpg'
import myImg from '../Images/Loan Scheme.jpg'
import asaanQarz11 from '../Images/newAkhuwat16.jpg'
import asaanQarz12 from '../Images/newAkhuwat17.jpg'

import ApplyLoanForm from './homeComponents/ApplyLoanForm'

const akhuwatLoanPeshawar = () => {
  return (
    <>

    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Loan Services in Pakistan Can Help You</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Achieve Your Goals and Grow. Akhuwat Foundation helps people and businesses become financially independent by providing customized loan solutions. Whether you want to go to college, grow your business, or buy a house, Akhuwat's simple, interest-free loans can help you move forward with confidence and work toward long-term success.
        </p>
      </div>
      
      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans can help you reach your life goals.</h2>
          <p>
          Individual loans from the Akhuwat Foundation can be used for a variety of reasons, such as a medical disaster, a family event, or any other personal cost. Since there are no interest charges, you can focus on what's important to you without having to worry about making big payments.


          </p>
          <ul>
            <li>Simple Requirements: Akhuwat's requirements are clear and simple, which makes it easy for most people to apply.</li>
            <li>Flexible Repayment Plans: You can choose from different ways to pay back your loan, which makes it easier to stay on track.</li>
            <li>Fast Approvals: Applications are processed fast so you can get the money you need without having to wait.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center"
                >
                  <img
                    src={asaanQarz9}
                    alt="Money Received"
                    className="img-fluid  wm-100 h-100 mt-5 card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">
                      <CountUp end={14} duration={3} suffix="K+" />
                      </h2>
                  </div>
                </div>
      </div>

      {/* Business Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">2. Business loans: giving entrepreneurs the tools they need to succeed</h2>
          <p>
          The Akhuwat Foundation helps businesspeople start or grow their businesses by giving them interest-free business loans. Whether you're starting a business for the first time or want to grow an existing one, these loans can help you grow your operations, buy resources, and make an effect that lasts. Akhuwat helps businesses focus on long-term growth by having clear terms, no secret fees, and acceptance in many fields, from tech to retail.
          </p>
          <ul>
            <li>options that are made to fit your short- and long-term money needs</li>
            <li>Policy details that are clear and don't hide costs</li>
            <li>Businesses in many fields can use it, such as technology, marketing, and more</li>
          </ul>
        </div>
        
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student loans: Putting money into a better future</h2>
          <p>
      We at Akhuwat Foundation think that education can change people's lives. Our interest-free student loans are here to help you with your schoolwork, whether you need help paying for books, fees, or just the cost of living. These loans are meant to get rid of financial problems so that you can focus on your studies and long-term goals.
          </p>
          <ul>
            <li>Pays for some or all of your school costs</li>
            <li>Loans with no interest to ease financial stress</li>
            <li>Flexible ways to pay back loans, usually after graduation </li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3 "
                >
                  <img
                    src={asaanQarz10}
                    alt="Money Received"
                    className="img-fluid  wm-100 h-80 mt-5 card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                  {/* <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">14K+</h2>
                  </div>*/}
                
      </div>
      </div>
            <ApplyLoanForm/>

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Home loans: Getting the house of your dreams</h2>
          <p>
          The Akhuwat Foundation offers interest-free home loans to help you reach one of life's most important goals: owning your own house. If you want to buy a new home or fix up an old one, these loans can help you get the money you need without charging you more in interest.
          </p>
          <ul>
            <li>Several loan choices for buying a home or fixing one up</li>
            <li>Easy application process with little paperwork and quick approval</li>
            <li>affordable payment plans that make owning a home a real possibility</li>
          </ul>
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default akhuwatLoanPeshawar
