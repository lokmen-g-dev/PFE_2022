import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Button } from "@material-ui/core";

export default function DataTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(async () => {
    const token = localStorage.getItem("access_token");
    await axios
      .get("http://localhost:5000/alert/send", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTableData(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/Alert/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    { field: "Objet", headerName: "Objet", width: 180 },
    { field: "description", headerName: "Description", width: 240 },
    {
      field: "Détail",
      headerName: "Détail",
      width: 180,
      type: "actions",

      renderCell: (params) => {
        const onClick = () => {
          const id = params.getValue(params.id, "id");
          //handleDelete(id);
        };
        return (
          <Button
            onClick={() => {
              onClick();
            }}
            style={{ width: "100%", height: "100%", color: "#76abec" }}
          >
            <OpenInNewIcon></OpenInNewIcon>
          </Button>
        );

        // <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,

      renderCell: (params) => {
        const onClick = () => {
          const id = params.getValue(params.id, "id");
          handleDelete(id);
        };
        return (
          <Button
            onClick={() => {
              onClick();
            }}
            style={{ width: "100%", height: "100%", color: "#76abec" }}
          >
            <DeleteIcon></DeleteIcon>
          </Button>
        );

        // <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      },
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "transparent",
        border: "0px",
        borderRadius: "10px",
        height: 450,
        width: "58%",
        marginLeft: "20%",
        marginTop: 50,
        paddingLeft: "0px",
      }}
    >
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}
