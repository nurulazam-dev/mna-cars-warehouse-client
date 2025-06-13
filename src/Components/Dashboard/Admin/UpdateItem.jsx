import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useItem } from "../../../hooks/useItem";
import { useEffect } from "react";
import { LOCAL_BASE_URL } from "../../../config";

const UpdateItem = () => {
  const { id } = useParams();
  const { item, loading } = useItem(id);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (item) reset(item);
  }, [item, reset]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Item updated successfully!");
      } else {
        toast.error("Failed to update item.");
      }
    } catch (err) {
      toast.error("Error updating item.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" {...register("name")} required />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            {...register("price")}
            required
          />
        </div>

        <div className="mb-3">
          <label>Seller Email</label>
          <input
            type="email"
            className="form-control"
            {...register("sellerEmail")}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
