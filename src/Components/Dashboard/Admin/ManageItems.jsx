import { toast } from "react-toastify";
import { useItems } from "../../../hooks/useItems";
import { LOCAL_BASE_URL } from "../../../config";

const ManageItems = () => {
  const { items, loading, refetch } = useItems();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${LOCAL_BASE_URL}/items/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          toast.success("Item deleted");
          refetch();
        } else {
          toast.error("Delete failed");
        }
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Manage Items</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Seller</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item?._id}>
              <td>{item?.name}</td>
              <td>{item?.price}</td>
              <td>{item?.sellerEmail}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item?._id)}
                >
                  Delete
                </button>
                {/* Add Edit Button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
