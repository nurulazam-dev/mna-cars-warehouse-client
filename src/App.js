import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutDeveloper from "./Components/About/AboutDeveloper/AboutDeveloper";
import AboutUs from "./Components/About/AboutUs/AboutUs";
import AddItem from "./Components/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Logins/Login/Login";
import Register from "./Components/Logins/Register/Register";
import RequireAuth from "./Components/Logins/RequireAuth/RequireAuth";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import UpdateItem from "./Components/UpdateItem/UpdateItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>

        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/developer" element={<AboutDeveloper />}></Route>
        <Route
          path="/update/:itemId"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
