import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";



const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Client/sdwan`, ).then((res) => {
    console.log(res.data)
    window.location.reload(true);
  })
  .catch((err) => {
    console.log(err);
  });
}


const columns = [
  {
    field: 'zone ',
    headerName: 'zone ',
    width: 190,
   
  },
  {
    field: 'Members',
    headerName:'Members',
    width: 190,
    
  },
  {
    field: 'Memberss',
    headerName: 'Memberss',
    width: 190,

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



export default function DataGridDemo() {

  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.post("http://172.29.24.51/logincheck").then((res) => {
      setTableData(res.ccsrftoken);
    });
  }, []);
 
  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/sdwan") .then((res) => {
      setTableData(res.data);
    });
  }, []);
 

  return (
    <div style={{ marginTop:'', height: 400, width: '100%' }}>
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