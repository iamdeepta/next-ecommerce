import DashbordContnet from "../../components/Dashbord/dashbord-content";
import DashHead from "../../components/Dashbord/mb-sidebar";
const Dashbord = () => {

  return (
    <section className="dashbord-page">
      <DashHead />
      <div className="dashbord-body">
        <div className="dashbord-content">
          <div className="container">
            <div>
              <DashbordContnet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashbord;
