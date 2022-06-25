import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";


const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Client/interface`, ).then((res) => {
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
    headerName: 'permettre l accès',
    width: 280,
    
  },
  {
    field: 'ip',
    headerName: 'IP ',
    width: 250,

  },
  {
    field: 'nom_fortigate',
    headerName: 'nom_fortigate ',
    width: 250,

  },


  

];

const columns1 = [
    {
      field: 'name',
      headerName: 'Port',
      width: 190,
     
    }
  
    
  
  ];


export default function Datainterface_01() {

  const [tableData, setTableData] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/interface").then((res) => {
      setTableData(res.data);
      console.log(res.data.nom_fortigate)

    });
  }, []);
  const [client, setclient] = useState([]);
useEffect(async () => {
    await axios.get("http://localhost:5000/Client/fortigate").then((res) => {
        setclient(res.data);
        console.log(client.nom_fortigate)
    });
  }, []);

  
 

  return (
    
    <div style={{ marginTop:'5%',marginLeft:'10%', height: 500, width: '80%' }}>
   
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