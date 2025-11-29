import React from 'react'

const Cards = () => {
  const color = "#108515"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Akhuwat Foundation LOAN</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Akhuwat Foundation LOAN</p>
      
      <h1 ><b>What We Offer</b></h1>
        <h1><b>Your First Step To A Brighter Future</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-money" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loans for Individuals</h5>
                <p className="card-text"> Akhuwat Foundation offers personal loans of up to Rs. 2.5 million, with eligibility based on factors like your income, credit history, debt-to-income ratio, and employment status. Applicants must be between 24 and 60 years old. You can easily track the status of your loan application through the Akhuwat Foundation website, allowing you to stay updated and informed at every step.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Business Loan</h5>
                <p className="card-text">Akhuwat Foundation makes business financing simple by allowing you to apply online directly from your workplace. These loans are created to support short-term cash flow needs, and approval decisions are usually made within a few hours. The application process is quick, easy, and requires minimal documentation, allowing you to stay focused on growing your business without unnecessary delays.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-eye" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loan for Home</h5>
                <p className="card-text">In Pakistan, the Akhuwat Foundation offers housing loans that help individuals purchase, build, or renovate their homes. With a simple application process and fast access to funds, the Akhuwat Foundation Home Loan is an excellent option for anyone looking for quick and hassle-free financial support for their housing needs.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Wedding Loan</h5>
                <p className="card-text">Akhuwat Foundation provides convenient wedding loans to help you manage all the expenses for your big day. You can borrow from PKR 500,000 up to PKR 6,000,000, with a repayment period ranging from 10 to 36 months. These loans do not require any collateral, and returning customers often receive funds within 24 hours, making wedding planning easier and far less stressful.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4" >
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-refresh" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Car Loan
                </h5>
                <p className="card-text">Akhuwat Foundation provides car loans with interest rates starting at just 1% per year, covering the complete on-road price of your vehicle. You can pick a repayment plan that fits your budget thanks to flexible installment options. The application process is simple, approvals are fast, and existing customers often receive funds within 48 hours. With Akhuwat Foundation, owning your dream car becomes a quick and hassle-free experience.</p>
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
