import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}