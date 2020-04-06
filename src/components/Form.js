import React, { Fragment, useState } from 'react';
import { calculateTotal } from '../helpers';

const Form = (props) => {
    // Props
    const {amount, storeAmount, timePeriod, storePeriod, total, storeTotal} = props;
    // Define state
    const [error, storeError] = useState(false);

    // When submit is done
    const calculateLoan = (e) => {
        e.preventDefault()
        
        // Validate form
        if (amount === 0 || timePeriod === "") {
            storeError(true);
            return;
        }

        // Remove previous error
        storeError(false);

        // Calculate total loan payment
        const total = calculateTotal(amount, timePeriod);
        
        // Store total
        storeTotal(total);
    }

    return (
        <Fragment>
        <form onSubmit={ calculateLoan }>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000"
                        onChange={ e => storeAmount(parseInt( e.target.value )) } 
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={ e => storePeriod(parseInt( e.target.value )) } 
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>

        { (error) ? <p className="error">All the fields are required</p> : null }

    </Fragment>
     );
}
 
export default Form;