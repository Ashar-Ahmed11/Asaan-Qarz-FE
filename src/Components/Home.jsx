import React, { useContext } from 'react'
import Crousal from './homeComponents/Crousal'
import Cards from './homeComponents/Cards'
import AkhuwatLoanBanner from './homeComponents/AkhuwatLoanBanner'
import ApplyLoanDes from './homeComponents/ApplyLoanDes'
import AkhuwatLoanStatus from './homeComponents/AkhuwatLoanStatus'
import WhyChooseAkhuwat from './homeComponents/WhyChooseAkhuwat'
import AkhuwatLoanInstruction from './homeComponents/AkhuwatLoanInstruction'
import AkhuwatLoanScheme from './homeComponents/AkhuwatLoanScheme'
import AkhuwatAdvantage from './homeComponents/AkhuwatAdvantage'
import AkhuwatImages1 from './homeComponents/AkhuwatImages1'
import AkhuwatImages2 from './homeComponents/AkhuwatImages2'
import AkhuwatImages3 from './homeComponents/AkhuwatImages3'
import StatsCards from './homeComponents/StatsCard'
import AkhuwatPlans from './akhuwatplans'
import ApplyLoanForm from './homeComponents/ApplyLoanForm'
import WithDraw from './homeComponents/WithDraw'
import AppContext from './context/appContext'

const Home = () => {
  const { adminToken, logoutAdmin } = useContext(AppContext)
  return (
    
    <div>
      
      {adminToken && (
        <div className="w-100 text-center py-2" style={{background:'#ffeeba', borderBottom:'1px solid #f0ad4e'}}>
          <span className="me-3" style={{fontWeight:'bold'}}>Admin mode activated</span>
          <button className="btn btn-sm btn-dark" onClick={logoutAdmin}>Logout</button>
        </div>
      )}
      <Crousal />
      <StatsCards />
      <AkhuwatImages2 />
      <Cards />
      <AkhuwatImages3 />
      <ApplyLoanForm/>
      <WithDraw/>
      <AkhuwatPlans/>
   <WhyChooseAkhuwat />
   <AkhuwatLoanStatus/>
      <AkhuwatLoanInstruction />
      <AkhuwatLoanScheme />
      <AkhuwatAdvantage />
      <AkhuwatImages1 />
    </div>
  )
}

export default Home
