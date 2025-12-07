import React, { useEffect, useContext } from 'react';
import CountUp from 'react-countup';
import myImg from '../Images/Loan Scheme.jpg'
import asaanQarz11 from '../Images/newAkhuwat16.jpg'
import asaanQarz12 from '../Images/newAkhuwat17.jpg'
import Editable from './shared/Editable'
import { CDNImage } from './shared/cdn'
import AppContext from './context/appContext'

const AkhuwatBusinessLoan = () => {
  const { ensurePageContent } = useContext(AppContext)
  useEffect(() => { ensurePageContent('business') }, [ensurePageContent])
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3"><Editable page="business" field="business_title" defaultHtml={"Akhuwat Foundation Business Loans: Empowering Pakistani Entrepreneurs"} /></h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          <Editable page="business" field="business_p1" defaultHtml={"Starting or growing a business in Pakistan can be challenging, especially without access to funding. Akhuwat Foundation Business Loans provide interest-free financial support to help entrepreneurs overcome these barriers. By giving business owners the tools they need, the foundation not only fosters financial independence but also contributes to the growth of local economies."} />
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          <Editable page="business" field="business_p2" defaultHtml={"Whether you want to open a new shop, launch a service-based business, or expand small-scale manufacturing, Akhuwat Foundation is here to help you achieve your goals."} />
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3"><Editable page="business" field="business_why_title" defaultHtml={"Why Choose Akhuwat Foundation Business Loans?"} /></h2>
          {/* <p>Loans with no interest – You can grow your business without having to worry about high interest rates, which often slow things down.</p> */}
          <ul>
            <li><Editable page="business" field="business_why_li1" defaultHtml={"<strong>Interest-Free Financing:</strong>  Grow your business without the burden of high interest rates slowing your progress."} /></li>
            <li><Editable page="business" field="business_why_li2" defaultHtml={"<strong>No Collateral Required:</strong> Access funds without putting your personal property at risk, making borrowing safe and straightforward."} /></li>
            <li><Editable page="business" field="business_why_li3" defaultHtml={"<strong>Flexible Repayment Plans:</strong> Repayment schedules are tailored to your business income, helping you stay on track without stress"} /></li>
            <li><Editable page="business" field="business_why_li4" defaultHtml={"<strong>Support for Small Businesses:</strong> Equip entrepreneurs to create jobs, boost local economies, and strengthen communities."} /></li>
            <li><Editable page="business" field="business_why_li5" defaultHtml={"<strong>Promoting Financial Inclusion:</strong> Provide opportunities for people who previously had limited access to financial resources, making the economy fairer for all."} /></li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <CDNImage
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
          <h2 className="fw-bold mb-3"><Editable page="business" field="business_apply_title" defaultHtml={"How to Apply for an Akhuwat Foundation Business Loan in 3 Simple Steps"} /></h2>
          {/* <p>
          Make sure you meet the most basic requirements to apply.
          </p> */}
          <ul>
            <li><Editable page="business" field="business_apply_li1" defaultHtml={"<strong>Check Your Eligibility:</strong> Ensure you meet the basic requirements to apply."} /></li>
            <li><Editable page="business" field="business_apply_li2" defaultHtml={"<strong>Prepare Your Documents:</strong> Gather essentials such as your CNIC, proof of address, and business information."} /></li>
            <li><Editable page="business" field="business_apply_li3" defaultHtml={"<strong>Submit Your Application:</strong> Send in your application online or at a nearby Akhuwat branch."} /></li>
            <li><Editable page="business" field="business_apply_li4" defaultHtml={"<strong>Approval and Disbursement:</strong> Once approved, funds are released quickly so you can start using them immediately."} /></li>
            <li><Editable page="business" field="business_apply_li5" defaultHtml={"<strong>Repayment:</strong> Follow the agreed repayment plan through easy, regular installments."} /></li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <CDNImage
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
          <h2 className="fw-bold mb-3"><Editable page="business" field="business_info_title" defaultHtml={"Supporting Businesses, Strengthening Communities"} /></h2>
          <p><Editable page="business" field="business_info_p1" defaultHtml={"Akhuwat Foundation Business Loans help entrepreneurs at every stage, from starting a new venture to expanding an existing business. By removing financial barriers and providing interest-free support without collateral, the foundation empowers individuals to take control of their financial journey."} /></p>
          <p><Editable page="business" field="business_info_p2" defaultHtml={"This program not only fuels business growth but also strengthens communities by creating jobs, boosting local economies, and improving livelihoods across Pakistan."} /></p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3"><Editable page="business" field="business_final_title" defaultHtml={"Take the Next Step Towards Business Success"} /></h2>
          <p><Editable page="business" field="business_final_p1" defaultHtml={"Are you ready to grow your business? Akhuwat Foundation Business Loans give you the resources and support to turn your vision into reality. Visit the nearest Akhuwat branch or apply online today and start your journey toward financial independence and long-term success."} /></p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
