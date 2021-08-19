const ServicePoint = () => {
  return (
    <div className="form-block">
      <form className="form">
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="Supplier Name"
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
        <div class="form-group">
          <label>Product Category</label>
          
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              Grocery item
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label class="form-check-label" for="defaultCheck2">
              Garments &amp; Leather item
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck3"
            />
            <label class="form-check-label" for="defaultCheck3">
              Electronics item
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck4"
            />
            <label class="form-check-label" for="defaultCheck4">
              Homemade Ready meals
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck5"
            />
            <label class="form-check-label" for="defaultCheck5">
              Agricultural item
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck6"
            />
            <label class="form-check-label" for="defaultCheck6">
              Accessorise &amp; parts
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck7"
            />
            <label class="form-check-label" for="defaultCheck7">
              Ready to cook products
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck8"
            />
            <label class="form-check-label" for="defaultCheck8">
              Cosmetic item
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck9"
            />
            <label class="form-check-label" for="defaultCheck9">
              Book &amp; stationary items
            </label>
          </div>
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
