import ManageContent from "../../components/Dashbord/manage-profile-content";
import DashHead from "../../components/Dashbord/mb-sidebar";

const ManageProfile = () => {
  return (
    <section className="dashbord-page">
      <DashHead />
      <div className="dashbord-body">
        <div className="profile-content dashbord-content">
          <div className="container">
            <div>
              <ManageContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ManageProfile;