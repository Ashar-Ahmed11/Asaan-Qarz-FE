
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
// import aboutUsImg from '../Images/Asaan Qarz loan service.jpg'
import asaanQarz15 from '../Images/asan qarz15.jpg'
import asaanQarz16 from '../Images/asan qarz16.jpg'
import asaanQarz17 from '../Images/asan qarz17.jpg'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>

              <p className="mb-4">
              Welcome to Asaan Qarz Loan, your reliable source for easy access to loans in Pakistan. Asaan Qarz was started in 2023 by Dr. Amjad Saqib with a clear goal: to give people across the country cheap loans with low interest rates. There is help for you whether you are trying to reach personal goals or grow your business. Our promise is to give you clear, reliable, and effective financial solutions that are made to fit your specific wants.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={asaanQarz15}
                  alt="Asaan Qarz Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>

              <p className="mb-4">
              At Asaan Qarz Loan, our only goal is to help people who need money the most. We strongly think that everyone, no matter how much money they make, should be able to get loans that they can afford. We give our clients the power to take charge of their financial future and improve their quality of life by giving them low-interest loans with flexible payment choices.

              </p>

              <p className="mb-4">
                We understand how hard it can be to get a loan, especially for people in Pakistan who are worried about their money. Because of this, we are dedicated to giving services that are simple, quick, and clear. Our goal is to get rid of obstacles by giving each customer custom solutions that meet their specific needs.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Asaan Qarz Loan is the Best Option?</h2>

              <ol className="fw-light mx-5">
                <li>Quick Process for Approving</li>
                <p>We know how important it is to have money quickly. Our simple application process means that you'll get approved quickly, without all the hassles that come with traditional banking.</p>
                <li>A lot of loan choices</li>
                <p>We have a wide range of loan options to meet all of your needs, whether you're looking for a personal loan, business funding, help with school, or emergency cash.</p>
                <li>Fully open and honest</li>
                <p>We think it's important to be clear. You'll know all the terms before you sign, so there are no surprises or unclear language.</p>
                <li>Customized customer service</li>
                <p>We take the time to learn about your finances so that we can give you advice on loan amounts and payment plans that are just right for you.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Dr. Amjad Saqib is our head founder.</h2>

              <p className="mb-4">
              Dr. Amjad Saqib is a well-known social thinker and philanthropist who came up with the idea for Asaan Qarz Loan. Because he has always cared about financial inclusion and giving people power in their communities, he has been a strong supporter of social aid programs in Pakistan's underserved areas. Asaan Qarz Loan has become a beacon of hope and opportunity under his guidance, giving thousands of people across the country long-term financial solutions.

              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz16}
                  alt="Asaan Qarz Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
              Dr. Amjad Saqib, who started Asaan Qarz Loan, is a wise, kind, and unwaveringly committed man who works to improve society. His vision is what has made our success possible. Dr. Saqib built Asaan Qarz Loan with the goal of making fair, simple, and easy funding available to everyone. He did this because he knew a lot about Pakistan's financial problems and had always been committed to social justice. His ideas still shape our services and help us serve people all over the country.
              </p>


              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>

              <ul className="fw-light mx-5">
                <li>Being clear: At every level, we are honest and open with each other. We believe in building trust with every client by being clear in our communication and being honest about our terms.</li>
                <li>Focussing on the customer: Our services are based on what you want. We are proud of the fact that we can help each person individually and suggest the best financial options for their needs.</li>
                <li>New ideas: New financial tools and technology are always being added so that we can better meet the changing needs of our customers.</li>
                <li>Being Socially Responsible: We have an effect that goes beyond giving loans. We want to improve whole communities by promoting economic growth that benefits everyone and providing clear, long-term financial answers.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Personal loans are one of our financial services.</h2>

              <p className="mb-4">
                Flexible funds to help with things like school, health care, or situations that come up out of the blue.
              </p>

              <ul className="fw-light mx-5">
                <li>Loans for businesses</li>
                <p >Giving founders and small businesses the money they need to start up, run, or grow their businesses.</p>
                <li>Loans for school</li>
                <p>Offering low-cost, interest-free loan choices to help students reach their academic goals.</p>
                <li>Instant Loans</li>
                <p>Quick and reliable cash help when you need it most or when you least expect it.</p>
                <li>Loans with no interest</li>
                <p>Shariah-compliant loans with no interest that are meant to help people and families with low incomes</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>

              <p className="mb-4">
              Asaan Qarz Loan is a company with a mission that is happy to be based in Pakistan. Our goal is to make life better and the economy stronger by making banking services easy to get to, clear, and cheap.
              </p>

              <p className="mb-4">
              We're here to help you whether you're starting a business, paying for school, or dealing with a cash emergency. We're building a better, more open Pakistan one loan at a time.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz17}
                  alt="Asaan Qarz Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the family of Asaan Qarz Loans</h2>

              <p className="mb-4">
              When you join Asaan Qarz Loan, you don't just get a loan; you also get a trusted financial partner who will be there for you every step of the way. We want you to make smart decisions about your money and reach your goals with ease, honesty, and peace of mind.
              </p>

              <p className="mb-4">
              Get your loan today and see what makes Asaan Qarz different. It's never been easier to make your goals come true with our quick, safe, and reliable services.

              </p>
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

export default AboutUs;

