import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LOCAL_BASE_URL } from "../../../config";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  /*   const handleOnSubmit = (data, event) => {
    const url = `${LOCAL_BASE_URL}/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        event.target.reset();
        toast(" Item Added Successfully");
      });
  }; */
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
    <div className="w-50 mx-auto border my-3 p-2 rounded bg-light pb-3 shadow">
      <h2 className="text-primary text-center my-3">Add new item</h2>
      <form
        className="d-flex flex-column w-full px-5 mx-auto"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <input
          className="mb-3 border-0 rounded p-2"
          placeholder="Car Name/Model"
          {...register("name", { required: true })}
        />
        {/* <input
          className="mb-3 border-0 rounded p-2"
          placeholder="Supplier"
          {...register("supplier")}
        /> */}
        <input
          className="mb-3 border-0 rounded p-2"
          placeholder="Seller Email"
          type="email"
          {...register("sellerEmail")}
        />
        <div className="d-flex justify-content-between">
          <input
            className="mb-3 border-0 rounded p-2"
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
          />
          <input
            className="mb-3 border-0 rounded p-2"
            placeholder="Quantity"
            type="number"
            {...register("quantity")}
          />
        </div>
        <textarea
          className="mb-3 p-2 border-0 rounded p-2"
          placeholder="Description: Engine, Trim, Transmission Type, Transmission"
          {...register("description")}
        />
        <input
          className="mb-3 fs-6 border-0 rounded p-2"
          placeholder="Image URL"
          type="text"
          {...register("img")}
        />
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
