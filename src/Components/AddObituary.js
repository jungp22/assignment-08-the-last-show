import React from "react";
import "./AddObituary.css";
import TitleHolder from './image.png';

const AddObituary = () => {
  return (
    <div className="AddObituary">
        <p>X</p>
      <h1>Create A New Obituary</h1>
      <img src={TitleHolder} alt="tithe holeding thing" width={400}/>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
      <input type="text"/>
      <input type="date"/>
      <input type="date"/>
      <button>Write obituary</button>
    </div>
  );
};

export default AddObituary;
