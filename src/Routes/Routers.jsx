import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Blogs from "../Pages/Blogs";
import Items from "../Pages/Items/Items";
import ItemDetails from "../Pages/Items/ItemDetails";
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
import CheckoutSuccess from "../Pages/CheckoutSuccess";
import { useAuth } from "../hooks/useAuth";

const Routers = () => {
  const { role } = useAuth();

  const getDashboardComponent = () => {
    if (role === "user") return <Profile />;
    if (role === "admin") return <Overview />;
    return <Home />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/contact-dealer" element={<ContactDealer />} />
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />

      <Route
        path="/items"
        element={
          <PrivateRoute>
            <Items />
          </PrivateRoute>
        }
      />
      <Route
        path="/items/:id"
        element={
          <PrivateRoute>
            <ItemDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={getDashboardComponent()} />
        <Route
          path="admin/manage-items"
          element={
            <AdminRoute>
              <ManageItems />
            </AdminRoute>
          }
        />
        <Route
          path="admin/manage-orders"
          element={
            <AdminRoute>
              <ManageOrders />
            </AdminRoute>
          }
        />
        <Route
          path="admin/manage-users"
          element={
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          }
        />
        <Route
          path="admin/add-item"
          element={
            <AdminRoute>
              <AddItem />
            </AdminRoute>
          }
        />

        <Route path="user/my-orders" element={<MyOrders />} />
        <Route path="user/my-wishlists" element={<MyWishlist />} />

        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/about-developer" element={<AboutDeveloper />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Routers;
