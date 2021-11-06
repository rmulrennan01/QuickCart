import React from 'react'


import Table from './Table.js'; 

function Home() {
  const tableData = [
    {productID: "123564", description: "HOT DIPPED GALVANIZED NAILS - 2,000 COUNT", quantity: "12", unit_price: "13.00", unit_measure: "BX", subtotal:"0"},
    {productID: "235444", description: "GAF TIMBERLINE HDZ - 3 BUNDLES", quantity: "560", unit_price: "96.23", unit_measure: "SQ", subtotal:"0"},
    {productID: "568455", description: "GAF TIMBERLINE - TIMBERTEX RIDGE", quantity: "5", unit_price: "10.00", unit_measure: "BUNDLES", subtotal:"0"},
    {productID: "987746", description: "W-VALLEY METAL - GALVE BRONZE", quantity: "4", unit_price: "75.10", unit_measure: "PIECES", subtotal:"0"},
    {productID: "587746", description: "GRACE HIGH-TEMP IWS", quantity: "5", unit_price: "142.00", unit_measure: "ROLL", subtotal:"0"},
    {productID: "347726", description: "GAF FELTBUSTER - UNDERLAYMENT", quantity: "1", unit_price: "95.00", unit_measure: "ROLLS", subtotal:"0"},
    {productID: "187746", description: "GEOCEL CLEAR CAULK", quantity: "18", unit_price: "6.45", unit_measure: "TUBES", subtotal:"0"},
    {productID: "017746", description: "GAF STARTER", quantity: "15", unit_price: "68.00", unit_measure: "BUNDLES", subtotal:"0"}
  ]



  
  return (
    <div>
      <br/> 
      <br/> 
      <br/> 
      <Table items={tableData} /> 

    </div>
  ); 
}

export default Home
