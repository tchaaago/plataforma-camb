import { Outlet } from "react-router-dom";
import Footer from "../../componentes/Footer";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/header/Header";
import { FileX } from "lucide-react";

export const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/assets/grafismo_bg.svg')",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: "100dvh",
      }}
    >
      <Header />
      <main style={{ display: "flex", flexGrow: "1" }}>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
