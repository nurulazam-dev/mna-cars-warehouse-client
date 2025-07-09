const DashboardStatCard = ({ title, value, bg, icon }) => {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <div className={`card text-white shadow h-100 ${bg}`}>
        <div className="card-body">
          <h6 className="text-uppercase fw-bold mb-1">{title}</h6>
          <div className=" d-flex align-items-center justify-content-between">
            <div>
              <h2 className="fw-bold">{value}</h2>
            </div>
            <div className="display-6 opacity-75">
              <i className={`bi ${icon}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
