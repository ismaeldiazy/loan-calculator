import React, { Fragment, useState } from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Msg from './components/Msg.js';
import CalculationResult from './components/CalculationResult.js';

function App() {
  // Define the state
  const [amount, storeAmount] = useState(0);
  const [timePeriod, storePeriod] = useState("");
  const [total, storeTotal] = useState(0);

  // Conditional rendering
  let component;
  if (total === 0) {
    component = <Msg />
  }else {
    component = <CalculationResult 
                  total={total}
                  timePeriod={timePeriod}
                  amount={amount}
                />
  }

  return (
    <Fragment>
      
      <Header 
        title="Loan calculator"
        description="Use the form to obtain a loan calculation"
      />
    <div className="container">
      <Form 
        amount={amount}
        storeAmount={storeAmount}
        timePeriod={timePeriod}
        storePeriod={storePeriod}
        total={total}
        storeTotal={storeTotal}
      />
      <div className='mensajes'>
        {component}
      </div>
    
    </div>

    </Fragment>
  );
}

export default App;
