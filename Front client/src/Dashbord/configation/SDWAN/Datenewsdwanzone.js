import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-ui/core";




const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/Client/zone/${id}` ).then((res) => {
    console.log(res.data)
    window.location.reload(true);
  })
  .catch((err) => {
    console.log(err);
  });
}


const columns = [
  {
    field: 'Nom',
    headerName: 'Nom',
    width: 190,
   
  },
  {
    field: 'interface',
    headerName:'interface',
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



export default function DataZone() {

  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.post("http://172.29.24.51/logincheck").then((res) => {
      setTableData(res.ccsrftoken);
    });
  }, []);
 
  useEffect(async () => {
    await axios.get("http://localhost:5000/Client/zone") .then((res) => {
      setTableData(res.data);
    });
  }, []);
 

  return (
    <div style={{ marginTop:'5%', marginLeft:'18%', height: 400, width: '60%' }}>
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