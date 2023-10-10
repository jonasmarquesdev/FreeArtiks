import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
        {/* <Route path="/home" element={<Home />} /> */}
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}