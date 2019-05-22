import React from 'react';
import Cost from './Cost';

function Summary(props) {
    return (
        <div role="summary-wrapper">
            {props.selected.map((option, key) =>
                <div className="summary__option" key={key}>
                    <div className="summary__option__label">{key}  </div>
                    <div className="summary__option__value">{option[key].name}</div>
                    <div className="summary__option__cost">
                        <Cost option={option} key={key} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Summary;