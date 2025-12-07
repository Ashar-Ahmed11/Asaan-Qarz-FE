import React, { useEffect, useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Editable from './shared/Editable'
import { CDNImage } from './shared/cdn'
import AppContext from './context/appContext'

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const { ensurePageContent } = useContext(AppContext)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { ensurePageContent('contact') }, [ensurePageContent]);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4"><Editable page="contact" field="contact_title" defaultHtml={"Reach Out and Let Us Guide You"} /></h1>

              <p className="mb-4"><Editable page="contact" field="contact_p1" defaultHtml={"At Akhuwat Foundation Loan, we believe that every financial journey deserves care, attention, and clarity. Whether you’re exploring your first loan, managing an ongoing application, or just learning about our services, our team is here to guide you every step of the way. Your questions matter, and your satisfaction is our mission."} /></p>

              <p className="mb-4"><Editable page="contact" field="contact_p2" defaultHtml={"We understand that financial decisions can be stressful. That’s why we promise prompt responses and dedicated support to make your experience smooth, stress-free, and empowering."} /></p>

              <h2 className="fw-bold mt-5 mb-4"><Editable page="contact" field="contact_here_title" defaultHtml={"We’re Here Whenever You Need Us"} /></h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold"><Editable page="contact" field="contact_method1_title" defaultHtml={"1. Send Us a Message and Connect Instantly"} /></h3>
                  <p><Editable page="contact" field="contact_method1_p1" defaultHtml={"Have a question or need assistance? Send an email to our customer support team, and we’ll get back to you within 24 hours. From application guidance to clarifying loan options, we’re ready to provide clear, helpful answers."} /></p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold"><Editable page="contact" field="contact_method2_title" defaultHtml={"2. Talk to a Friendly Voice"} /></h3>
                  <p><Editable page="contact" field="contact_method2_p1" defaultHtml={"Sometimes, it’s easier to speak to someone directly. Call our customer service line from 9 AM to 6 PM, Monday to Friday, Pakistan Standard Time. Our experts are happy to answer your questions about loan eligibility, progress, or any concerns you may have."} /></p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold"><Editable page="contact" field="contact_method3_title" defaultHtml={"3. Visit Us and Experience Personalised Support"} /></h3>
                  <p><Editable page="contact" field="contact_method3_p1" defaultHtml={"If you prefer face-to-face guidance, our office near Islamabad welcomes you. Meet one of our loan specialists in person, get personalised advice, and discover solutions designed for your unique needs."} /></p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold"><Editable page="contact" field="contact_address_title" defaultHtml={"Office Address: Dasti Loan"} /></h2>
                <p><Editable page="contact" field="contact_address_line" defaultHtml={"F-6, Islamabad, Islamabad Capital Territory, Pakistan"} /></p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <CDNImage
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png"
                  alt="Office Location Map"
                  className="img-fluid rounded p-5"
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold"><Editable page="contact" field="contact_quote_title" defaultHtml={"Your Questions, Our Commitment"} /></h3>
                <p><Editable page="contact" field="contact_quote_p1" defaultHtml={"Every message, call, or visit is an opportunity for us to help you move closer to your goals. At Akhuwat Foundation Loan, we don’t just provide loans; we provide guidance, clarity, and support to make your dreams achievable."} /></p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
