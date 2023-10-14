import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import PaginaLoginForm from "./pages/PaginaLoginForm";
import { UserProvider } from "./context/UserContext";

export default function AppRouter() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route element={<PaginaLoginForm />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Cadastro />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}
