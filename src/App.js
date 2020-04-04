import React, { Fragment, useState } from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';

function App() {
  // Define the state
  const [amount, storeAmount] = useState(0);

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
      />
    </div>

    </Fragment>
  );
}

export default App;
