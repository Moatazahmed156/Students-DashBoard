import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Students" element={<Data />} />
        <Route path="/Students/ID/:id" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
