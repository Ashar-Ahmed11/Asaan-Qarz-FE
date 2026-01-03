
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SuccessStory from './Components/successStory';
import AkhuwatLoanService from './Components/akhuwatLoanService';
import AkhuwatBussinessLoan from './Components/akhuwatBussinessLoan';
import AkhuwatHouseLoan from './Components/akhuwatHouseLoan';
import AboutUs from './Components/aboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import Disclaimer from './Components/Disclaimer';
import ContactUS from './Components/contactUs';
import Posts from './Components/Posts';
import PostDetail from './Components/PostDetail';
import {

  Switch,
  Route,

} from "react-router-dom";

import AppContext from './Components/context/appContext';
import { useContext } from 'react'
import Admin from './Components/adminPanel/admin';
import Dashboard from './Components/adminPanel/dashboard';
import AllUsers from './Components/adminPanel/allUser';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ScreenLoader from './Components/screenLoader';
import MetaDecorator from './Components/metaDecorator';
function App() {
  const context = useContext(AppContext)
  const location = useLocation()
  const { siteData } = context
const color = "#108515"


// console.log(location.pathname);


  return (

    <>
      {siteData && <div>{<div className='whatsapp brand-image'>
        <p className='my-0 mx-2 pl-2 fw-bold' style={{ fontSize: "11px", width: '70px', textAlign: 'center', color: color }}>Akhuwat Foundation Live Support</p>
        {/* 923428347762 */}
        <a className='mx-3' target="_blank" aria-label="Chat on WhatsApp" href={`https://wa.me/${siteData.phone.replace(" ", "").replace(/^0/, '92')}?text=اخوت فاؤنڈیشن کی طرف سے ہم اپ کی کیا مدد کر سکتے ہیں`}> <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i> </a>
      </div>}

        <div className='phonenum brand-image'>
          <p className='m-0 fw-bold' style={{ fontSize: "11px", width: '55px', textAlign: 'center', color: color }}>Akhuwat Foundation Head Office No.</p>
          {/* 923428347762 */}
          <a aria-label="Chat on WhatsApp" href={`tel:$${siteData.description.replace(" ", "").replace(/^0/, '92')}`}> <i style={{ color: '#0dc143' }} className="fa fa-phone-square" aria-hidden="true"></i> </a>
        </div>
      </div>}
      <div className="overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: color }}>
        <div className="d-flex headlineMove" style={{ fontWeight: 'bold', width: 'max-content' }}>
          <p className="p-2 m-0 text-white">
            Since 2001, Akhuwat Foundation visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Foundation Head Office No. {siteData&&siteData.phone}
          </p>
          <p className="p-2 m-0 text-white">
            Since 2001, Akhuwat Foundation visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Foundation Head Office No. {siteData&&siteData.phone}
          </p>
        </div>
      </div>

      {(location.pathname !== "/admin" && location.pathname !== "/admin-dashboard") && <Navbar />}


      <ScreenLoader />


      <Switch>
        <Route exact path="/">
          <MetaDecorator title="Akhuwat Foundation Loan Scheme: Easy 2025 Loan Apply" description="Akhuwat Foundation stands out as Pakistan’s only organization offering truly interest-free loans (Qarz-e-Hasna) to people in need." />
          <Home />
        </Route>
        <Route exact path="/posts">
          <MetaDecorator title="Posts | Akhuwat Foundation Loan Scheme" description="Latest updates and posts." />
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <MetaDecorator title="Post | Akhuwat Foundation Loan Scheme" description="Read the latest post." />
          <PostDetail />
        </Route>
        <Route exact path="/success-story">
      <MetaDecorator title="Success Stories | Akhuwat Foundation Loan Scheme" description="This story reflects how Akhuwat Foundation Loans have transformed lives across Pakistan. From business owners to students and individuals facing financial hardships, the foundation has helped countless people turn their goals into reality." />

          <SuccessStory />
        </Route>
        <Route exact path="/akhuwat-loan-service">
        <MetaDecorator title="Akhuwat Loan Services | Akhuwat Foundation Loan Scheme" description="Akhuwat Foundation empowers individuals, students, business owners, and families across Pakistan with tailored loan solutions." />

          <AkhuwatLoanService />
        </Route>
        <Route exact path="/akhuwat-bussiness-loan">
        <MetaDecorator title="Akhuwat Business Loan | Akhuwat Foundation Loan Scheme" description="Starting or growing a business in Pakistan can be challenging, especially without access to funding. Akhuwat Foundation Business Loans provide interest-free financial support to help entrepreneurs overcome these barriers." />

          <AkhuwatBussinessLoan />
        </Route>
        <Route exact path="/akhuwat-house-loan">
        <MetaDecorator title="Akhuwat House Loan | Akhuwat Foundation Loan Scheme" description="For many Pakistanis, owning a home feels like an impossible dream. Rising property prices, strict bank requirements, and high interest rates often stand in the way. But for families across the country, Akhuwat Foundation is changing that story." />
          <AkhuwatHouseLoan />
        </Route>
        <Route exact path="/about-us">
        <MetaDecorator title="About Us | Akhuwat Foundation Loan Scheme" description="At Akhuwat Foundation Loan, our focus is on people. We believe that everyone deserves access to loans they can manage, no matter their financial background." />
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
        <MetaDecorator title="Contact Us | Akhuwat Foundation Loan Scheme" description="At Akhuwat Foundation Loan, we believe that every financial journey deserves care, attention, and clarity." />
          <ContactUS />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndCondition />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin-dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/all-users">
          <AllUsers />
        </Route>
      </Switch>
      {(location.pathname !== "/admin" && location.pathname !== "/admin-dashboard") && <Footer />}
    </>
  );
}

export default App;
