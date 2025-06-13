import { useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header/Header";
import Routers from "../Routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/dashboard", "/login", "/register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <ToastContainer />
      <main>
        <Routers />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
