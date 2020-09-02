import React from 'react';

export const SystemStatistic = (props) => {    
    let name = props.name;
    let value = props.value;
    return <span>
        {name}:<h2>{value}</h2>
    </span>
}
