import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,addOrrmvStk}) {
  const populateStocks=stocks.map((e)=>{if(e.isInMyPortfoliyo===false){ return <Stock 
    key={e.id}
     stock={e} 
     addOrrmvStk={addOrrmvStk}/>}
    })
  return (
    <div>
      <h2>Stocks</h2>
      {populateStocks}
    </div>
  );
}

export default StockContainer;
