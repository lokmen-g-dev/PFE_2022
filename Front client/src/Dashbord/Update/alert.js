import Sidebar from "Dashbord/Sidebar";
import NavBar from "Dashbord/NavBar";
import Envoyer from "./Env";
import DataTable from "./table";
import AddButton from "./Add";
const Set = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <div style={{ marginLeft: 1200, marginTop: 10, marginBottom: 7 }}>
          <AddButton />
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default Set;
