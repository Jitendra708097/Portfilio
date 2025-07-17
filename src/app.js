import React from "react";
import ReactDOM from "react-dom/client";


function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <img src="https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDQtNDVfMS5qcGc.jpg" alt="Placeholder" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);