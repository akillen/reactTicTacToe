import React from 'react';

export default function Square(props) {
  return (
    <button className={props.winning ? "square win-square" : "square"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
