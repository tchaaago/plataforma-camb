import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer";

export const Admin = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/grafismo_bg.svg')",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
