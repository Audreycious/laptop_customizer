import React, { Component } from 'react';
import MakeTotal from './MakeTotal';

function SummaryTotal(props) { 
    return (
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            {/* { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) } */}
                <MakeTotal total={props} /> 
            </div>
        </div>
    );
}

export default SummaryTotal;