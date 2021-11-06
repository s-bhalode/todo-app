import React from "react";

const ItemList = (props) => {
    return(
        <>
        <div className="itemList">
          <button className="btn" onClick={() => {
              props.onSelect(props.id);
          }}>×</button>
          <li>{props.text}</li>
        </div>
        </>
      );
};

export default ItemList;