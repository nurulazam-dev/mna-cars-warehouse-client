import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header/Header";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
