
import React, { useEffect, useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
// import aboutUsImg from '../Images/Akhuwat Foundation loan service.jpg'
import asaanQarz15 from '../Images/newAkhuwat20.jpg'
import asaanQarz16 from '../Images/newAkhuwat21.jpg'
import asaanQarz17 from '../Images/newAkhuwat22.jpg'
import Editable from './shared/Editable'
import { CDNImage } from './shared/cdn'
import AppContext from './context/appContext'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const { ensurePageContent } = useContext(AppContext)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { ensurePageContent('about') }, [ensurePageContent]);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4"><Editable page="about" field="about_title" defaultHtml={"About Us"} /></h1>
              <h2 className="fw-bold mb-4"><Editable page="about" field="about_founder_title" defaultHtml={"Meet Our Founder: The Man Behind the Mission"} /></h2>

              <p className=""><Editable page="about" field="about_p1" defaultHtml={"It all started with a simple but powerful idea—what if everyone in Pakistan, no matter their income, could access fair, affordable loans to build a better life? This idea became a reality in 2023 when Dr. Amjad Saqib founded Akhuwat Foundation Loan. What began as a vision to empower people with low-interest financial solutions has grown into a lifeline for thousands of families, students, and business owners across the country."} /></p>
              <p className="mb-4"><Editable page="about" field="about_p2" defaultHtml={"From the very beginning, our mission has been clear: to provide simple, transparent, and effective loan solutions tailored to the unique needs of every individual. Whether you are pursuing personal goals, investing in a business, or supporting your family through an unexpected crisis, Akhuwat Foundation Loan is here to help you move forward with confidence."} /></p>
              <div className="my-5 text-center p-4">
                <CDNImage 
                  src={asaanQarz15}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_what_title" defaultHtml={"What We Do: Empowering Every Step of Your Journey"} /></h2>

              <p className="mb-4"><Editable page="about" field="about_what_p1" defaultHtml={"At Akhuwat Foundation Loan, our focus is on people. We believe that everyone deserves access to loans they can manage, no matter their financial background. Our services are designed to remove barriers, simplify the process, and provide flexible solutions that meet your specific needs."} /></p>

              {/* <p className="mb-4">
                We understand how hard it can be to get a loan, especially for people in Pakistan who are worried about their money. Because of this, we are dedicated to giving services that are simple, quick, and clear. Our goal is to get rid of obstacles by giving each customer custom solutions that meet their specific needs.
              </p> */}

              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_why_title" defaultHtml={"Why Akhuwat Foundation Loan is the Best Option?"} /></h2>

              <ol className="fw-light mx-5">
                <li><Editable page="about" field="about_why_li1" defaultHtml={"Quick Approval Process:"} /></li>
                <p><Editable page="about" field="about_why_p1" defaultHtml={"We understand how urgent money matters can be. Our streamlined application ensures you get the funds you need fast, without the frustration of traditional banking delays."} /></p>
                <li><Editable page="about" field="about_why_li2" defaultHtml={"Diverse Loan Options:"} /></li>
                <p><Editable page="about" field="about_why_p2" defaultHtml={"From personal loans and business funding to student loans and emergency cash, we offer financial solutions for every need."} /></p>
                <li><Editable page="about" field="about_why_li3" defaultHtml={"Transparent and Honest:"} /></li>
                <p><Editable page="about" field="about_why_p3" defaultHtml={"There are no hidden terms. You’ll always know exactly what to expect."} /></p>
                <li><Editable page="about" field="about_why_li4" defaultHtml={"Personalized Support:"} /></li>
                <p><Editable page="about" field="about_why_p4" defaultHtml={"Our team takes the time to understand your situation and tailor repayment plans that work for you."} /></p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_founder2_title" defaultHtml={"Our Founder: A Visionary for Financial Inclusion"} /></h2>

              <p className="mb-4"><Editable page="about" field="about_founder2_p1" defaultHtml={"Dr. Amjad Saqib, a renowned philanthropist and social thinker, has always believed in empowering communities. His lifelong dedication to social justice inspired him to create Akhuwat Foundation Loan, turning it into a beacon of hope for Pakistanis who face financial barriers. Under his guidance, the foundation has delivered life-changing opportunities, helping thousands achieve stability and independence."} /></p>
              <div className="my-5 text-center">
                <CDNImage 
                  src={asaanQarz16}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4"><Editable page="about" field="about_founder2_p2" defaultHtml={"Dr. Amjad Saqib, who started Akhuwat Foundation Loan, is a wise, kind, and unwaveringly committed man who works to improve society. His vision is what has made our success possible. Dr. Saqib built Akhuwat Foundation Loan with the goal of making fair, simple, and easy funding available to everyone. He did this because he knew a lot about Pakistan's financial problems and had always been committed to social justice. His ideas still shape our services and help us serve people all over the country."} /></p>


              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_values_title" defaultHtml={"Our Core Values: Guided by Trust and Compassion"} /></h2>

              <ul className="fw-light mx-5">
                <li><Editable page="about" field="about_values_li1" defaultHtml={"Honesty at Every Step: We build trust through transparency, making sure clients understand all terms clearly."} /></li>
                <li><Editable page="about" field="about_values_li2" defaultHtml={"Customer-Centric Approach: Every solution is tailored to meet your unique financial needs."} /></li>
                <li><Editable page="about" field="about_values_li3" defaultHtml={"Innovation: We continually adopt new financial tools and technology to better serve our clients."} /></li>
                <li><Editable page="about" field="about_values_li4" defaultHtml={"Social Responsibility: Beyond loans, we strive to strengthen communities by promoting economic growth and providing sustainable, long-term solutions."} /></li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_solutions_title" defaultHtml={"Life Changing Loan Solutions"} /></h2>

              {/* <p className="mb-4">
                Flexible funds to help with things like school, health care, or situations that come up out of the blue.
              </p> */}

              <ul className="fw-light mx-5">
                <li><Editable page="about" field="about_solutions_li1" defaultHtml={"Personal Loans:"} /></li>
                <p ><Editable page="about" field="about_solutions_p1" defaultHtml={"Flexible funds for emergencies, health care, education, or unexpected needs."} /></p>
                <li><Editable page="about" field="about_solutions_li2" defaultHtml={"Business Loans:"} /></li>
                <p><Editable page="about" field="about_solutions_p2" defaultHtml={"Helping entrepreneurs launch or expand their businesses without the burden of interest."} /></p>
                <li><Editable page="about" field="about_solutions_li3" defaultHtml={"Student Loans:"} /></li>
                <p><Editable page="about" field="about_solutions_p3" defaultHtml={"Low-cost, interest-free loans to help students focus on their studies and achieve their dreams."} /></p>
                <li><Editable page="about" field="about_solutions_li4" defaultHtml={"Instant Loans:"} /></li>
                <p><Editable page="about" field="about_solutions_p4" defaultHtml={"Fast, reliable support when you need cash urgently."} /></p>
                <li><Editable page="about" field="about_solutions_li5" defaultHtml={"Shariah-Compliant Loans:"} /></li>
                <p><Editable page="about" field="about_solutions_p5" defaultHtml={"Interest-free solutions aimed at helping low-income families and individuals thrive."} /></p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_promise_title" defaultHtml={"Our Promise: A Brighter Tomorrow for Pakistan"} /></h2>

              <p className="mb-4"><Editable page="about" field="about_promise_p1" defaultHtml={"Akhuwat Foundation Loan is proud to serve Pakistan with a mission to make financial support accessible, transparent, and fair. We are here to help you start a business, pay for education, or overcome financial emergencies. One loan at a time, we are building a stronger, fairer, and more hopeful Pakistan."} /></p>

              {/* <p className="mb-4">
              We're here to help you whether you're starting a business, paying for school, or dealing with a cash emergency. We're building a better, more open Pakistan one loan at a time.
              </p> */}
              <div className="my-5 text-center">
                <CDNImage 
                  src={asaanQarz17}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4"><Editable page="about" field="about_be_title" defaultHtml={"Be a Valuable Part of The Akhuwat Family"} /></h2>

              <p className="mb-4"><Editable page="about" field="about_be_p1" defaultHtml={"When you choose Akhuwat Foundation Loan, you’re not just getting financial support, but you’re gaining a trusted partner for your journey. We are committed to guiding you every step of the way with honesty, clarity, and care."} /></p>

              <p className="mb-4"><Editable page="about" field="about_be_p2" defaultHtml={"Take the first step toward your goals today. With the Akhuwat Foundation Loan, achieving your dreams has never been easier."} /></p>
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

