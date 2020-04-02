import React, { Fragment } from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';

function App() {
  return (
    <Fragment>
      
      <Header 
        title="Loan calculator"
        description="Use the form to obtain a loan calculation"
      />
    <div className="container">
      <Form></Form>
    </div>

    </Fragment>
  );
}

export default App;
