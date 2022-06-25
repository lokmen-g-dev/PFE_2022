import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";
import AddButto from './Ajoute';
import AddButton from './Modifier';


const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Ajouter/delete/${id}`, ).then((res) => {
    console.log(res.data)
    window.location.reload(true);
  })
  .catch((err) => {
    console.log(err);
  });
}


const columns = [
  {
    field: 'name',
    headerName: 'Nom',
    width: 230,
   
  },
  {
    field: 'ip',
    headerName: 'IP address',
    width: 240,
    
  },
  {
    field: 'mgmt_if',
    headerName: 'Nom utilisateur ',
    width: 230,

  },
  
  {
    field: 'Configurer',
    headerName: 'Configurer' ,
    type: 'action',
    width: 240,
    
   

    renderCell: (params) => {
      const onClick = () => {
        const id = params.getValue(params.id, "id");
        handleDelete(id);
      }
      return (
        <Button  style={{ width: "100%", height: "100%", color: "#76abec" }}>
           <AddButto />
           
        </Button>
 
       )
      
     // <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
  
      }
      

      
  },
 
  

];



export default function DataGridDemo() {

  const [tableData, setTableData] = useState([]);
  const [tableData1, setTableData1] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/fortigate01").then((res) => {
      setTableData(res.data);
    });
  }, []);

  return (
    
    <div style={{ marginLeft:'9%',marginTop:'5%', height: 400, width: '75%' }}>
   
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
     
     

    </div>
  );
}