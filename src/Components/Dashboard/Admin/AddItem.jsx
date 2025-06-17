import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../config";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${LOCAL_BASE_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Item created successfully!");
        reset();
      } else {
        toast.error("Failed to create item.");
      }
    } catch (err) {
      toast.error("Error creating item.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-2 text-primary fw-bold">Add New Item</h2>
      <div className="card shadow-sm border-0 p-4">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Item Name/Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Car Name/Model"
                {...register("name", { required: true })}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Seller Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Seller Email"
                {...register("sellerEmail")}
              />
            </div>
            {/* <div className="col-md-4">
            <label className="form-label">Supplier Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Supplier Name"
              {...register("supplier")}
            />
          </div> */}
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                {...register("quantity")}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                {...register("img")}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              rows="4"
              className="form-control"
              placeholder="Description: Engine, Trim, Transmission Type, Transmission"
              {...register("description")}
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5 py-2 fs-5">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
