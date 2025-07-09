import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useUsersStatistics } from "../../../../hooks/statisticsData";
import { useUsers } from "../../../../hooks/useUsers";

const DistributionPieChart = () => {
  const COLORS = ["#ffc107", "#0dcaf0", "#FFBB28"];
  const { totalAdmins, totalRegularUsers } = useUsersStatistics();
  const { users } = useUsers();

  const userRolesData = [
    { name: "Admins", value: totalAdmins || 50 },
    { name: "Users", value: totalRegularUsers || 756 },
  ];

  return (
    <section className="mb-4 shadow-sm rounded border p-3">
      <h1 className="text-center text-secondary fs-2 fw-bold border-bottom pb-2">
        User Roles Distribution
      </h1>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <PieChart width={300} height={250}>
            <Pie
              data={userRolesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {userRolesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="col-md-8">
          <h5 className="mb-2 text-secondary">Recent Registered Users</h5>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark text-center">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {[...(users || [])]
                .reverse()
                .slice(0, 5)
                .map((user) => (
                  <tr key={user?._id}>
                    <td>...{user?._id?.slice(-9)}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="text-center">
                      {user?.phone ? (
                        user?.phone
                      ) : (
                        <p className="m-0 text-danger">N/A</p>
                      )}
                    </td>
                    <td className="text-center">{user?.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DistributionPieChart;
