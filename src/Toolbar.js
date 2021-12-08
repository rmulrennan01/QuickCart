import React, { useEffect, useState } from 'react';
import "./Toolbar.css"; 

function Toolbar() {
    const [toggle, setToggle] = useState(true); 

    const renderToolbar = () => {
        if (toggle) {
            return(
                <div className="toolbar">
                    <div className="toolbar__header">
                        Menu
                        <br/> 
                        <br/> 
                    </div>
                    <div className="toolbar__body"> 
                        Client Search
                        <br/> 
                        <br/> 
                        Bid Search
                        <br/> 
                        <br/> 
                        Product Data
                        <br/> 
                        <br/> 
                        Product Data
                    </div> 
                    <div className="toolbar__footer"> 
        
                    </div>
                
                </div>

            );
        }
        else{
            return(
                <div>

                </div>
            ); 
        }



    }





    return (
        <>
        {renderToolbar()}
        </>
    ); 
}

export default Toolbar
