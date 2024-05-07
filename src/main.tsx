import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="696552658143-ve9q1p6fi16vfvn6jghng3jufcldrabk.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>,
);
