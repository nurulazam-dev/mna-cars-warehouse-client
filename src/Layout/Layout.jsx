import { useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header/Header";
import Routers from "../Routes/Routers";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/dashboard", "/login", "/register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
