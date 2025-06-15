import { toast } from "react-toastify";
import { useItems } from "../../../hooks/useItems";
import { LOCAL_BASE_URL } from "../../../config";
import Loader from "../../Shared/Loader/Loader";

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

  if (loading) return <Loader />;

  return (
    <div className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">Manage Items</h2>

      {items?.length === 0 ? (
        <p className="text-center text-danger">No items found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Item Img</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={item?._id}>
                <td>{item?.index + 1}</td>
                <td>{item?.img}</td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>{item?.quantity}</td>
                <td>{item?.sellerEmail}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    // onClick={() => handleUpdate(item?._id)}
                  >
                    Update
                  </button>
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
      )}
    </div>
  );
};

export default ManageItems;
