import { Buy_Book, UserData, Return_Book } from "./BookType";
const intialStateBook = {
  numberOfBooks: 50,
  Username: "Vasudev",
};

const BookReducer = (state = intialStateBook, action) => {
  switch (action.type) {
    case Buy_Book: {
      return { ...state, numberOfBooks: state.numberOfBooks - 1 };
    }
    case UserData: {
      console.log(action.data);
      return { ...state, Username: state.Username + action.data };
    }
    case Return_Book: {
      console.log(action.data);
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + parseInt(action.data),
      };
    }
    default: {
      return state;
    }
  }
};

export default BookReducer;
