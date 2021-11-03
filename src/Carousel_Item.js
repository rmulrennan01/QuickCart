import {React, useState} from 'react'; 
import "./Carousel_Item.css"; 


function Carousel_Item(props) {
    //const [pic, setPic] = useState(null); 
    
    return (
        <div>
            <img className="poster" src={props.pic} />

        </div>
    ) 
}

export default Carousel_Item
