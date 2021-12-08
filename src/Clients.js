import React, { useEffect, useState } from 'react';

import Table from "./Table.js"; 
import firebase from "./Firebase.js"; 
import Modal from "./Modal.js"; 
import Modal_Template from "./Modal_Template.js"; 




function Clients() {
    const [firestoreDB, setFirestoreDB] = useState(firebase.firestore()); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [list, setList] = React.useState([]); 
    const [loading, setLoading] = React.useState(true); 
    const [refresh, setRefresh] = React.useState(true); 
    const [formSubmission, setFormSubmission] = React.useState([{}]); 
    

    const [tableHeader,setTableHeader] = useState(
        [   
        {ref_key:"name_first", displayName:"First Name"},
        {ref_key:"name_last", displayName:"Last Name"},
        {ref_key:"email", displayName:"Email"},
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


    const addFirebase = (n, collectionID) =>{
        firestoreDB.collection(collectionID).add({
            name_first: n.name_first,
            name_last: n.name_last,
            phone: n.phone,
            email: n.email,
            address_1: n.address_1,
            address_2: n.address_2,
            city: n.city,
            state: n.state,
            zip: n.zip
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    const handleSubmit = () => {        
        addFirebase(formSubmission, "clients"); 
        setFormSubmission([{}]); 
        setModalVisible(false); 
    }

    const updateFormData = (a,b) => {
        const tempList = formSubmission; 
        tempList[a] = b;
        setFormSubmission(tempList); 
    }

    const tempTitle = () => {
        return( <> Add a New Client </> );
    }

    const tempBody = () => {
        return (
            <div className="modal__body"> 
            <form >
                <label> 
                    First Name: 
                    <input type="text" required onChange={e=>updateFormData("name_first",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Last Name: 
                    <input type="text" required onChange={e=>updateFormData("name_last",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Phone: 
                    <input type="text" required onChange={e=>updateFormData("phone",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Email: 
                    <input type="text" required onChange={e=>updateFormData("email",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Address 1: 
                    <input type="text" required onChange={e=>updateFormData("address_1",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Apartment/Unit: 
                    <input type="text" required onChange={e=>updateFormData("address_2",e.target.value)}/>
                </label> <br/> 
                <label> 
                    City: 
                    <input type="text" required onChange={e=>updateFormData("city",e.target.value)}/>
                </label> <br/> 
                <label> 
                    State: 
                    <input type="text" required onChange={e=>updateFormData("state",e.target.value)}/>
                </label> <br/> 
                <label> 
                    Zip: 
                    <input type="text" required onChange={e=>updateFormData("zip",e.target.value)}/>
                </label> <br/> 
            </form>
            <button onClick={() => handleSubmit()}> Save </button> 
        </div> 

        ); 
    }

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
        <div >
            {console.log(list[0])}
            <Modal_Template
                modalVisible={modalVisible}
                modalTitle= {tempTitle}
                modalBody= {tempBody}
                close={()=>setModalVisible(false)}
            />            
            <h> Select the active client </h> 
            <div> {renderTable()} </div> 
            <br/> 
            <button onClick={()=>setModalVisible(true)}>Add Client</button>
        </div>
    )
}

export default Clients
