import React, { useEffect, useState } from 'react';


import Table from './Table.js'; 

import Modal from './Modal.js'; 

import firebase from "./Firebase.js"; 
//import firestore from "./firestore"; 

function Home() {
  
  const [firestoreDB, setFirestoreDB] = useState(firebase.firestore()); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [refresh, setRefresh] = useState(false); 
  const [database, setDatabase] = React.useState([]); 
  const [tableData, setTableData] = useState([
    {productID: "123564", description: "HOT DIPPED GALVANIZED NAILS - 2,000 COUNT", quantity: 12, unit_price: 13.00, unit_measure: "BX", subtotal: 0},
    {productID: "235444", description: "GAF TIMBERLINE HDZ - 3 BUNDLES", quantity: 560, unit_price: 96.23, unit_measure: "SQ", subtotal: 0},
    {productID: "568455", description: "GAF TIMBERLINE - TIMBERTEX RIDGE", quantity: 5, unit_price: 10.00, unit_measure: "BUNDLES", subtotal: 0},
    {productID: "987746", description: "W-VALLEY METAL - GALVE BRONZE", quantity: 4, unit_price: 75.10, unit_measure: "PIECES", subtotal: 0},
    {productID: "587746", description: "GRACE HIGH-TEMP IWS", quantity: 2, unit_price: "142.00", unit_measure: "ROLL", subtotal: 0},
    {productID: "347726", description: "GAF FELTBUSTER - UNDERLAYMENT", quantity: 1, unit_price: 95.00, unit_measure: "ROLLS", subtotal: 0},
    {productID: "187746", description: "GEOCEL CLEAR CAULK", quantity: 18, unit_price: 6.45, unit_measure: "TUBES", subtotal: 0},
    {productID: "017746", description: "GAF STARTER", quantity: 15, unit_price: 68.00, unit_measure: "BUNDLES", subtotal: 0}
  ]); 
  const [tableHeader,setTableHeader] = useState(
        [   {ref_key:"productID", displayName:"Product ID"},
        {ref_key:"description", displayName:"Description"},
        {ref_key:"quantity", displayName:"Quantity"},
        {ref_key:"unit_measure", displayName:"Unit Measure"},
        {ref_key:"unit_price", displayName:"Unit Price ($)"},
        {ref_key:"subtotal", displayName:"Subtotal ($)"}
        ]); 

  const [databaseHeader, setDatabaseHeader] = useState(
        [{ref_key:"description", displayName:"Description"},
        {ref_key:"material", displayName:"Material (T/F)"},
        {ref_key:"product_ID", displayName:"Product ID"},
        {ref_key:"taxed", displayName:"Taxable"},
        {ref_key:"unit_measure", displayName:"Unit Measure"},
        {ref_key:"unit_price", displayName:"Unit Price ($)"}
      ]);
      
  const [loading, setLoading] =useState(true); 
      
  const activateModal = () => {
    setModalVisible(!modalVisible); 
    //setRefresh(!refresh); 
    //alert(modalVisible); 
  }

  const addItem = (n) => {
    const tempData = tableData;  
    alert("AddingItem");
    tempData.push(n); 
    setTableData(tempData); 
    setRefresh(!refresh);
    //console.log(tempData); 
    addFirebase(n, "products"); 

  }
  
  React.useEffect( () => {
    const fetchData = async () =>{
       const data = await firestoreDB.collection("products").get(); 
      setDatabase(data.docs.map(doc=> doc.data()))
      setLoading(false); 
    }
    fetchData(); 
    }, []);

   
  const addFirebase = (n, collectionID) =>{
    //const db1 = firebase.firestore(); 
    //firestoreDB.settings({timestampsInSnapshots:true}); 
    //const data = db.collection("products"); 
    //const info = data.doc('R35Pkr3HIQyCUGpfpExj').get("unit_price"); 

    //const info = data.doc('R35Pkr3HIQyCUGpfpExj').value(); 
    // console.log("here"+info); 
    firestoreDB.collection(collectionID).add({
      description: n.description,
      material: true, 
      product_ID: n.productID, 
      taxed: true,
      unit_measure: n.unit_measure,
      unit_price: n.unit_price 
    })
    .then((docRef) => {
      alert("Data Successfully Submitted");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
  }

    
  const load = () => {

    alert(database[0].unit_price); 
    alert(tableData[0].unit_price); 
  }

  const visableTable = () => {
    if (loading){
      return (
        <>Loading...</>
      ); 
    }
    else{
      return(
        <Table
        items={database}
        tableColumns={databaseHeader}
        /> 

      );
    }
  }

  
  return (
    <div>
      <br/> 
      <br/> 
      <br/> 
      <Table 
        items={tableData} 
        tableColumns={tableHeader}
      /> 
      <button onClick={()=> activateModal()}> Add Item </button> 
      <Modal visibility={modalVisible} close={activateModal} addItem={addItem}/> 

      <button onClick={()=>load()}> Firebase </button>      
      <br/> 
      <br/> 

      {visableTable()}


    {}

   
  
     

    </div>
  ); 
}

export default Home
