import Sidebar from "Dashbord/Sidebar";
import NavBar from "Dashbord/NavBar";
import Datainterface_01 from "./policydata";
import AddButton from "./Addpolicy";
const DataPolicy = () => {

        

  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <div style={{marginTop:"3%",marginLeft:"5%"}}>FortiGate:Configuration Policy</div>
        <div style={{marginTop:"3%",marginLeft:"85%"}}> <AddButton/></div>

        <Datainterface_01 />
       

  
      </div>
    </div>
  )
}

export default DataPolicy