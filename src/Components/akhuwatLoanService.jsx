import React from 'react';
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg'
import Akhuwat14 from '../Images/newAkhuwat14.jpg'
import Akhuwat15 from '../Images/newAkhuwat15.jpg'

const akhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Loan Services: Helping You Build a Brighter Future</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Akhuwat Foundation empowers individuals, students, business owners, and families across Pakistan with tailored loan solutions. By offering simple, interest-free loans, Akhuwat Foundation helps you take confident steps toward achieving your dreams, whether it’s completing your education, growing your business, or owning a home.
        </p>
          <h1 className="fw-bold mb-3">What We Offer to Our Customers:</h1>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal Loans: Achieve Your Life Goals</h2>
          <p>
           Personal loans from Akhuwat Foundation provide financial support for any urgent need, from medical emergencies to family events or personal projects. Without the burden of interest, you can focus on what truly matters.


          </p>
          <ul>
            <li>Easy Eligibility: Simple and clear requirements make applying straightforward for everyone.</li>
            <li>Flexible Repayments: Plans are designed to match your budget, so payments remain manageable.</li>
            <li>Fast Approval: Quick processing ensures you receive funds when you need them most.</li>
          </ul>
          <p>Thousands of people have used personal loans to secure their future and meet urgent needs.</p>
        </div>
        <div className="col-lg-5 col-md-6 text-center"
                >
                  <img
                    src={Akhuwat14}
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
          <h2 className="fw-bold mb-3">2. Business Loans: Empowering Entrepreneurs</h2>
          <p>
          Akhuwat Foundation provides interest-free loans to help businesses start, expand, or invest in new resources. Whether your venture is in technology, retail, or any other industry, these loans offer the financial boost needed for long-term growth without hidden fees or complicated terms.
          </p>
          <ul>
            <li><b>Support for Various Goals:</b> Funding options cover both short-term and long-term business needs.</li>
            <li><b>Transparent Terms:</b> No extra costs or hidden charges.</li>
            <li><b>Accessible for Many Industries:</b> Loans available for a wide range of businesses, from tech startups to retail stores.</li>
          </ul>
          <p>
          These loans allow entrepreneurs to focus on growth and building a strong business.
          </p>
        </div>
        
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student Loans: Investing in Your Future</h2>
          <p>
       Education has the power to transform lives. Akhuwat Foundation’s interest-free student loans help cover tuition, books, and living expenses, so you can focus on your studies without financial stress.
          </p>
          <ul>
            <li><b>Comprehensive Support:</b> Loans can cover all or part of your educational expenses.</li>
            <li><b>Interest-Free:</b> No added financial burden, making it easier to pursue your goals.</li>
            <li><b>Flexible Repayment:</b> Repayments begin after graduation to allow you to establish your career first.</li>
          </ul>
          <p>
       These loans give students the chance to pursue their dreams and build a successful future.
          </p>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3 "
                >
                  <img
                    src={Akhuwat15}
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
          <h2 className="fw-bold mb-3">4.  Home Loans: Making Your Dream Home a Reality</h2>
          <p>
           Owning a home is one of life’s biggest milestones. Akhuwat Foundation offers interest-free home loans that make buying or renovating a house accessible and stress-free.
          </p>
          <ul>
            <li>Multiple Options: Loans for purchasing new homes or improving existing ones.</li>
            <li>Simple Process: Minimal paperwork and fast approvals.</li>
            <li>Affordable Repayment: Flexible plans that make homeownership truly achievable.</li>
          </ul>
          <p>
           

Thousands of families have turned their dream of owning a home into reality with Akhuwat Foundation’s support.

          </p>
        </div>
        
        
      </div>
    </div>
  );
};

export default akhuwatLoanServices;