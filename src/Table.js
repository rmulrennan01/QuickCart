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
  
       setDisplayArray(tempList); 
       console.log(displayArray); 
      // alert(n); 
       toggleSortOrder(); 
    }


    const sortSwitch = () => {
        setSortColumn(sortColumn*1); 
    }

    const toggleSortOrder = () => {
        setAscendSort(ascendSort*-1);  
    }



    return (
        <div>
            <table>
                <TableHead tableSort={tableSort} toggle={toggleSortOrder}/>                 
                <TableContent content={displayArray}/> 
                
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
