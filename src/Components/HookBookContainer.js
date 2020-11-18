import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyBook, return_Book } from "../redux/Index";
const HookBookContainer = () => {
  const [Number, setNumber] = useState(1);
  const state = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hook VContainer </h1>
      <h2>Number OF Books - {state}</h2>
      <button onClick={() => dispatch(buyBook())}> Buy Book</button>
      <br />
      <input
        type="text"
        value={Number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(return_Book(Number))}>Return Book</button>
    </div>
  );
};

export default HookBookContainer;
