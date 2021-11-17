import React, { useEffect, useState } from 'react';
import firebase from "./Firebase.js"; 


function Dropdown_Search(props) {
    const [visability, setVisability] = useState(false); 
    const [database, setDatabase] = useState(null); 
    const [firestoreDB, setFirestoreDB] = useState(firebase.firestore()); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [refresh, setRefresh] = useState(false); 
    const [list, setList] = useState([]); 
    const [loading, setLoading] = useState(true); 


    React.useEffect( () => {
        const fetchData = async () =>{
          const data = await firestoreDB.collection("products").get(); 
          const dataList = await firestoreDB.collection("clients").get(); //updated
          setDatabase(data.docs.map(doc=> doc.data())); 
          setList(dataList.docs.map(doc=>doc.data())); 
          setLoading(false); 
        }
        fetchData(); 
        }, []);

    const renderDropdown = (item) => {
    
        /*
        return (
            <option value={item[props.selector]} onClick={()=>alert(item[props.selector])}> {item[props.selector]} </option> 
        )
        */ 
       if(loading){
           return(
               <option value="loading">loading</option> 
           ); 
       }
       else{
           return(
           <option value={list[props.selector]} oonClick={()=>alert(list[props.selector])}> {list[props.selector]} </option> 
            ); 
           }
    }

    const filterItems = (n) => {
        alert(n); 
    }

    return (
    
       
        <form>
           
            <input type="text" list="data" placeholder="Search"  />
            <datalist id="data"> 
            
            {list.map(renderDropdown)}
            </datalist> 
            <input type="submit" />  
            
        </form>
      
    )
}

export default Dropdown_Search
