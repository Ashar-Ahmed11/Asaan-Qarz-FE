import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import asaanQarz18 from '../Images/newAkhuwat24.jpg'

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
              At Akhuwat Foundation Loan, we deeply value the trust you place in us by sharing your personal information. Protecting your privacy is our highest priority, and we are committed to maintaining the strictest standards of security and confidentiality. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services or visit our website. By doing so, you agree to the terms outlined in this policy.
              </p>
              {/* <p className="mb-4">
                You agree to the terms and conditions in this Privacy Policy when you use Akhuwat Foundation Loan's services or visit its website.
              </p> */}
              <div className="my-5 text-center">
                <img
                  src={asaanQarz18}
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">1. The information we gather Personal details</h2>

              <p className="mb-4">
                <strong>Information About You:</strong>
              </p>
              <ul className="fw-light mx-5">
                <li>
                 A person's name, address, phone number, email address, CNIC, information about their income, and bank account information are needed to apply for a loan.
                </li>
                <li>
                More information can be given through forms, calls, emails, or talks in person.
                </li>
              </ul>

              <p className="mb-4">
                <strong>Information that is not personal::</strong>
              </p>
              <ul className="fw-light mx-5">
                <li>
                 Cookies and other tracking tools gather information about your device, IP address, browser type, and how you use websites.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                2. Describe how we use the information you give us to handle loan requests and decide who is eligible.
              </h2>

              <ul className="fw-light mx-5">
                <li>Get back to people who have asked about your application and give them information.</li>
                <li>Send you appropriate marketing materials (you can unsubscribe at any time).</li>
                <li>To meet law requirements and make the website work better.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
              3. Giving your info to dependable partners who will help you with loan handling and other services.
              </h2>

              <ul className="fw-light mx-5">
                <li>
                When needed by law or to keep users safe and protect their rights.
                </li>
                <li>
                For when a company changes its structure, like when it merges or buys another corporation.
                </li>
                <li>We don't distribute or rent out your private information for advertising purposes.</li>
                
              </ul>

              <p className="mb-4">
                We do not sell or rent your personal information to third
                parties for marketing purposes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Safety of Data</h2>

              <p className="mb-4">
              When personal data is sent or stored, it is protected.
              </p>
              <p className="mb-4">
              Secret information can only be seen by people who are allowed to see it.
              </p>
              <p className="mb-4">
              Regular checks are done to find and fix any weaknesses
              </p>
              <p className="mb-4">
              It's our goal to keep your information safe, but no online method is 100% safe.
              </p>

              <h2 className="fw-bold mt-5 mb-4">
                5. Tracking tools and cookies
              </h2>

              <p className="mb-4">
              To study how people use the website and make it better for them.
              </p>
              <p className="mb-4">
              Make your experience unique.
              </p>
              <p className="mb-4">
              To show ads or information that is useful to you and your interests.
              </p>
             

              <h2 className="fw-bold mt-5 mb-4">6. Your Rights</h2>

              <ul className="fw-light mx-5">
                <li>
                To show ads or information that is useful to you and your interests.
                </li>
                <li>
                 If any of the information is wrong, ask for it to be fixed.

                </li>
                <li>
                  If any of the information is wrong, ask for it to be fixed.
                </li>
               
              </ul>

              <p className="mb-4">
                To exercise these rights, contact us via the details provided
                below.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Keeping the Data</h2>

              <p className="mb-4">
              We will only keep your information for as long as it takes to provide services, follow the law, and keep records.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Linking to outside sites</h2>

              <p className="mb-4">
              There may be links to other pages on our site.
              </p>
              <p className="mb-4">
                There may be links to other pages on our site.
              </p>


              <h2 className="fw-bold mt-5 mb-4">
                9. Changes to the rules about privacy
              </h2>

              <p className="mb-4">
              This policy may be changed from time to time.
              </p>
              <p className="mb-4">
                Updates to the website or email alerts will let people know about big changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>

              <p className="mb-4">
              To ask questions or make requests about this Privacy Policy, please email us at
              </p>

              <ul className="fw-light mx-5">
                <li>
                  Send an email to support@Akhuwat Foundationloanschemepk.com.
                </li>
                <li>
                Call +92 0346 0760718
                </li>
                <li>
                Its address is F-6, Islamabad, Islamabad Capital Territory, Pakistan.

                </li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default PrivacyPolicy;
