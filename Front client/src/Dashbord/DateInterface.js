import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";
import AddButto from './Ajoute';


const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Client/fortigate`, ).then((res) => {
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
    headerName: 'Port',
    width: 190,
   
  },
  {
    field: 'mgmt_if',
    headerName: 'IP address & Masque de réseau',
    width: 280,
    
  },
  {
    field: 'ip',
    headerName: 'permettre l accès ',
    width: 250,

  },


  {
    field: 'actions',
    headerName: 'Actions' ,
    type: 'actions',
    width: 190,
    
   

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



export default function Datainterface() {

  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/fortigate").then((res) => {
      setTableData(res.data);
    });
  }, []);
 

  return (
    
    <div style={{ marginTop:'', height: 500, width: '100%' }}>
   
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        disableSelectionOnClick
      />


    </div>
  );
}