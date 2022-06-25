import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Form,
  Modal,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/Client/supprimer/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload(true);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
      .get("http://localhost:5000/Client/list", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTableData(res.data);
      });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Listes des utilisateur accepté</Card.Title>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Tel</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((name) => (
                      <tr>
                        <td>{name.name}</td>
                        <td>{name.email}</td>
                        <td>{name.tel}</td>
                        <td>{name.status}</td>
                        <td>
                          <Button
                            className="btn btn-danger"
                            onClick={() => {
                              const confirmBox = window.confirm(
                                "Voulez-vous vraiment supprimer l'utilisateur " +
                                  name.name
                              );
                              if (confirmBox === true) {
                                handleDelete(name.id);
                              }
                            }}
                          >
                            {" "}
                            <i
                              className="far fa-trash-alt"
                              style={{ fontSize: "18px" }}
                            ></i>{" "}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
