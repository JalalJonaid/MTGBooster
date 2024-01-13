import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="booster">
      <div className="cardTitle">
        <h1>NAME OF CARD</h1>
      </div>
      <div className="imageURL">
        <img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386549&type=card"></img>
      </div>
      <div className="cardFlavorText">
        <p>lorem ipsum blah</p>
      </div>
    </div>
  );
};

export default Card;
