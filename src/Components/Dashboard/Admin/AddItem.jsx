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
          {/* Row 1: Name & Supplier Email */}
          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">Item Name / Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Car Name / Model"
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                {...register("img")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Supplier Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Supplier Email"
                {...register("supplierEmail")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Color</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Black"
                {...register("color")}
              />
            </div>
          </div>

          {/* Row 2: Price, Quantity, Image */}
          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                {...register("quantity")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Year</label>
              <input
                type="number"
                className="form-control"
                placeholder="e.g. 2022"
                {...register("year")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                placeholder="Brand Name"
                {...register("brand")}
              />
            </div>
          </div>

          {/* Row 3: Badge, Brand, Year */}
          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">Badge</label>
              <select className="form-select" {...register("badge")}>
                <option value="">-- Select Badge --</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Featured">Featured</option>
                <option value="Hot Deal">Hot Deal</option>
                <option value="Special">Special</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Transmission</label>
              <select className="form-select" {...register("transmission")}>
                <option value="">-- Select Type --</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Mileage</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. 25,000 km"
                {...register("mileage")}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Dhaka, Bangladesh"
                {...register("location")}
              />
            </div>
          </div>

          {/* Row 6: Specs */}
          <div className="mb-3">
            <label className="form-label">Specifications</label>
            <div className="row">
              {[0, 1, 2, 3].map((index) => (
                <div className="col-md-3 mb-2" key={index}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Specification ${index + 1}`}
                    {...register(`specs.${index}`)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
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
