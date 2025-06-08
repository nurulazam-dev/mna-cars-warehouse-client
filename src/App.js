import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Login/RequireAuth";
import ManageInventories from "./Components/Dashboard/ManageInventories";
import AddItem from "./Components/Dashboard/AddItem";
import MyItems from "./Components/Dashboard/MyItems";
import AboutUs from "./Components/About/AboutUs";
import AboutDeveloper from "./Components/About/AboutDeveloper";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import UpdateItem from "./Components/Dashboard/UpdateItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route path="myItems" element={<MyItems />} /> */}
          {/* <Route path="add" element={<AddItem />} /> */}
          {/* <Route path="payment/:payForId" element={<Payment />}></Route> */}
          {/*  <Route
            path="ManageInventories"
            element={
              <RequireAdmin>
                <ManageInventories />
              </RequireAdmin>
            }
          /> */}
          <Route
            path="ManageInventories"
            element={
              <RequireAuth>
                <ManageInventories />
              </RequireAuth>
            }
          />
          <Route
            path="add"
            element={
              <RequireAuth>
                <AddItem />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="update"
            element={
              <RequireAuth>
                <UpdateItem />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="myItems"
            element={
              <RequireAuth>
                <MyItems />
              </RequireAuth>
            }
          ></Route>
        </Route>
        {/* ============= */}

        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/developer" element={<AboutDeveloper />}></Route>
        {/* <Route
          path="/update/:itemId"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        ></Route> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
