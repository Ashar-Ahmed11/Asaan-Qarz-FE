import React from "react";
import CountUp from 'react-countup';
import Akhuwat4 from '../../Images/newAkhuwat4.jpg'
import Akhuwat5 from '../../Images/newAkhuwat5.jpg'
import asaanQarz2 from '../../Images/asan qarz2.jpg'

const WhyChooseAkhuwat = () => {
  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why Choose Akhuwat Foundation Loans?
            </h2>
            <p>
           Akhuwat Foundation stands out as Pakistan’s only organization offering truly interest-free loans (Qarz-e-Hasna) to people in need. Unlike traditional banks, its core mission is to support communities rather than earn profit. Whether you need help with medical expenses, education, or starting a business, Akhuwat provides accessible financial support without hidden charges or processing fees. You can apply easily online or visit a nearby branch, making the process convenient for everyone. With a focus on reducing poverty, Akhuwat Foundation offers transparent, compassionate, and empowering financial solutions designed to help people improve their lives.

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={Akhuwat4}
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-success text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={Akhuwat5}
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
