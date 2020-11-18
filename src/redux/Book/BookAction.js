import { Buy_Book, UserData, Return_Book } from "./BookType";

export const buyBook = () => {
  return {
    type: Buy_Book,
  };
};

export const Username = (data) => {
  return {
    type: UserData,
    data,
  };
};

export const return_Book = (data) => {
  return {
    type: Return_Book,
    data,
  };
};
