import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);

root.render(<App />);
