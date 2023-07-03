import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./output.css";

const rootElement = document.getElementById("root");

if (rootElement) {
    ReactDOM.render(
        <BrowserRouter>
            <PayPalScriptProvider
                options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}
            >
                <App />
            </PayPalScriptProvider>
        </BrowserRouter>,
        rootElement
    );
} else {
    console.error("Unable to find the root element for your application.");
}
