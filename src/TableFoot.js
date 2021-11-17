import React, { useEffect, useState } from 'react';
   // import "./TableFoot.css"; 
   import CurrencyFormat from 'react-currency-format';

    
    function TableFoot(props) {
        const [footer, setFooter] = useState(props.columns); 
        

        const renderFoot = (item) => {
            return(
                
                <td key={item.ref_key} className="table__header"> - </td> 
                 
            ); 
        }

        return (
            <tr > 
                {footer.map(renderFoot)}
            </tr> 
        )
    }
    
    export default TableFoot
    