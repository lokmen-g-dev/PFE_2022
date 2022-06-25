import "./list.scss"
//import Sidebar from "Dash/src/components/sidebar/Sidebar"
//import Sidebar from "Dash/src/components/sidebar/Sidebar"
import Sidebar from "./Sidebar"
//import Navbar from "Dash/src/components/navbar/Navbar"
import NavBar from "./NavBar";
//import Datatable from "../../components/datatable/Datatable"
//import Datatable from "Dash/src/components/datatable/Datatable"
import Datatable from "./Datatable";
import AddButts from "./Fortimanager";
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <div style={{marginTop:"20px",marginLeft:"85%"}}>
        < AddButts/></div>
<div style={{marginTop:"20px",marginLeft:"5%"}}>Votre fortimanager</div>
        <Datatable/>
      </div>
    </div>
  )
}

export default List