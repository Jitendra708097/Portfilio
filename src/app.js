import React from "react";
import ReactDOM from "react-dom/client";
import UserRoutes from "../routes/UserRoutes";


function App() {
  return (
    <div>
      <UserRoutes />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);