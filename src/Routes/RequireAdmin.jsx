import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequireAdmin = ({ children }) => {
  const { user, isAdmin } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;

  return children;
};

export default RequireAdmin;
