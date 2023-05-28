import React from "react";
import ReactDOM from 'react-dom/client'
import { App } from "./App";

const rootElement = document.getElementById('root');
try {
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
} catch (err){
    throw err
}