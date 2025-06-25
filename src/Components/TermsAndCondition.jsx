import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
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
              <h1 className="fw-bold mb-4">Terms and Conditions – Asaan Qarz Loan</h1>

              <p className="mb-4">
              Thanks for coming to Asaan Qarz Loan! You agree to these Terms and Conditions when you use our website and services. Please don't use our services or website if you don't agree with any of these rules.
              </p>

              <p className="mb-4">
              Asaan Qarz Loan can change these Terms and Conditions at any time and without warning. They are your duty to check them often for changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. What They Signify</h2>
              <p>If you want to get a loan through “Asaan Qarz Loan,” you can visit their website and look at their loan plans.</p>
              <p>We, “Us,” and “Our” are all parts of Asaan Qarz Loan's team.</p>
              <p>If someone says “You” or “Your,” it means that they are using the website or its services.</p>

              <h2 className="fw-bold mt-5 mb-4">2. Using the Website</h2>
              <p>You agree that you are at least 18 years old and legally able to sign contracts when you use our website. You agree to follow the rules when using the website and not do anything that could hurt it or mess it up, like sending viruses, trying to get in without permission, or using bots.</p>

              <h2 className="fw-bold mt-5 mb-4">3. Help with loans</h2>
              <p>Asaan Qarz Loan helps people in Pakistan who qualify by giving them money. By applying for a loan, you agree to give true information and know that you may not be approved if you don't meet the requirements. We reserve the right to choose whether to accept or reject applications. Before the deal is finalized, the loan terms, including interest and payments, will be made clear. You have to pay back the loan the way you agreed to.</p>

              <h2 className="fw-bold mt-5 mb-4">4. Eligibility for a loan</h2>
              <p>This is what you need to do to get it:</p>
              <p>Be a Pakistani native or live in Pakistan</p>
              <p>Age 18 or older</p>
              <p>Have a valid CNIC</p>
              <p>Have a source of income or work that can be checked.</p>
              <p>Give accurate cash data so that you can be evaluated.</p>
              <p>If you don't meet these requirements, your application may be turned down.</p>

              <h2 className="fw-bold mt-5 mb-4">5. Paying back a loan</h2>
              <p>You agree to pay back the loan on time, usually every month, once it has been accepted and sent to you. You might have to pay late fees or have your credit past affected if you don't. Because you can pay off the loan early without being charged extra, the total interest you pay might go down.</p>

              <h2 className="fw-bold mt-5 mb-4">6. Rates of interest and fees</h2>
              <p>Our loan rates are fair and change based on the type of loan, the amount, and the length of the loan. Any fees that apply, such as registration, processing, or late fees, will be made clear ahead of time.</p>

              <h2 className="fw-bold mt-5 mb-4">7.Privacy and the right to know</h2>
              <p>Your personal information is only used to process the loan, make sure you are eligible, and get in touch with you. We don't give your information to anyone else unless the law says we have to.</p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to Some Other Sites</h2>
              <p>For your convenience, our page may have links to other sites. But we don't support or oversee these sites, and we're not in charge of any problems that might come up from using them.</p>

              <h2 className="fw-bold mt-5 mb-4">9. The rights to intellectual property</h2>
              <p>The text, pictures, and logos on this site are all property of Asaan Qarz Loan and are protected by intellectual property rules. You can't use any of this material for business without our permission.</p>

              <h2 className="fw-bold mt-5 mb-4">10. Actions Not Allowed</h2>
              <p>You promise not to:</p>
              <p>Give fake information</p>
              <p>Help with any illegal actions, like fraud or laundering money</p>
              <p>Hack or change the website by using software that isn't supposed to be there.</p>
              <p>Get into other people's private data without their permission</p>
              <p>Use our services to get what you want.
              If you break these rules, the service could be canceled and you could face legal implications.</p>

              <h2 className="fw-bold mt-5 mb-4">11. Limitation of Loss</h2>
              <p>Our services are meant to be effective, but we can't promise they will be perfect or that there will be no delays. If you use our services and lose money, documents, or experience other problems, we're not responsible.</p>

              <h2 className="fw-bold mt-5 mb-4">12. The End of Service</h2>
              <p>We can remove or stop your account at any time if you break the rules, commit fraud, or don't pay back your loan. You will still have to pay off all the debts that are still due.</p>

              <h2 className="fw-bold mt-5 mb-4">13. Laws that apply</h2>
              <p>Laws in Pakistan control these terms. There will be no disagreements in the courts of Pakistan.</p>

              <h2 className="fw-bold mt-5 mb-4">14. Changes to the terms</h2>
              <p>We can change these terms at any time and post the new ones here. You are responsible for going over them often. If you keep using our services, it means you agree to the new rules.</p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>If you have any questions, issues, or requests about these Terms and Conditions, please get in touch with us.</p>
              <p>Email: <a href="mailto:support@Asaan Qarzloanschemepk.com">support@Asaan Qarzloanschemepk.com</a></p>
              <p>Phone: +92 340 1003463</p>
              <p>Office Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan</p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4 ">We're glad you picked Asaan Qarz Loan. We are committed to providing you with clear and reliable banking services.</p>

            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
           <div className="col-lg-3 ">
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

export default TermsAndConditions;
