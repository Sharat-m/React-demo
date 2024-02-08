import React from "react";
import Avatar from "./Avatar.jsx";
import Info from "./Info.jsx";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Info detailInfo={props.phone} />
          <Info detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}
export default Card;
