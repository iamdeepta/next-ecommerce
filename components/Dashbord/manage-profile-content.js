
const ManageProfile = () => {
  return (
    <section>
      <div className="profile-manage-wrap dashbord-content-wrap">
        <form className="profile-list">
          <h2>Profile</h2>
          <div className="profile-item">
            <h2>Name</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Email</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Phone</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Address</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Payment Method</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Account number</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>Role</h2>
            <input type="text" placeholder="Anik Routh" />
          </div>
          <div className="profile-item">
            <h2>photo</h2>
            <input type="file" placeholder="Anik Routh" />
          </div>
          <button type="submit">Update</button>
        </form>
        <div className="profle-footer">
          <h3>Password Change</h3>
        <div className="profile-item">
            <h2>Old Password</h2>
            <input type="text" placeholder="Old Password" />
          </div>
          <div className="profile-item">
            <h2>New Password</h2>
            <input type="text" placeholder="New Password" />
          </div>
          <div className="profile-item">
            <h2>Confirm Password</h2>
            <input type="text" placeholder="Confirm Password" />
          </div>
          <button type="submit">Change</button>
        </div>
      </div>
    </section>
  );
};
export default ManageProfile;
