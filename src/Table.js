import React, { useEffect, useState } from 'react';
import './Table.css'; 
import CurrencyFormat from 'react-currency-format';
import { render } from 'react-dom';

function Table(props) {
    const [refresh, setRefresh] = useState(false); 
    const [displayArray, setDisplayArray] = useState(props.items); 
    //var displayArray = props.items; 




    const renderRows = (item) => {
        return(
            <tr className="table__row">
                <td>{item.productID}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td> 
                <td>{item.unit_measure}</td> 
                <td>
                    <CurrencyFormat value={item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                    
                </td> 
                <td> 
                    <CurrencyFormat value={item.quantity*item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </td> 
                <td> 
                    <button onClick={removeItem}> Remove </button> 
                </td>  
    
            </tr> 
        ); 

    }

    const sortArray = () => {
        
     // var tempArray = Array(10); 
      //displayArray.map((n)=>tempArray[n]=n.quantity);
      //alert(tempArray); 


    }

    const removeItem = () => {
        alert("Item Removed from Table"); 
    }


    const tableSort = (n) => {
       // alert("Sorting Column: "+n); 
      // var tempArray = displayArray.map((tableColumn)=>tableColumn[n]);
       //tempArray.sort((a,b)=>a-b); //sort compare
       //alert(tempArray);
       //alert(tempArray.reverse()); 
       setDisplayArray(displayArray.sort((a,b) => a[n]-b[n])); 
      // displayArray.map(renderRows)
       console.log(displayArray); 
       
       
       setRefresh(true); 
       setRefresh(false); 
       //alert(displayArray[n]); 
       //var newList = tempArray.map((item)=>displayArray.filter(n)==item);
       //alert(displayArray[0].description); 
       //alert(displayArray.filter((item)=>item[n]==tempArray[0]).description); 
    }



    return (
        <div>
            <table>
                <tr > 
                    <th className="table__header" onClick={()=>tableSort("productID")}> Product ID </th> 
                    <th className="table__header" onClick={()=>tableSort("description")}> Description </th> 
                    <th className="table__header" onClick={()=>tableSort("quantity")}> Quantity </th> 
                    <th className="table__header" onClick={()=>tableSort("unit_measure")}> Unit </th> 
                    <th className="table__header" onClick={()=>tableSort("unit_price")}> Unit Price ($) </th> 
                    <th className="table__header"> Subtotal ($) </th>
                    <th className="table__header"> (X) </th> 
                </tr> 
                
                {displayArray.map(renderRows)}

                
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
