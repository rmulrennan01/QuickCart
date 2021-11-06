import React, { useEffect, useState } from 'react';
import './Table.css'; 
import { render } from 'react-dom';
import TableContent from "./TableContent.js"; 
import TableHead from "./TableHead.js"; 

function Table(props) {
   
    const [displayArray, setDisplayArray] = useState(props.items); 
    const [sortColumn, setSortColumn] = useState(0); 
    const [ascendSort, setAscendSort] = useState(true); 
    //var displayArray = props.items; 



    const tableSort = (n) => {
        const tempList = displayArray; 
       tempList.sort((a,b) => a[n]-b[n]); 
       setDisplayArray(displayArray.map(updateSubtotal)); 
        if(ascendSort ==true){
            setDisplayArray(tempList); 
            setAscendSort(false); 
        }
        else{
            tempList.reverse(); 
            setDisplayArray(tempList);
            setAscendSort(true); 
        } 
        
    }

    const updateSubtotal = (n) => {
        n.subtotal = n.quantity*n.unit_price; 
    }





    return (
        <div>
            <table>
                <TableHead content={displayArray} tableSort={tableSort}/>                 
                <TableContent content={displayArray} updateSubtotal={updateSubtotal}/> 
                
                <tr>
                    <td> AUTO </td>
                    <td> <input></input> </td> 
                    <td id="table_input_qty"> <input></input> </td> 
                    <td> <input></input> </td> 
                    <td> <input></input> </td> 
                    <td> - </td> 
                    <td> <button onClick={() => alert('Added item')}> Add Item</button> </td>
                </tr> 

            </table>
            
        </div>
    )
}

export default Table
