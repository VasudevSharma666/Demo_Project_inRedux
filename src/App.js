import { Provider } from "react-redux";
import "./App.css";

import BookContainer from "./Components/BookContainer";
import HookBookContainer from "./Components/HookBookContainer";
import { store } from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BookContainer />
        <HookBookContainer />
      </Provider>
    </div>
  );
}

export default App;
