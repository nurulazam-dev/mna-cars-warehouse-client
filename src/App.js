import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Login/RequireAuth";
import AboutUs from "./Components/About/AboutUs";
import AboutDeveloper from "./Components/About/AboutDeveloper";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Overview from "./Components/Dashboard/Overview";
import ItemDetails from "./Pages/Items/ItemDetails";
import Items from "./Pages/Items/Items";
import Booking from "./Pages/Items/Booking";
import ContactDealer from "./Pages/Items/ContactDealer";
import ManageItems from "./Components/Dashboard/Admin/ManageItems";
import AddItem from "./Components/Dashboard/Admin/AddItem";
import MyBookingItems from "./Components/Dashboard/User/MyBookingItems";
import ManageBookings from "./Components/Dashboard/Admin/ManageBookings";
import ManageUsers from "./Components/Dashboard/Admin/ManageUsers";
import UpdateItem from "./Components/Dashboard/Admin/UpdateItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/items/:id" element={<ItemDetails />}></Route>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact-dealer" element={<ContactDealer />} />
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
          <Route index element={<Overview />} />

          {/*  <Route
            path="ManageInventories"
            element={
              <RequireAdmin>
                <ManageInventories />
              </RequireAdmin>
            }
          /> */}
          <Route
            path="Manage-items"
            element={
              <RequireAuth>
                <ManageItems />
              </RequireAuth>
            }
          />
          <Route
            path="Manage-bookings"
            element={
              <RequireAuth>
                <ManageBookings />
              </RequireAuth>
            }
          />
          <Route
            path="Manage-users"
            element={
              <RequireAuth>
                <ManageUsers />
              </RequireAuth>
            }
          />
          <Route
            path="add-item"
            element={
              <RequireAuth>
                <AddItem />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="update-item/:id"
            element={
              <RequireAuth>
                <UpdateItem />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="my-booking-items"
            element={
              <RequireAuth>
                <MyBookingItems />
              </RequireAuth>
            }
          ></Route>
        </Route>
        {/* ============= */}

        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/about-developer" element={<AboutDeveloper />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
