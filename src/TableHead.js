import React, { useEffect, useState } from 'react';

import './TableHeader.css'; 

function TableHead(props) {
    const [header, setHeader] = useState(props.headerLabels); 


    const update = (n) => {
        props.tableSort(n);       
        
    }

    const renderHead = (col) => {        
        return(
            <>
                <td className="tableHeader" onClick={()=> update(col.ref_key)}>{col.displayName}</td>
            </>
        );  
    }

    return(
        <tr> 
            {header.map(renderHead)}
            <th className="tableHeader"> (X) </th> 
        </tr> 
    )
    
}

export default TableHead
