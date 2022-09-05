import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./component/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import SellCake from "./component/sellCake";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <SellCake />
      </div>
    </Provider>
  );
}

export default App;
