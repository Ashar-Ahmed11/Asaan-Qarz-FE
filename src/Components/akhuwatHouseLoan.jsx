
import React from 'react';
import CountUp from 'react-countup';
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';
import asaanQarz13 from '../Images/asan qarz12.jpg'
import asaanQarz14 from '../Images/asan qarz14.jpg'


const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Asaan Qarz can help you reach your goal of owning a home.</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        The high cost of traditional mortgages makes it seem like not being able to buy a dream house. Asaan Qarz Housing Loan changes that by giving people who need it most a way to borrow money without having to pay interest or deal with any other problems.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">These affordable, zero-interest loans have enabled many Pakistanis</h2>
          <p>
          Whether you want to buy a house or fix up the one you already have, Asaan Qarz makes the process easy and doable.
          </p>
          <ul>
            <li>On the other hand, normal home loans need collateral like land or valuable things, but Asaan Qarz's home loans don't need any security. This means that anyone can use it, even if they don't own land or valuable things.</li>
            <li>The loan terms are based on your income and financial situation so that paying it back is easy. This way, your monthly payments will always be doable. This tailored method helps borrowers keep their finances in order while they reach their housing goals.</li>
            <li>Asaan Qarz also works to include everyone in the financial system by giving these housing loans to underserved and low-income areas. This gives families the chance to own their own houses, become financially stable, and live in a safer and more respectable place.</li>
            {/* <li>Making living conditions better:The main goal of Asaan Qarz's housing loan is to make families' lives better by giving them safe, secure, and nice places to live.</li> */}
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Should Apply Right Away?</h2>
          <p className=''>
            All Pakistanis who really need a safe place to live can get an Asaan Qarz Housing Loan. They're perfect for people and families with low incomes who want to build, buy, or fix up a house.
          </p>
          <ul>
            <li>Ideal for Low-Income Families: Made to help low-income people and families who want to buy, build, or fix up a home.</li>
            <li>Simple papers: Applicants must send in basic papers such as a driver's license and proof of where they live.</li>
            <li>Community Support Advantage: Being active in the community and having suggestions can make your application stronger.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">How to Get a Home Loan from Asaan Qarz</h2>
          <ul>
            <li><strong>Check Eligibility:</strong> Make sure you are a Pakistani national who really needs a place to live.</li>
            <li><strong>Get the documents ready:</strong> Get your ID, proof of income, and a short outline of your housing plan, including whether you want to build, buy, or fix up a home.</li>
            <li><strong>Send in Application:</strong> To fill out and send in your loan application, go to the Asaan Qarz office that is closest to you.</li>
            <li><strong>Review of Your Application:</strong> The Asaan Qarz team will carefully look over your application. If accepted, you'll be told right away.</li>
            <li><strong>Get your money:</strong> You will get the money after being approved, and it will be sent to you according to the terms of the loan. This will let you start working on your home project.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatHouseLoan;

