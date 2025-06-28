export const formatDate = (dateString) => {
  if (!dateString) return "N/A";

  try {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  } catch (err) {
    console.error("Invalid date:", dateString);
    return "Invalid Date";
  }
};
