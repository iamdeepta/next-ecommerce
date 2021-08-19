import Link from "next/link";
const ServicePoint = () => {
  return (
    <div className="form-block">
      <form className="form">
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Service Point Manager Name"
            type="text"
          />
        </div>
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Phone Number"
            type="text"
          />
        </div>
        <div className="form__input-row">
          <input className="form__input" placeholder="Email" type="text" />
        </div>
        <div className="form__input-row">
          <input className="form__input" placeholder="Address" type="text" />
        </div>
        <div className="form__input-row">
          <select class="form-control">
            <option value="">Select Payment Method </option>
            <option value="Mobile Banking"> Mobile banking</option>
            <option value="Bank"> Bank </option>
          </select>
        </div>
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Account number"
            type="text"
          />
        </div>
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Organization Name"
            type="text"
          />
        </div>
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Product Name"
            type="text"
          />
        </div>
        <div className="form__input-row">
          <label>Photo</label>
          <input
            className="form__input"
            type="file"
          />
        </div>
        <div className="form__input-row">
          <label>NID Front Side</label>
          <input
            className="form__input"
            type="file"
          />
        </div>
        <div className="form__input-row">
          <label>NID Back Side</label>
          <input
            className="form__input"
            type="file"
          />
        </div>
        <button
          type="button"
          className="btn btn--rounded btn--yellow btn-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServicePoint;
