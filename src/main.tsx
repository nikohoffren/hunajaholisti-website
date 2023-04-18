import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  console.error("Unable to find the root element for your application.");
}
