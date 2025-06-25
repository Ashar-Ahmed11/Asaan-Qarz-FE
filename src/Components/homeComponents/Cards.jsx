import React from 'react'

const Cards = () => {
  const color = "#0195ff"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Asaan Qarz LOAN</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Asaan Qarz LOAN</p>
      
      <h1 ><b>Our Services</b></h1>
        <h1><b>If you want a better future, apply today.</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-money" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loans for individuals at Asaan Qarz</h5>
                <p className="card-text">You can get a personal loan from the Asaan Qarz for up to Rs. 2.5 million. The amount of loan you can get depends on your income, credit history, debt-to-income ratio, and job status, among other things. These people must be between the ages of 24 and 60. The Asaan Qarz's website lets you keep track of the progress of your loan application, giving you real-time information and keeping you in the loop at all times.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Asaan Qarz Business Loan</h5>
                <p className="card-text">Asaan Qarz makes it easier to get a business loan by letting you apply online from your office. These loans are meant to help with short-term cash flow problems, and choices on approval are usually made within a few hours. The application process is quick and doesn't require much paperwork, so you can focus on building your business without having to wait around.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-eye" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Home Loan in Asaan Qarz</h5>
                <p className="card-text">In Pakistan, the Asaan Qarz helps people buy, build, or fix up their homes by giving them housing loans. With an easy application process and quick access to funds, the Asaan Qarz Home Loan is a great choice for people who need money for housing quickly and without a lot of trouble.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Credit for a wedding</h5>
                <p className="card-text">To make sure your big day goes exactly as planned, Asaan Qarz offers wedding loans to cover all of your wedding costs. You can take anywhere from PKR 500,000 to PKR 6,000,000, and you have 10 to 36 months to pay it back. There is no need to put up security for these loans, and funds are usually sent out within 24 hours for returning customers. This makes managing your wedding finances simple and stress-free.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4" >
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-refresh" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Easy Ways to Get a Car Loan
                </h5>
                <p className="card-text">Asaan Qarz offers car loans with interest rates as low as 1% per year, which can cover the full on-road cost of your car. You can choose a loan term that works for your budget if the repayment choices are flexible. The easy application process means that loans are approved quickly, and current customers usually get their money within 48 hours. With Asaan Qarz, it's easy and stress-free to get the car of your dreams.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
