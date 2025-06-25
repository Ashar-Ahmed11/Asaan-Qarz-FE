
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import asaanQarz6 from '../Images/asan qarz6.jpg'
import asaanQarz7 from '../Images/asan qarz7.jpg'
import asaanQarz8 from '../Images/asan qarz8.jpg'
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
              <h1 className="fw-bold mb-4">Succes Story:The story of how Asaan Qarz Loans changed a person's life</h1>
              
              <p className="mb-4">
              In today's fast-paced world, being financially stable is very important for people to reach their goals and dreams. Asaan Qarz isn't just about giving people money; it's also about giving them the tools they need to make the future better.

              </p>
              
              <p className="mb-4">
              This success story shows how Asaan Qarz Loans really change people's lives in Pakistan, from business owners and students to people who are having a hard time with money. Asaan Qarz has been making goals come true one loan at a time by making loans easy to get, affordable, and clear.

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz6}
                  alt="Asaan Qarz Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Setting the stage for financial empowerment</h2>
              
              <p className="mb-4">
              Asaan Qarz Loan was created in 2024 to help regular Pakistanis who are having trouble with their money. The company's founder, Dr. Amjad Shah, saw that the standard lending system had problems, such as complicated application processes, high interest rates, and strict requirements that kept many people from getting loans. To make up for this, he came up with a way for everyone to get cheap credit.
              </p>
              
              <p className="mb-4">
              The idea behind the effort was to make things easy, fair, and open to everyone. It offered low-interest loans, quick approvals, and a simple process. Asaan Qarz has always been about giving people from all walks of life more power. This method quickly gained trust across Pakistan and helped thousands of people get their finances in order and take charge of their lives.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2:  The Journey of a Student: Making Dreams Come True</h2>
              
              <p className="mb-4">
              Haseeb Ahmed was a smart student from Lahore who wanted to become an engineer. Even though he did very well in school, his family couldn't afford college fees, which could have ruined his plans. His goals seemed impossible to reach until he met Asaan Qarz.
              </p>
              
              <p className="mb-4">
              Asaan Qarz's student loan program gave Haseeb an affordable option that needed little papers and gave him a choice of how to pay back the loan. He was able to keep going to school because the loan application process went smoothly, and he was accepted within 24 hours.
              </p>
              
              <p className="mb-4">
              Haseeb then graduated from one of the best engineering schools in Pakistan. He is now a famous civil engineer. His story is a powerful example of how Asaan Qarz turns people's money problems into chances and helps them make their dreams come true.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz7}
                  alt="Asaan Qarz Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Helping small businesses—Sarah's progress as she grows</h2>
              
              <p className="mb-4">
               Sarah's life changed when another shop owner put her in touch with Asaan Qarz Loan. A nearby Asaan Qarz Loan Center drew her in with its easy requirements and many loan choices for business owners. The process was easy; she didn't have to fill out a lot of paperwork or make any complicated promises, and the loan was accepted quickly.
              </p>
              
              <p className="mb-4">
              The money helped her buy more things for her shop and fix up the place. Her wages quickly doubled, and people in the area started shopping at her store more often.
              </p>
              
              <p className="mb-4">
              The quick and friendly process that Asaan Qarz used was a big part of Sarah's shop's turnaround from a failing business to one that does well in the community.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4:Help with money right away—emergency support when it counts</h2>
              
              <p className="mb-4">
              Unexpected things can happen in life, and money problems can happen when you least expect them. A lot of people in Pakistan depend on Asaan Qarz Loan to get them through tough times.


              </p>
              
              <p className="mb-4">
              Unexpected things can happen in life, and money problems can happen when you least expect them. A lot of people in Pakistan depend on Asaan Qarz Loan to get them through tough times.



              </p>
              
              <p className="mb-4">
              Look at Ali's tale. He asked Asaan Qarz for a loan because he had no savings and had to pay for hospital bills right away. His request was granted almost right away, and the money was sent right away.
              </p>
              
              <p className="mb-4">
              Ali was able to handle his position without getting deeper in debt because the terms of his loans were flexible. He is now financially comfortable and in good health, and he is thankful that Asaan Qarz helped him through one of the hardest times in his life.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">5: Helping Farhan Buy a House—A Dream Come True</h2>
              
              <p className="mb-4">
              Many Pakistanis want to own their own home, but rising home prices make that dream hard to reach. Many families have been able to move into their own houses thanks to Asaan Qarz's easy-to-repay home loans.
              </p>
              
              <p className="mb-4">
              A middle-class worker from Rawalpindi named Farhan Sheikh had been putting money away for years but still couldn't get enough to buy a house. At that point, he asked Asaan Qarz for help.
              </p>
              
              <p className="mb-4">
              It was quick and easy to do. This week, Farhan got the loan he needed to make the down payment. Now, he and his family live in their own home, finally making a dream come true that seemed impossible at first.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={asaanQarz8}
                  alt="Asaan Qarz Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Ghulam's Changes: Making Agriculture Stronger with Asaan Qarz</h2>
              
              <p className="mb-4">
              It's not just professionals in cities that can use Asaan Qarz Loan; its agricultural loan plan also helps people in rural areas. A lot of farmers in Pakistan have trouble paying for things they need, like good seeds, fertilizer, and new tools that would help them make more money and increase their crops.

              </p>
              
              <p className="mb-4">
              Ghulam Abbas, a farmer from Multan with a lot of knowledge, had to deal with these problems. Even after years of hard work, his income stayed low because he used old gardening methods. He knew that using new tools would help him get more crops and support his family better. But standard banks wouldn't lend him money because they saw farming as a risky business.
              </p>
              
              <p className="mb-4">
              Ghulam then looked at Asaan Qarz. In less than a week, his application was accepted. He used the money to buy better seeds, set up a new watering system, and improve his plowing tools. His crop production tripled as a result, and his pay went up a lot.

              </p>
    
              <h2 className="fw-bold mt-5 mb-4">How Asaan Qarz is Changing Lives: A Look at the Effects</h2>
              
              <p className="mb-4">
              Asaan Qarz Loan has given people all over Pakistan chances that have changed their lives, from students and business owners to farms and families. The lives of Hassan, Sarah, Ali, Farhan, and Ghulam show that getting fair and easy borrowing can open the door to a better future.
              </p>
              
              <p className="mb-4">
              Asaan Qarz Loan Scheme 2025 is happy to offer clear, low-cost financial options that break down barriers and give people power. Our goal is simple: to give every Pakistani the tools they need to make tomorrow safer and brighter.


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

