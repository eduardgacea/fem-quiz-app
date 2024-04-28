import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
