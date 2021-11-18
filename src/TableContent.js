import React, { useEffect, useState } from 'react';
import "./TableContent.css"; 
import CurrencyFormat from 'react-currency-format';


function TableContent(props) {
    //const [displayList, setDisplayList] = useState(props.content); 
   // const displayList = props.content; 
 
    
    const renderRows = (item) => {
        //const temp = Array.from(item); 
        //console.log("check"); 
        return(
            <tr className="tableContent__row">
                {props.tableColumns.map((cell) =>
                    
                    <td>
                        {item[cell.ref_key]}
                      
                    </td> 

                )}
            <td> 
                <button onClick={() => editRow(item)}> Edit </button>
            </td> 
            <td>
                <button onClick={() => removeRow(item)}>Remove</button>
            </td>

            </tr>
            

        ); 

    }


    const removeRow = (n) => {
        props.removeItem(props.content.indexOf(n));
    }

    const editRow = (n) => {
        alert("Edit line item #: "+props.content.indexOf(n)); 
    }



    return (
        
        <> 
            {props.content.map(renderRows)} 
            {props.content.map(props.updateSubtotal)} 
            {props.updateTotal()} 
        </> 
        
       
    );
}

export default TableContent
