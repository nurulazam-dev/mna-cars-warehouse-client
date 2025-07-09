import {
  useItemsStatistics,
  useUsersStatistics,
} from "../../../../../hooks/statisticsData";
import DashboardStatCard from "./DashboardStatCard";

const DashboardStats = () => {
  const { totalUsers, totalAdmins, totalRegularUsers } = useUsersStatistics();
  const { totalItems, totalBrands, totalQty, totalSuppliers } =
    useItemsStatistics();

  const stats = [
    {
      title: "Registered Users",
      value: totalUsers,
      bg: "bg-primary",
      icon: "bi-people-fill",
    },
    {
      title: "Admins",
      value: totalAdmins,
      bg: "bg-secondary",
      icon: "bi-person-check-fill",
    },
    {
      title: "Active Users",
      value: totalRegularUsers,
      bg: "bg-success",
      icon: "bi-person-check",
    },
    {
      title: "Suppliers",
      value: totalSuppliers,
      bg: "bg-info",
      icon: "bi-person-lines-fill",
    },
    {
      title: "Total Items",
      value: totalItems,
      bg: "bg-dark",
      icon: "bi-box-seam-fill",
    },
    {
      title: "Total Brands",
      value: totalBrands,
      bg: "bg-warning",
      icon: "bi-tags-fill",
    },
    {
      title: "Total Quantities",
      value: totalQty,
      bg: "bg-primary",
      icon: "bi-archive-fill",
    },
  ];

  return (
    <section className="mt-4">
      <div className="row">
        {stats?.map((stat, idx) => (
          <DashboardStatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default DashboardStats;
