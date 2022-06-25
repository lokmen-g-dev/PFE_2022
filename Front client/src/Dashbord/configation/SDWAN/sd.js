import Sidebar from "Dashbord/Sidebar";
import NavBar from "Dashbord/NavBar";
import Datasdwa from "./sdwandata";
import Datazone from "./Datenewsdwanzone"

import AddButton from "./Creat _zone";
const Sdwan = () => {

        

  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <div style={{marginTop:"3%",marginLeft:"5%"}}>FortiManager : Configuration SD-WAN
</div>
<div style={{marginTop:"3%",marginLeft:"85%"}}>
<AddButton/>
</div>   
<Datazone />
<br></br>
Les configurations qu'il existe
        <Datasdwa />
       

  
      </div>
    </div>
  )
}

export default Sdwan