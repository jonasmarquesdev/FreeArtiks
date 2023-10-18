import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import PaginaLoginForm from "./pages/PaginaLoginForm";
import Profile from "./pages/Profile";
import { UserProvider } from "./context/UserContext";
import NotFound404 from "./pages/404";
import Biblioteca from "./pages/Biblioteca";
import Explorar from "./pages/Explorar";

export default function AppRouter() {
  return (
    <UserProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={location.pathname}
      >
        <Router>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/user/profile" element={<Profile />} />
              <Route
                path="/dashboard/user/biblioteca"
                element={<Biblioteca />}
              />
              <Route path="/explorar" element={<Explorar />} />
            </Route>
            <Route element={<PaginaLoginForm />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Cadastro />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </motion.div>
    </UserProvider>
  );
}
