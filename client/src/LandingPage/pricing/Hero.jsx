import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Equity', 'F&O', 'Currency', 'Commodity'];

  return (
    <div>
      {/* Heading */}
      <div className="mt-30 m-4 text-center">
        <h1 className="text-4xl font-bold p-2">Charges</h1>
        <h3 className="text-xl">List of all charges and taxes</h3>
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center gap-25 p-4 m-4">
        <div className="text-center flex flex-col">
          <img src="pricing0.svg" alt=""  className='h-50 w-auto'/>
          <h1 className='text-3xl '>Free equity delivery</h1>
          <h3>₹0 brokerage</h3>
        </div>

        <div className="text-center flex flex-col">
          <img src="pricingEquity.svg" alt="" className='h-60 w-auto'/>
          <h1 className='text-3xl'>Intraday & F&O</h1>
          <h3>Flat ₹20 or 0.03%</h3>
        </div>

        <div className="text-center flex flex-col">
          <img src="pricingMF.svg" alt=""  className='h-50 w-auto'/>
          <h1 className='text-3xl'>Free direct MF</h1>
          <h3>₹0 commissions</h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-15 font-semibold cursor-pointer mt-20 mb-10">
        {tabs.map((tab, index) => (
          <h3
            key={tab}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'text-sky-400 border-b-2 border-sky-400' : ''}
          >
            {tab}
          </h3>
        ))}
      </div>

      {/* Tables */}
      {activeTab === 0 && <EquityTable />}
      {activeTab === 1 && <FOTable />}
      {activeTab === 2 && <CurrencyTable />}
      {activeTab === 3 && <CommodityTable />}
    </div>
  );
};

/* ===== TABLE COMPONENTS ===== */

const EquityTable = () => (
  <Table
    headers={['Equity Delivery', 'Equity Intraday']}
    brokerage={['₹0', '₹20 or 0.03%']}
  />
);

const FOTable = () => (
  <Table
    headers={['F&O Futures', 'F&O Options']}
    brokerage={['₹20', '₹20']}
  />
);

const CurrencyTable = () => (
  <Table
    headers={['Currency Futures', 'Currency Options']}
    brokerage={['₹20', '₹20']}
  />
);

const CommodityTable = () => (
  <Table
    headers={['Commodity Futures', 'Commodity Options']}
    brokerage={['₹20', '₹20']}
  />
);

/* ===== Reusable Table ===== */

const Table = ({ headers, brokerage }) => (
  <div className="m-4 flex justify-center">
    <table className="border border-collapse">
      <thead>
        <tr>
          <th></th>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brokerage</td>
          <td>{brokerage[0]}</td>
          <td>{brokerage[1]}</td>
        </tr>
        <tr>
          <td>GST</td>
          <td>18%</td>
          <td>18%</td>
        </tr>
        <tr>
          <td>SEBI Charges</td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Hero;
