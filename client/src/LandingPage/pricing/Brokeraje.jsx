import React from 'react';

const Brokeraje = () => {
  return (
    <div className='justify-center items-center' >
      <h3 className='text-2xl text-center'><span className='text-sky-400'>Calcutale your costs upfront </span>using our brokerage calculator</h3>
      
      <div className='text-center  p-4 mt-20'>
        <h4 className='text-xl'>Charges for account opening</h4>
        <div className='flex justify-center p-4'>
            <table>
                <tr>
                    <th>type of account</th>
                    <th>charges</th>
                </tr>
                <tr>
                    <td>online account </td>
                    <td className='bg-green-600 text-white'>free</td>
                </tr>
                <tr>
                    <td>offline account </td>
                    <td className='bg-green-600 text-white'>free</td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>&#8377; 500</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, HUF, Corporate account (offline only)</td>
                  <td>&#8377; 500</td>
                </tr>
            </table>
        </div>
      </div>

      <div className='text-center mt-10'>
        <h4 className='text-xl'>Demat AMC (Annual Maintenance Charge)</h4>
        <div className='flex justify-center p-4'>
            <table>
                <tr>
                    <th>value of holdings</th>
                    <th>AMC</th>
                </tr>
                <tr>
                    <td>Up to &#8377;4 lakh </td>
                    <td className='bg-green-600 text-white'>free</td>
                </tr>
                <tr>
                  <td>&#8377;4 lakh - &#8377;10 lakh</td>
                  <td>&#8377; 100 per year, charged quaterly</td>
                </tr>
                <tr>
                  <td>Above &#8377;10 lakh</td>
                  <td>&#8377; 300 per year, charged quaterly</td>
                </tr>
            </table>
        </div>
          <p className='text-sm'>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account.</p>

      </div>


      <div className='text-center mt-10'>
        <h4 className='text-xl'>chares for optional value added services</h4>
        <div className='flex justify-center p-4'>
            <table>
                <tr>
                    <th>Service</th>
                    <th>billing frequency</th>
                    <th>Charges</th>
                </tr>
                <tr>
                    <td>tickertape </td>
                    <td >monthly / annual</td>
                    <td>free : 0</td>
                </tr>
                <tr>
                  <td>small case</td>
                  <td>per transaction</td>
                  <td>buy & invest more:100 | sip: 10</td>
                </tr>
                
            </table>
        </div>
          <p className='text-sm'>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account.</p>

      </div>

      <div className='mt-10 mb-10 p-3'>
        <h4 className='text-xl'>Disclaimer :</h4>
        <p className='text-sm'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  );
}

export default Brokeraje;
