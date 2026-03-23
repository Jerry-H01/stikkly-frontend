import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

