import { HvProvider } from "@hitachivantara/uikit-react-core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HvProvider uiKitTheme="wicked">
      <main>
        <App />
      </main>
    </HvProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
