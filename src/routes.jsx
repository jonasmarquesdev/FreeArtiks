import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PaginaPadrao />}>
        {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}