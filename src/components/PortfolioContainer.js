import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,addOrrmvStk}) {
  const populateMyStocks=stocks.map((e)=>{if(e.isInMyPortfoliyo===true){ return <Stock 
    key={e.id}
     stock={e} 
     addOrrmvStk={addOrrmvStk}/>}
    })
  return (
    <div>
      <h2>My Portfolio</h2>
      {populateMyStocks}
    </div>
  );
}

export default PortfolioContainer;
