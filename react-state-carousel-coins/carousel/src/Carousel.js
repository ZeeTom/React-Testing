import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [ cardIdx, setCardIdx] = useState(0);
  const [ leftHidden, setLeftHidden ] = useState(true);
  const [ rightHidden, setRightHidden ] = useState(false);
  

  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  
  const goForward = () => {
    if (cardIdx + 1 === total - 1) setRightHidden(true);
    setCardIdx(cardIdx + 1);
    setLeftHidden(false);
  } 
  
  const goBackward = () => {
    if (cardIdx - 1 === 0) setLeftHidden(true);
    setCardIdx(cardIdx - 1);
    setRightHidden(false);
  }

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className={leftHidden 
            ? "hidden"
            : "fas fa-chevron-circle-left fa-2x"}
          onClick={goBackward}
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={rightHidden 
            ? "hidden"
            : "fas fa-chevron-circle-right fa-2x"}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
