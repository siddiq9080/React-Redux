// App.js
import { Provider } from "react-redux";
import store from "./Components/Store/store";
import Products from "./Components/Products";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Products />
      </div>
    </Provider>
  );
};

export default App;
