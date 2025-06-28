export const getOrderStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#ffc107"; // Yellow
    case "Processing":
      return "#0d6efd"; // Blue
    case "Completed":
      return "#198754"; // Green
    case "Cancelled":
      return "#dc3545"; // Red
    default:
      return "#6c757d"; // Gray
  }
};
