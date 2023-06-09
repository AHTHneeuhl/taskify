import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import reduxStore from "redux/store";
import theme from "theme/theme";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <NextUIProvider theme={theme}>
        <App />
        <ToastContainer
          position="top-right"
          hideProgressBar
          closeOnClick={false}
        />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
