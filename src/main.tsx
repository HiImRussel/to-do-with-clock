/** React */
import React from "react";
import ReactDOM from "react-dom/client";

/** Styles */
import "./styles/index.scss";

/** Components */
import App from "./App.tsx";
import TasksContextProvider from "./context/TasksContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <TasksContextProvider>
            <App />
        </TasksContextProvider>
    </React.StrictMode>
);
