import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="p-6">
        <div className="flex-1 bg-black min-h-screen p-6">
          <Outlet />
        </div>
        <p className="text-center">Lista de Repositórios </p>
      </main>
    </div>
  );
}
