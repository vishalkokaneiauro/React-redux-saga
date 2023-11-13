import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store/index";
import HomePage from "./app/Components/HomePage";
function App() {
  return (
    <Provider store={store}>
      <div>React-Redux-Saga</div>
      <HomePage />
    </Provider>
  );
}

export default App;
