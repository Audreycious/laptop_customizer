import React from 'react';

function Cost(props) {
    return (
        <div>
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.option[props.key].cost) }
        </div>
    );
}

export default Cost();