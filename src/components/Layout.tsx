import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";

const Layout: React.FC = () => {
    return (
      <>
       <Menu />
       <main className="page">
        <Outlet />
      </main>
      <Footer />
      </>
    );
  };
  
  export default Layout;