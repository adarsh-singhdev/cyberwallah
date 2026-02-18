import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col p-0 m-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
