import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Disclaimer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light">
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5" style={{fontSize:'22px'}}>
              <h1 className="fw-bold pr-4 py-4">Disclaimer</h1>
              <p>The Asaan Qarz Loan Scheme helps people who need money and gives them advice. In exchange, borrowers agree to repay the loan according to the terms and conditions that were agreed upon. Asaan Qarz is not responsible for any personal financial problems or losses that the borrower may have because of the loan. Potential borrowers should carefully consider their financial situation before applying.</p>
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

export default Disclaimer;
