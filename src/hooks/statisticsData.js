import { useItems } from "./useItems";
import { useUsers } from "./useUsers";
import { useAllOrders } from "./useAllOrders";
import { useMyOrders } from "./useMyOrders";

// User statistics hook
export const useUsersStatistics = () => {
  const { users } = useUsers();

  const totalUsers = users?.length || 0;
  const totalAdmins = users?.filter((u) => u.role === "admin").length || 0;
  const totalRegularUsers = users?.filter((u) => u.role === "user").length || 0;

  return {
    totalUsers,
    totalAdmins,
    totalRegularUsers,
  };
};

// Item statistics hook
export const useItemsStatistics = () => {
  const { items } = useItems();

  const totalItems = items?.length || 0;
  const totalQty = items?.reduce(
    (acc, item) => acc + (Number(item.quantity) || 0),
    0
  );
  const totalBrands = new Set((items || []).map((item) => item.brand)).size;
  const totalSuppliers = new Set(
    (items || []).map((item) => item.supplierEmail)
  ).size;

  return {
    totalItems,
    totalBrands,
    totalQty,
    totalSuppliers,
  };
};

// Order statistics hook
export const useOrdersStatistics = () => {
  const { orders } = useAllOrders();

  const totalOrders = orders?.length || 0;
  const totalUniqueBuyers = new Set((orders || []).map((o) => o.email)).size;
  let totalOrderQty = 0;
  let totalSalesAmount = 0;
  let pendingOrderCount = 0;
  let processingOrderCount = 0;
  let completedOrderCount = 0;
  let cancelledOrderCount = 0;

  (orders || []).forEach((order) => {
    totalOrderQty += (order?.items || []).reduce(
      (sum, item) => sum + (Number(item?.quantity) || 0),
      0
    );
    totalSalesAmount += (order?.items || []).reduce(
      (sum, item) => sum + (Number(item?.price) || 0) * (item?.quantity || 1),
      0
    );
    const status = (order?.status || "").toLowerCase();
    if (status === "pending") pendingOrderCount++;
    else if (status === "processing") processingOrderCount++;
    else if (status === "completed") completedOrderCount++;
    else if (status === "cancelled") cancelledOrderCount++;
  });

  return {
    totalOrders,
    totalUniqueBuyers,
    totalOrderQty,
    totalSalesAmount,
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
  };
};

// My-Order statistics hook
export const useMyOrdersStatistics = () => {
  const { myOrders } = useMyOrders();

  const totalMyOrders = myOrders?.length || 0;
  const totalMyOrderQty = myOrders?.reduce(
    (acc, order) =>
      acc +
      (order?.items?.reduce(
        (sum, item) => sum + (Number(item?.quantity) || 0),
        0
      ) || 0),
    0
  );

  const totalMyOrderAmount = myOrders?.reduce(
    (acc, order) =>
      acc +
      (order?.items?.reduce(
        (sum, item) => sum + (Number(item?.price) || 0) * (item?.quantity || 1),
        0
      ) || 0),
    0
  );

  // Status counts
  const pendingMyOrder =
    myOrders?.filter(
      (order) => (order?.status || "").toLowerCase() === "pending"
    ).length || 0;
  const processingMyOrder =
    myOrders?.filter(
      (order) => (order?.status || "").toLowerCase() === "processing"
    ).length || 0;
  const completedMyOrder =
    myOrders?.filter(
      (order) => (order?.status || "").toLowerCase() === "completed"
    ).length || 0;
  const cancelledMyOrder =
    myOrders?.filter(
      (order) => (order?.status || "").toLowerCase() === "cancelled"
    ).length || 0;

  return {
    totalMyOrders,
    totalMyOrderQty,
    totalMyOrderAmount,
    pendingMyOrder,
    processingMyOrder,
    completedMyOrder,
    cancelledMyOrder,
  };
};
