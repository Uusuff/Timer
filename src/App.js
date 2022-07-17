import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Tracker from "./Components/Tracker/Tracker";

const App = () => {
   return (
      <Provider store={store}>
         <Tracker/>
      </Provider>
   );
};

export default App;