import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import PaginaLoginForm from "./pages/PaginaLoginForm";
import Profile from "./pages/Profile";
import { UserProvider } from "./context/UserContext";
import NotFound404 from "./pages/404";

export default function AppRouter() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/user/profile" element={<Profile />} />
          </Route>
          <Route element={<PaginaLoginForm />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Cadastro />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
