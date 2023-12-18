import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Sign from "./component/Sign";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
