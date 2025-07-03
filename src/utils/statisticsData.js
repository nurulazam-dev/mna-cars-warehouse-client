import { useMemo } from "react";
import { useItems } from "../hooks/useItems";
import { useUsers } from "../hooks/useUsers";
import { useAllOrders } from "../hooks/useAllOrders";

export const usersStatistics = () => {
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

export const itemsStatistics = () => {
  const { items } = useItems();

  const totalItems = items?.length || 0;

  const totalQty = items?.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const totalBrands = useMemo(
    () => new Set((items || []).map((item) => item.brand)).size,
    [items]
  );

  const totalSuppliers = useMemo(
    () => new Set((items || []).map((item) => item.supplierEmail)).size,
    [items]
  );

  return {
    totalItems,
    totalBrands,
    totalQty,
    totalSuppliers,
  };
};

export const ordersStatistics = () => {
  const { orders } = useAllOrders();

  const {
    totalOrders,
    totalUniqueBuyers,
    totalOrderQty,
    totalSalesAmount,
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
  } = useMemo(() => {
    const totalOrders = orders?.length || 0;
    const totalUniqueBuyers = new Set(orders?.map((o) => o.email)).size || 0;
    let totalOrderQty = 0;
    let totalSalesAmount = 0;
    let pendingOrderCount = 0;
    let processingOrderCount = 0;
    let completedOrderCount = 0;
    let cancelledOrderCount = 0;

    (orders || []).forEach((order) => {
      totalOrderQty += order?.items?.length || 0;
      totalSalesAmount += (order?.items || []).reduce(
        (sum, item) => sum + (Number(item?.price) || 0),
        0
      );
      const status = order?.status?.toLowerCase();
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
  }, [orders]);

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
