
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Login from "./components/Login";
import Success from "./components/Success";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}