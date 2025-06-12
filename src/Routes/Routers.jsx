import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Home from "../Pages/Home";
import DeleteItem from "../Components/Dashboard/Admin/DeleteItem";
import Dashboard from "../Pages/Dashboard";
import Blogs from "../Pages/Blogs";
import Items from "../Pages/Items/Items";
import ItemDetails from "../Pages/Items/ItemDetails";
import Booking from "../Pages/Items/Booking";
import ContactDealer from "../Pages/Items/ContactDealer";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Overview from "../Components/Dashboard/Overview";
import ManageItems from "../Components/Dashboard/Admin/ManageItems";
import ManageUsers from "../Components/Dashboard/Admin/ManageUsers";
import AddItem from "../Components/Dashboard/Admin/AddItem";
import UpdateItem from "../Components/Dashboard/Admin/UpdateItem";
import AboutUs from "../Components/About/AboutUs";
import AboutDeveloper from "../Components/About/AboutDeveloper";
import NotFound from "../Pages/NotFound";
import ManageOrders from "../Components/Dashboard/Admin/ManageOrders";
import MyWishlist from "../Components/Dashboard/User/MyWishlist";
import MyItems from "../Components/Dashboard/User/MyItems";
import Settings from "../Components/Dashboard/Settings";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/items" element={<Items />}></Route>
      <Route path="/items/:id" element={<ItemDetails />}></Route>
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact-dealer" element={<ContactDealer />} />
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/dashboard" element={<Dashboard />}></Route>
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
          path="Manage-orders"
          element={
            <RequireAuth>
              <ManageOrders />
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
          path="delete-item/:id"
          element={
            <RequireAuth>
              <DeleteItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="my-wishlists"
          element={
            <RequireAuth>
              <MyWishlist />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
      </Route>
      {/* ============= */}

      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/about-developer" element={<AboutDeveloper />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Routers;
