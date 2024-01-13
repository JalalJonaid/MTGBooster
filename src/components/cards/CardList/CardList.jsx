import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

//CardList is = to execution of an anon function
const CardList = () => {
  const dummyData = new Array(100).fill("True");
  console.log(dummyData);

//The parenthesis makes the return multi-lined
  return (
    <div>
      <h>CardList</h>
      { dummyData.map((card) => {
        return <Card />;
      })}
    </div>
  );
};

export default CardList;