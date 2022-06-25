import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";

const handleDelete = (id) => {
  axios
    .delete(`http://localhost:5000/Ajouter/delete/${id}`)
    .then((res) => {
      console.log(res.data);
      window.location.reload(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

const columns = [
  {
    field: "name",
    headerName: "Nom",
    width: 190,
  },
  {
    field: "ip",
    headerName: "IP address",
    width: 210,
  },
  {
    field: "user",
    headerName: "Nom utilisateur ",
    width: 220,
  },
  {
    field: "password",
    headerName: "Mot de passe",
    width: 240,
  },

  
];

export default function DataGridDemo() {
  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/ajouter/user").then((res) => {
      setTableData(res.data);
    });
  }, []);

  return (
    <div
      style={{ marginLeft: "10%", marginTop: "5%", height: 400, width: "75%" }}
    >
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
