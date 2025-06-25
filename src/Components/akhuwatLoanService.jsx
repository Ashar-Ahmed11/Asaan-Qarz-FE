import React from 'react';
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg'
import asaanQarz9 from '../Images/asan qarz9.jpg'
import asaanQarz10 from '../Images/asan qarz10.jpg'

const akhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Asaan Qarz Loan Services in Pakistan Can Help You Get What You Want and Grow</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Asaan Qarz can help you and your business get on the path to financial freedom by giving you custom loan options. Asaan Qarz offers simple, interest-free loans that give you the confidence to move forward and achieve long-term success, whether your goal is to go to college, grow your business, or buy a house.
        </p>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans to help you reach your goals in life</h2>
          <p>
          Personal loans from Asaan Qarz can help you get the money you need for any reason, like a medical emergency, a family event, or other personal wants. You can focus on what's important without having to worry about high payments when there are no interest charges.


          </p>
          <ul>
            <li>Easy to Qualify: Asaan Qarz has clear and simple standards for who can apply, so it's easy for everyone.</li>
            <li>Flexible Repayments: Your repayment plans are made to fit your budget, so you can easily make your payments.</li>
            <li>Quick Approval: Quick processing lets you get the money you need without having to wait too long.</li>
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
          Asaan Qarz gives out interest-free business loans to help you start up or expand your business. Whether your business is new or has been around for a while, these loans can help you get the money you need to grow, buy resources, or make a bigger effect. Asaan Qarz works with many different types of businesses, from tech to retail, and has clear terms and no hidden fees. This lets companies focus on long-term growth.
          </p>
          <ul>
            <li>Different ways to meet your short- and long-term money goals</li>
            <li>Clear services with no extra costs</li>
            <li>Available for a wide range of industries, such as technology, shopping, and more</li>
          </ul>
        </div>
        
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student loans: Putting money into your bright future</h2>
          <p>
      We at Asaan Qarz think that education can change people's lives. Our interest-free student loans are designed to help you with your schoolwork, whether you need money for books, fees, or just to live on. The goal of these loans is to get rid of financial problems so that you can focus on your studies and future.
          </p>
          <ul>
            <li>Payment for all or some of your school costs</li>
            <li>Loans with no interest to ease financial stress</li>
            <li>Plans that are easy to follow and begin after graduation</li>
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
            

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Home loans: getting the house of your dreams</h2>
          <p>
          Asaan Qarz's interest-free home loans are made to make it easy for you to reach a big goal in your life: owning a house. Our housing loans give you the money you need without the hassle of interest, whether you're buying a new home or fixing up an old one.
          </p>
          <ul>
            <li>There are several loan choices for buying or fixing up homes.</li>
            <li>Easy application process with little paperwork and quick approval</li>
            <li>payback plans that are easy on the wallet and make owning a home really doable</li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default akhuwatLoanServices;