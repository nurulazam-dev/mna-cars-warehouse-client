import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, token } = useAuth();
  const location = useLocation();
  if (!user || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
