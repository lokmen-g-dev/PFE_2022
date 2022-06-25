import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";


const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Client/policy/${id}`, ).then((res) => {
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
    width: 190,
   
  },
  {
    field: 'Dstaddr',
    headerName: 'Dstaddr',
    width: 190,
    
  },
  {
    field: 'srcaddr',
    headerName: 'srcaddr',
    width: 190,

  },
  {
    field: 'srcintf',
    headerName: 'srcintf',
    width: 210,
   
  
  },
  {
    field: 'dstintf',
    headerName: 'dstintf',
    width: 210,
   
  
  },
  
  {
    field: 'NAT',
    headerName: 'NAT',
    width: 210,
   
  
  },

  
  
  
  
  {
    field: 'actions',
    headerName: 'Supprimer' ,
    type: 'actions',
    width: 190,
    
   

    renderCell: (params) => {
      const onClick = () => {
        const id = params.getValue(params.id, "id");
        handleDelete(id);
      }
      return (
        <Button
          onClick={() => {
            onClick();
          }}
        >
          {" "}
          <i className="far fa-trash-alt" style={{ fontSize: "25px",color:"red" }}></i>{" "}
        </Button>
 
       )
      
     // <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
  
      }
      

      
  },


];



export default function Datainterface_01() {

  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/policy").then((res) => {
      setTableData(res.data);
    });
  }, []);
 

  return (
    
    <div style={{ marginTop:'5%',marginLeft:'5%', height: 400, width: '90%' }}>
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