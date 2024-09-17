import React from "react";
import Todos from "./components/Todos"; // Import the Todos component
import Questions from "./components/Questions";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <Dashboard/>
    </div>
  );
}
export default App;