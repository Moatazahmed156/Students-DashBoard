import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthCheck from "./components/AuthCheck";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthCheck />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Students" element={<Data />} />
        <Route path="/Students/ID/:id" element={<Student />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
