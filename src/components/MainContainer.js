import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [filtered, setFiltered] = useState([])
  const URL = "http://localhost:3001/stocks"

  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(j => {
        let newstock = j.map((e) => { return { ...e, isInMyPortfoliyo: false } })
        setStocks(newstock)
        setFiltered(newstock)
      })
  }, [])
  function addOrrmvStk(Id) {
    let changeStock = filtered.map((stock) => {
      if (stock.id === Id) {
        return { ...stock, isInMyPortfoliyo: !stock.isInMyPortfoliyo }
      } else {
        return stock
      }
    })
    setFiltered(changeStock)
  }

  function sortStocks(sort) {
    let sorted = filtered.sort((a, b) => {
      if (sort === "Alphabetically") {
        return a.name.localeCompare(b.name)
      } else {
        return a.price - b.price;
      }
    })
    let finalsort = sorted.map((e) => e)

    setFiltered(finalsort)
  }
  function filterByCategory(type) {
    let filterstocks = stocks.map((e) => {
      if (type === "All") {
        return e
      }
      else if (e.type === type) {
        return e
      } else {
        return null
      }
    })
    let removeNull = filterstocks.filter(function (el) {
      return el !== null;
    })
    setFiltered(removeNull);
  }


  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterByCategory={filterByCategory} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filtered} addOrrmvStk={addOrrmvStk} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={filtered} addOrrmvStk={addOrrmvStk} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
