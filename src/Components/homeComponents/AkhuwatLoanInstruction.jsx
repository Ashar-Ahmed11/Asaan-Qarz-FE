import React from 'react';
import Editable from '../shared/Editable';


const AkhuwatLoanInstruction = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container">
        <h1 className="text-center mb-4 fw-bold">
          <Editable page="home" field="loanInstr_title" defaultHtml={"You can easily see the status of your Akhuwat Foundation loan online."} />
        </h1>
        
        <p className="text-center mb-5">
          <Editable page="home" field="loanInstr_intro" defaultHtml={"Borrowers can now easily check on the progress of their loan online with Akhuwat Foundation. You can easily see your payment records and the amount you still owe on the official website."} />
        </p>
        
        <h2 className="fw-bold mb-4">
          <Editable page="home" field="loanInstr_checkingTitle" defaultHtml={"Checking Your Loan"} />
        </h2>
        
        <ol className="fs-5">
          <li className="mb-2"><Editable page="home" field="loanInstr_step1" defaultHtml={"Visit the Akhuwat Foundation website."} /></li>
          <li className="mb-2"><Editable page="home" field="loanInstr_step2" defaultHtml={"Locate the loan progress checker tool and click on it."} /></li>
          <li className="mb-2"><Editable page="home" field="loanInstr_step3" defaultHtml={'Click the "Check Loan" button to view details such as:'} /></li>
          <ul>
            <li><Editable page="home" field="loanInstr_list_status" defaultHtml={"Loan status"} /></li>
            <li><Editable page="home" field="loanInstr_list_payments" defaultHtml={"Payments made"} /></li>
            <li className="mb-2"><Editable page="home" field="loanInstr_list_balance" defaultHtml={"Remaining balance"} /></li>
          </ul>
          <li className="mb-2"><Editable page="home" field="loanInstr_step4" defaultHtml={"Contact Akhuwat Foundation offices if you need assistance; their support staff are ready to help."} /></li>
        </ol>
      </div>
    </section>
  );
}

export default AkhuwatLoanInstruction
