import Sidebar from "Dashbord/Sidebar";
import NavBar from "Dashbord/NavBar";
import DataTable from "./table";
const Add = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <DataTable />
      </div>
    </div>
  )
}

  export default Add