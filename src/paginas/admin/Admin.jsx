import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/header/Header";
import "./style.css";

export const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/assets/grafismo-fundo.svg')",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        minHeight: "100dvh",
      }}
    >
      <Header />
      <main
        style={{
          display: "flex",
          flexGrow: "1",
          maxHeight: "calc(100dvh - 7rem)",
        }}
      >
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};
