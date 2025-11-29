
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Akhuwat1 from '../Images/newAkhuwat1.jpg'
import Akhuwat2 from '../Images/newAkhuwat2.jpg'
import Akhuwat3 from '../Images/newAkhuwat3.jpg'

// import asaanQarz6 from '../Images/asan qarz6.jpg'
// import asaanQarz7 from '../Images/asan qarz7.jpg'
// import asaanQarz8 from '../Images/asan qarz8.jpg'
// import Infograph from '../Images/Infograph.png'
// import IslamicInfo from '../Images/Interest-Free Micro Loans.png'
// import getLoan from '../Images/Add a subheading.png'

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Transform Your Life with Akhuwat Foundation Loans</h1>
              
              <p className="mb-4">
              Imagine a young entrepreneur struggling to keep their small business afloat, or a student dreaming of completing their education but unable to pay the fees. In today’s fast-paced world, financial stability can make the difference between giving up and achieving your dreams. Akhuwat Foundation is more than just a lender; it provides the tools and support people need to create a better future.

              </p>
              
              <p className="mb-4">
              This story reflects how Akhuwat Foundation Loans have transformed lives across Pakistan. From business owners to students and individuals facing financial hardships, the foundation has helped countless people turn their goals into reality. By offering loans that are accessible, affordable, and transparent, Akhuwat Foundation continues to make dreams achievable, one loan at a time.

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={Akhuwat1}
                  alt="Akhuwat Foundation Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Empowering Every Pakistani with Accessible Loans</h2>
              
              <p className="mb-4">
              In 2024, Akhuwat Foundation Loan was launched to support everyday Pakistanis struggling with financial challenges. The founder, Dr. Amjad Shah, recognized the barriers in traditional lending, including complicated applications, high interest rates, and strict requirements that kept many from accessing credit. To address this, he created a system that makes affordable loans available to everyone
              </p>
              
              <p className="mb-4">
              The initiative was designed to be simple, fair, and inclusive, offering low-interest loans, fast approvals, and an easy process. Akhuwat Foundation has always focused on empowering people from all walks of life. This approach quickly earned the trust of communities across Pakistan, helping thousands stabilize their finances and take control of their futures.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2:  From Struggle to Success: A Student’s Journey to Dreams Fulfilled</h2>
              
              <p className="mb-4">
              Haseeb Ahmed, a bright young student from Lahore, dreamed of becoming an engineer. Despite excelling in school, his family could not afford the college fees, and his aspirations seemed on the verge of slipping away. It was a moment of uncertainty and fear until he discovered Akhuwat Foundation.
              </p>
              
              <p className="mb-4">
              Through Akhuwat Foundation’s student loan program, Haseeb found an affordable solution with minimal paperwork and flexible repayment options. The smooth application process allowed him to secure the loan within 24 hours, keeping his dream alive and his education on track.
              </p>
              
              <p className="mb-4">
              Today, Haseeb has graduated from one of Pakistan’s top engineering schools and is a respected civil engineer. His journey is a shining example of how Akhuwat Foundation transforms financial struggles into opportunities, turning dreams that once seemed impossible into inspiring realities.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={Akhuwat2}
                  alt="Akhuwat Foundation Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Turning Struggles into Success: Sarah’s Journey as a Small Business Owner</h2>
              
              <p className="mb-4">
               Sarah’s life took a hopeful turn when another shop owner introduced her to Akhuwat Foundation Loan. A nearby loan center welcomed her with simple requirements and multiple options tailored for small business owners. The process was smooth, with minimal paperwork and no burdensome promises, and her loan was approved quickly.
              </p>
              
              <p className="mb-4">
              With the funds, Sarah was able to stock her shop with more products and improve the space, attracting more customers. Her income soon doubled, and her store became a bustling part of the community.
              </p>
              
              <p className="mb-4">
              The ease, care, and support she received from Akhuwat Foundation were instrumental in transforming her struggling business into a thriving success. Sarah’s story is a heartfelt reminder of how the right support can turn challenges into opportunities and dreams into reality.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4:Immediate Help When It Matters Most: Ali’s Story of Emergency Support</h2>
              
              <p className="mb-4">
              Life can throw unexpected challenges your way, and financial problems often come when you least expect them. Many people in Pakistan rely on Akhuwat Foundation Loans to navigate these difficult moments.


              </p>
              
              <p className="mb-4">
              Take Ali’s story, for example. With no savings and urgent hospital bills to pay, he turned to Akhuwat Foundation for help. His loan was approved almost immediately, and the funds were disbursed without delay.



              </p>
              
              <p className="mb-4">
              Thanks to the flexible terms, Ali managed the crisis without falling deeper into debt. Today, he is financially stable and in good health, forever grateful to Akhuwat Foundation for providing timely support when he needed it most.
              </p>
              
              {/* <p className="mb-4">
              Ali was able to handle his position without getting deeper in debt because the terms of his loans were flexible. He is now financially comfortable and in good health, and he is thankful that Akhuwat Foundation helped him through one of the hardest times in his life.
              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">5: Helping Farhan Buy a Home—Turning a Dream into Reality</h2>
              
              <p className="mb-4">
              Owning a home is a dream for many Pakistanis, yet skyrocketing prices often put it out of reach. Thanks to Akhuwat Foundation’s affordable and easy-to-repay home loans, countless families have finally moved into their own homes.
              </p>
              
              <p className="mb-4">
              Farhan Sheikh, a hardworking middle-class professional from Rawalpindi, had been saving for years but still couldn’t afford a house. That’s when he turned to Akhuwat Foundation for support.
              </p>
              
              <p className="mb-4">
              The process was fast and straightforward. Within a short time, Farhan received the loan he needed for the down payment. Today, he and his family are living in their own home, proving that with the right support, even dreams that seem impossible can come true.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={Akhuwat3}
                  alt="Akhuwat Foundation Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Ghulam’s Transformation: Boosting Agriculture with Akhuwat Foundation</h2>
              
              <p className="mb-4">
              Akhuwat Foundation’s agricultural loans help rural farmers access essential tools, seeds, and resources. Ghulam Abbas from Multan struggled with outdated methods and low income until he applied for support. Within a week, his loan was approved, allowing him to upgrade equipment and irrigation. His crop yield tripled, and his income rose, transforming his farm and securing a better future for his family.

              </p>
              
              {/* <p className="mb-4">
              Ghulam Abbas, a farmer from Multan with a lot of knowledge, had to deal with these problems. Even after years of hard work, his income stayed low because he used old gardening methods. He knew that using new tools would help him get more crops and support his family better. But standard banks wouldn't lend him money because they saw farming as a risky business.
              </p>
              
              <p className="mb-4">
              Ghulam then looked at Akhuwat Foundation. In less than a week, his application was accepted. He used the money to buy better seeds, set up a new watering system, and improve his plowing tools. His crop production tripled as a result, and his pay went up a lot.

              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">Transforming Lives Across Pakistan</h2>
              
              <p className="mb-4">
              Akhuwat Foundation Loans are changing lives nationwide, supporting students, business owners, farmers, and families. Stories like those of Hassan, Sarah, Ali, Farhan, and Ghulam show how fair and accessible financing can open the door to new opportunities and a brighter future.
              </p>
              
              <p className="mb-4">
              The Akhuwat Foundation Loan Scheme 2025 provides clear, low-cost financial solutions designed to remove barriers and empower people. Its mission is simple: to give every Pakistani the tools they need for a safer, more secure, and hopeful tomorrow.


              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

