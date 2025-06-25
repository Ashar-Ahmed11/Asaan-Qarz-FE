
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Asaan Qarz Loans</h1>

              <p className="mb-4">
              We at Asaan Qarz Loan are dedicated to giving you great customer service and making sure that your financial journey goes smoothly and without any problems. Our experienced team is here to help you every step of the way, whether you're applying for a loan, learning more about our services, or need help with a current application.
              </p>

              <p className="mb-4">
              We promise to answer quickly and make sure your concerns are taken care of quickly; your satisfaction is our top goal.
              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Send us an email</h3>
                  <p>
                  Do you need help or have questions? Send an email to our customer service team. We'll get back to you within 24 hours to make sure you get the help you need, whether it's about your application or something else.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                  Would you rather talk to a person directly? Our customer service line is open from 9 AM to 6 PM (Pakistan Standard Time) Monday through Friday. We're happy to answer any questions you have about loan types, eligibility, or the progress of your application.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  Come to our office, which is close to Islamabad. Come see us in person to get help from one of our loan experts. We give you personalised advice to help you make smart choices about your money.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Get a free loan quote right now.</h3>
                <p>
                If you're ready to apply or just want to know more about your choices, we can help! Get in touch with us for a free, personalised loan advice.

Our skilled staff will walk you through the application process, answer all your questions, and help you get the best loan terms for your needs.

Dasti Loan's goal is to help you reach your financial goals by giving you personalised, interest-free loan options that work for you.
                </p>
                <p>Get in touch with us right away to start making your financial situation better.</p>
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

