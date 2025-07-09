import { useAuth } from "../../../../hooks/useAuth";
import { formatDate } from "../../../../utils/formatDate";

const WelcomeBanner = () => {
  const { user } = useAuth();

  return (
    <div
      className="card border-0 shadow-sm rounded-4 p-4 mb-4 position-relative overflow-hidden"
      style={{
        minHeight: "180px",
        backgroundImage: "linear-gradient(135deg,rgb(205, 225, 250), #ffffff)",
      }}
    >
      <div className="row g-4 align-items-center">
        {/* Admin Info */}
        <div className="col">
          <h2 className="fw-bold text-primary mb-1">
            Welcome back, {user?.name || "Admin"} 👋
          </h2>
          <p className="mb-2 text-muted">
            You're logged in as{" "}
            <span className="badge bg-success">{user?.role || "admin"}</span>
          </p>

          <div className="row">
            <div className="col-md-4">
              <small className="text-muted">📧 Email:</small>
              <div className="fw-semibold">
                {user?.email || "admin@example.com"}
              </div>
            </div>
            <div className="col-md-4">
              <small className="text-muted">📅 Joined On:</small>
              <div className="fw-semibold">
                {formatDate(user.createdAt) || "N/A"}
              </div>
            </div>
            <div className="col-md-4">
              <small className="text-muted">🛡️ Role:</small>
              <div className="fw-semibold text-capitalize">
                {user?.role || "admin"}
              </div>
            </div>
          </div>
        </div>
        {/* Admin Avatar */}
        <div className="col-auto">
          <div
            className="d-flex justify-content-center align-items-center shadow-md"
            style={{
              width: 120,
              height: 120,
            }}
          >
            <i
              className={`bi bi-person-circle text-secondary`}
              style={{ fontSize: 110 }}
            ></i>
            {/* {user?.name?.charAt(0)?.toUpperCase() || "A"} */}
          </div>
        </div>
      </div>

      {/* Decorative background bubble */}
      <div className="position-absolute top-0 end-50 opacity-25">
        <i className="bi bi-speedometer2 text-primary display-1"></i>
      </div>
    </div>
  );
};

export default WelcomeBanner;
