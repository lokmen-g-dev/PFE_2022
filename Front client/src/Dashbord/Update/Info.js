import Sidebar from "Dashbord/Sidebar";
import NavBar from "Dashbord/NavBar";
import { Link } from "react-router-dom";
import Datatable from "Dashbord/Donner";
const Info = () => {
    
  return (
      
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <Datatable />
        <Link to="/Update">
        <spam style={{ textDecoration: "nano" }}>Modifier</spam>
        </Link> 
      </div>
    </div>
  )
}

export default Info
