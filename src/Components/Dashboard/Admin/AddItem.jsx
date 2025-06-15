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
      <h2 className="text-primary text-center">Add new item</h2>
      <form
        className="d-flex flex-column w-full"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="d-flex justify-content-between w-full">
          <div className="mb-3 w-50">
            <label className="mb-1">Item Name/Model</label>
            <input
              className="form-control border-0 rounded p-2"
              placeholder="Car Name/Model"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-3 w-50">
            <label className="mb-1">Seller Email</label>
            <input
              className="form-control border-0 rounded p-2"
              placeholder="Seller Email"
              type="email"
              {...register("sellerEmail")}
            />
          </div>
        </div>
        {/* <input
          className="mb-3 border-0 rounded p-2"
          placeholder="Supplier"
          {...register("supplier")}
        /> */}

        <div className="d-flex justify-content-between w-full">
          <div className="mb-3 w-25">
            <label className="mb-1">Item Price</label>
            <input
              className="form-control border-0 rounded p-2"
              placeholder="Price"
              type="number"
              {...register("price", { required: true })}
            />
          </div>
          <div className="mb-3 w-25">
            <label className="mb-1">Item Quantity</label>
            <input
              className="form-control border-0 rounded p-2"
              placeholder="Quantity"
              type="number"
              {...register("quantity")}
            />
          </div>
          <div className="mb-3 w-25">
            <label className="mb-1">Item Image URL</label>
            <input
              className="form-control fs-6 border-0 rounded p-2"
              placeholder="Image URL"
              type="text"
              {...register("img")}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-1">Item Description</label>
          <textarea
            className="form-control p-2 border-0 rounded p-2"
            placeholder="Description: Engine, Trim, Transmission Type, Transmission"
            {...register("description")}
          />
        </div>

        <input
          className="bg-success text-white border-0 rounded py-2 fs-5 mb-4"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
