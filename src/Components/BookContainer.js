import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook, Username, return_Book } from "../redux/Index";

const BookContainer = (props) => {
  const [Username, setUsername] = useState(1);
  return (
    <div>
      <h2>Book Container - {props.numberOfBooks}</h2>
      <button onClick={props.buyBook}>Buy Book</button>
      <br />
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={() => props.return_Book(Username)}>Return Book</button>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks,
    Username: state.Username,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyBook: function () {
      dispatch(buyBook());
    },
    Username: function (data) {
      dispatch(Username(data));
    },
    return_Book: function (data) {
      dispatch(return_Book(data));
    },
  };
};

export default connect(mapStateProps, mapDispatchtoProps)(BookContainer);
