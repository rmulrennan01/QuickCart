import React, { useEffect, useState } from 'react';
import './Table.css'; 
import { render } from 'react-dom';
import TableContent from "./TableContent.js"; 
import TableHead from "./TableHead.js"; 
import TableFoot from "./TableFoot.js";


function Table(props) {
   
    const [displayArray, setDisplayArray] = useState(props.items); 
    const [ascendSort, setAscendSort] = useState(true); 
    const [runningSubtotal, setRunningSubtotal] = useState(0); 
    const [refresh, setRefresh] = useState(true); 
    //var displayArray = props.items; 



    const tableSort = (n) => {
        const tempList = displayArray; 
        const tempItem = tempList[0]; 
        //if(typeof tempItem[n] === 'number'){
            tempList.sort((a,b) => a[n]-b[n]); 
        //}
        //else{
            //TODO - CATCH ERROR IF NO ITEMS ARE IN THE TABLE
         //   tempList.sort((a,b) => (a[n]).localeCompare(b[n])); 
        //}
       
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

    const updateTotal = () => {
        const newTotal = displayArray.reduce((total,currentVal) => total=total+currentVal.subtotal, 0); 
        setRunningSubtotal(newTotal); 
    }

    const removeItem = (n) => {
        const tempList = displayArray;
        tempList.splice(n,1); 
        setDisplayArray(tempList); 
        setRefresh(!refresh); //only way to get dom to re-render by adding this prop alteration for some reason

    }

    const editItem = () => {
        alert("Edit this item");
    }



    return (
        <div className="table">
            <table>
                <TableHead content={displayArray} tableSort={tableSort} headerLabels={props.tableColumns}/>                 
                <TableContent 
                    
                    content={displayArray} 
                    updateSubtotal={updateSubtotal} 
                    updateTotal={updateTotal}
                    removeItem={removeItem}
                    tableColumns={props.tableColumns}
                    

                /> 

                <TableFoot subtotal={runningSubtotal} columns={props.tableColumns}/> 
                


            </table>
            
        </div>
    )
}

export default Table
