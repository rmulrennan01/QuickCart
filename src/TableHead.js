import React from 'react'

function TableHead(props) {

    const update = (n) => {
        props.tableSort(n); 
        props.toggle(); 


    }

    
    return (
        <tr > 
        <th className="table__header" onClick={()=>update("productID")}> Product ID </th> 
        <th className="table__header" onClick={()=>update("description")}> Description </th> 
        <th className="table__header" onClick={()=>update("quantity")}> Quantity </th> 
        <th className="table__header" onClick={()=>update("unit_measure")}> Unit </th> 
        <th className="table__header" onClick={()=>update("unit_price")}> Unit Price ($) </th> 
        <th className="table__header"> Subtotal ($) </th>
        <th className="table__header"> (X) </th> 
    </tr> 
    )
}

export default TableHead
