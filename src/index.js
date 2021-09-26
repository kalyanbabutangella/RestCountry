import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./store/Index";
import App from "./App";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
