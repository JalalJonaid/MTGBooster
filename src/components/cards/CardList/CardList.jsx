import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

//CardList is = to execution of an anon function

const CardList = () => {
  const dummyData = new Array(10).fill("True");
  console.log(dummyData);

  //The parenthesis makes the return multi-lined
  return (
    <div>
      <h1>CardList</h1>
      <div className="mtgBoosterCardList-card-grid">
        {dummyData.map((card) => {
          return <Card />;
        })}
      </div>
    </div>
  );
};

export default CardList;
