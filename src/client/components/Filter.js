import React from 'react';
import Conditions from './Conditions';


const Filter = (props) => {
    const { state } = props; 
    const stateName_ = state.stateName; 
    return (
        <React.Fragment>
            <Conditions/>

        </React.Fragment>
    );
}

export default Filter;