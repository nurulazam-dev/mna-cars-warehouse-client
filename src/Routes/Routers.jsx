import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Blogs from "../Pages/Blogs";
import Items from "../Pages/Items/Items";
import ItemDetails from "../Pages/Items/ItemDetails";
import Booking from "../Pages/Items/Booking";
import ContactDealer from "../Pages/Items/ContactDealer";
import Register from "../Pages/Register";
import AboutUs from "../Components/About/AboutUs";
import AboutDeveloper from "../Components/About/AboutDeveloper";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import ManageUsers from "../Components/Dashboard/Admin/ManageUsers/ManageUsers";
import AddItem from "../Components/Dashboard/Admin/AddItem";
import MyWishlist from "../Components/Dashboard/User/MyWishlist";
import Settings from "../Components/Dashboard/Settings";
import MyOrders from "../Components/Dashboard/User/MyOrders";
import AdminRoute from "./AdminRoute";
import Overview from "../Components/Dashboard/Overview";
import ManageItems from "../Components/Dashboard/Admin/ManageItems/ManageItems";
import ManageOrders from "../Components/Dashboard/Admin/ManageOrders/ManageOrders";
import Profile from "../Components/Dashboard/Profile";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";

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
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      {/* ==========================
                Admin panel
      ========================== */}

      <Route
        path="/dashboard/admin"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="Manage-items" element={<ManageItems />} />
        <Route path="Manage-orders" element={<ManageOrders />} />
        <Route path="Manage-users" element={<ManageUsers />} />
        <Route path="add-item" element={<AddItem />} />
      </Route>

      {/* ==========================
             User dashboard
      ========================== */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Profile />} />
        <Route path="my-orders" element={<MyOrders />} />
        <Route path="my-wishlists" element={<MyWishlist />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* dashboard routes */}
      {/*  <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Overview />} />

        <Route
          path="Manage-items"
          element={
            <AdminRoute>
              <ManageItems />
            </AdminRoute>
          }
        />
        <Route
          path="Manage-orders"
          element={
            <PrivateRoute>
              <ManageOrders />
            </PrivateRoute>
          }
        />
        <Route
          path="Manage-users"
          element={
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          }
        />
        <Route
          path="add-item"
          element={
            <AdminRoute>
              <AddItem />
            </AdminRoute>
          }
        ></Route>
        <Route
          path="update-item/:id"
          element={
            <PrivateRoute>
              <UpdateItem />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="delete-item/:id"
          element={
            <PrivateRoute>
              <DeleteItem />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="my-wishlists"
          element={
            <PrivateRoute>
              <MyWishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="my-orders"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        ></Route>
      </Route> */}
      {/* ============= */}

      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/about-developer" element={<AboutDeveloper />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Routers;
