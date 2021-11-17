import React, { useEffect, useState } from 'react';

import Table from "./Table.js"; 
import firebase from "./Firebase.js"; 
import Modal from "./Modal.js"; 



function Clients() {
    const [firestoreDB, setFirestoreDB] = useState(firebase.firestore()); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [list, setList] = React.useState([]); 
    const [loading, setLoading] = React.useState(true); 
    

    const [tableHeader,setTableHeader] = useState(
        [   
        {ref_key:"name_first", displayName:"First Name"},
        {ref_key:"name_last", displayName:"Last Name"},
        {ref_key:"email", displayName:"email"},
        {ref_key:"phone", displayName:"Phone"},
        {ref_key:"address_1", displayName:"Address"},
        {ref_key:"address_2", displayName:"Address 2"},
        {ref_key:"city", displayName:"City"},
        {ref_key:"state", displayName:"State"},
        {ref_key:"zip", displayName:"Zip"}
        ]); 

    React.useEffect( () => {
        const fetchData = async () =>{
          const dataList = await firestoreDB.collection("clients").get(); //updated
          setList(dataList.docs.map(doc=>doc.data())); 
          setLoading(false); 
        }
        fetchData(); 
        }, []);



    const renderTable = () => {
        if(loading){
            return(
                <>Loading Table...</>
            )
        }
        else{
            return(
                <Table 
                    items={list} 
                    tableColumns={tableHeader}
                /> 
            )
        }
    }


    return (
        <div>
            <h> Select the active client </h> 
            {renderTable()}

             
            <br/> 
            <button>Add Client</button>




        </div>
    )
}

export default Clients
