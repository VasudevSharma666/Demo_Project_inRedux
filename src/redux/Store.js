import { createStore } from "redux";
import BookReducer from "./Book/BookReducer";

export const store = createStore(BookReducer);
