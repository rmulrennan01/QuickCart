import React, { useEffect, useState } from 'react';

function TableHead(props) {
    const [header, setHeader] = useState(props.headerLabels); 


    const update = (n) => {
        props.tableSort(n);       
        
    }

    const renderHead = (col) => {        
        return(
            <>
                <td className="table__header" onClick={()=> update(col.ref_key)}>{col.displayName}</td>
            </>
        );  
    }

    return(
        <tr> 
            {header.map(renderHead)}
            <th className="table__header"> (X) </th> 
        </tr> 
    )
    
}

export default TableHead
