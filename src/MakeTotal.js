import React, { Component } from 'react';

function MakeTotal(props) {
    return (
        <div>
            { props.reduce((acc, curr) => 
            acc + acc.selected[curr].cost, 0)
            }
        </div>
    );
}

export default MakeTotal();