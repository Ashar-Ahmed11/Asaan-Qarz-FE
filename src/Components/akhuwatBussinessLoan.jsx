import React from 'react';
import CountUp from 'react-countup';
import myImg from '../Images/Loan Scheme.jpg'
import asaanQarz11 from '../Images/asan qarz11.jpg'
import asaanQarz12 from '../Images/asan qarz13.jpg'

const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Asaan Qarz Business Loan: Giving Pakistani Business Owners the Tools They Need</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Pakistani business owners who want to start or grow their companies can get the Asaan Qarz Business Loan, which gives them the money they need. Starting a business or making it bigger can be hard, especially if you don't have enough money. With its interest-free loan plan, Asaan Qarz provides a useful option for people who can't get loans from regular banks. The Foundation's goal is to help business owners become financially independent while also helping the economy of Pakistan grow.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          
Asaan Qarz's loan program can help you reach your business goals, whether you want to open a shop, start a service-based business, or invest in small-scale manufacturing.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Should You Get a Business Loan from Asaan Qarz?</h2>
          <p>Loans with no interest – You can grow your business without having to worry about high interest rates, which often slow things down.</p>
          <ul>
            <li><strong>No Collateral Needed:</strong> Get access to money without putting up personal property as collateral. This makes borrowing safer and easier.</li>
            <li><strong>Flexible Repayment Options:</strong> Repayment plans are made to fit the earnings of your business, which helps you stay on track and avoid stress.</li>
            <li><strong>Support for Small Businesses:</strong> Giving entrepreneurs the tools they need to create jobs, improve local economies, and make their towns better places to live.</li>
            <li><strong>Promoting Financial:</strong> Inclusion means giving people who don't have access to enough financial options the chance to do so. This helps make the economy more fair and open to everyone.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <img
            src={asaanQarz11}
            alt="Business Loan Support"
            className="img-fluid wm-105 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={14} duration={3} suffix="K+" />
</h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">How to Get an Asaan Qarz Business Loan in 3 Easy Steps Check Your Eligibility</h2>
          <p>
          Make sure you meet the most basic requirements to apply.
          </p>
          <ul>
            <li><strong>Get Your Documents Ready:</strong> Get the documents you need, like your CNIC, proof of where you live, and information about your business.</li>
            <li><strong>Please send in your application:</strong> Please send in your application </li>
            <li><strong>Approval and Payment:</strong> Once your loan application is reviewed and accepted, the money will be sent to you right away.</li>
            <li><strong>Repayment:</strong> Follow the agreed-upon repayment plan and pay back the loan in easy, regular installments.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <img
            src={asaanQarz12}
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={8000} duration={3} suffix="+" />
</h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Why Should You Get a Business Loan from Asaan Qarz?</h2>
          <p>
            Asaan Qarz Business Loans are designed to help business owners at all stages, from starting out to growing their current business. Asaan Qarz removes financial obstacles by providing interest-free loans without needing any security. This gives people the power to fully manage their own financial journey.
          </p>
          <p>
            This project not only helps businesses grow, but it also helps communities by making jobs available, boosting local economies, and making people's lives better all over Pakistan.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Join the movement for Asaan Qarz right now!</h2>
          <p>
            Are you ready to grow your business? With Asaan Qarz Business Loans, you can make your business dreams come true. Open an account at the Asaan Qarz store closest to you or apply online right now to start your path to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
