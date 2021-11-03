import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./LineItem.css";


function LineItem(props) {

    return (
        <div className="lineItem__row">
            <div className="lineItem__desc"> {props.desc} </div> 
            <div className="lineItem__qty"> {props.qty} </div> 
            <div className="lineItem__unit_price"> 
                {<CurrencyFormat value={props.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
            </div> 
            <div className="lineItem__subtotal"> 
                {<CurrencyFormat value={props.qty*props.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
        
            </div>
            <button className="lineItem__rm"> X </button>
        </div>
    )
}

export default LineItem
