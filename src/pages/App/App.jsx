import React, { useState } from "react";
import imagesArr from "../../ImageData";
import BigImage from "../../BigImage/BigImage"
import SmallImage from "../../SmallImage/SmallImage";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };
  // array iterators: map, forEach, filter, reduce
  const images = imagesArr.map((image, index) => {
    return (
      <SmallImage
        id={image.city}
        src={image.img}
        alt={image.city}
        key={index}
        handleClick={handleClick}
      />
    );
  });

  console.log("App - images", images);

  return (
    <div className="App">
      <div>Deployed with github actions</div>
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* image is a prop (aka property) */}
        <BigImage image={bigImage} />
        {/* <img src={bigImage} id="bigimage" alt="bigImaage" /> */}
      </div>
    </div>
  );
}
