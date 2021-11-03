import React from 'react'
import LineItem from './LineItem.js';

import TableHeader from './TableHeader.js'; 
import Table from './Table.js'; 

function Home() {
  const tableData = [
    {productID: "123564", description: "HOT DIPPED GALVANIZED NAILS - 2,000 COUNT", quantity: "12", unit_price: "13.00", unit_measure: "BX"},
    {productID: "235444", description: "GAF TIMBERLINE HDZ - 3 BUNDLES", quantity: "560", unit_price: "96.23", unit_measure: "SQ"},
    {productID: "568455", description: "GAF TIMBERLINE - TIMBERTEX RIDGE", quantity: "5", unit_price: "10.00", unit_measure: "BUNDLES"},
    {productID: "987746", description: "ALUMINUM DRIP EDGE - WHITE", quantity: "5", unit_price: "10.00", unit_measure: "PIECES"}
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
