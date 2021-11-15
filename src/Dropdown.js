import React from 'react'

function Dropdown(props) {

    const renderDropdown = (item) => {
        console.log(item[props.selector]); 

        return (
            <option value={item[props.selector]}> {item[props.selector]} </option> 
        )

    }

    return (
    
       
        <form>
            <select> 
           
            {props.list.map(renderDropdown)}
            </select> 
        </form>
      
    )
}

export default Dropdown
