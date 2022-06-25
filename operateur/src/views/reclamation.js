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
  const [isopen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);

  };
  const [tableData, setTableData] = useState([]);
  const History = useHistory();

  useEffect(async () => {
    const token = localStorage.getItem("access_token");
    await axios
      .get("http://localhost:5000/alert/getalerts", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTableData(res.data);
        console.log(tableData);
        
      });
  }, []);
  const [idR, setId] = useState();
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  const handleSubmit = (e) => {

    console.log(idR)

    e.preventDefault();

    console.log("submitted");

    axios
      .post(`http://localhost:5000/alert/reponse/${idR}`, formData)
      .then((res) => {
        console.log(res.data);
      
       
        window.location.reload(true);
       
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Reclamation envoyer")
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Listes des réclamations</Card.Title>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Objet</th>
                      <th>Email</th>
                      <th>Description</th>
                      <th>Détail</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((name) => (
                      <tr>
                        <td>{name.Objet}</td>
                        <td>{name.email}</td>
                        <td>{name.description}</td>
                        <td><Button className="btn btn-primary" style={{marginRight:"10px"}} onClick={(e) => {setId(name.id); setIsOpen(true)}}><i className="far fa-envelope-open	" aria-hidden="true">
                          </i></Button></td>
                        
                        <td>
                          <Button
                            className="btn btn-danger"
                            onClick={() => {
                              const confirmBox = window.confirm(
                                "Voulez-vous vraiment supprimer la reclamation " +
                                  name.Objet
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
                <Modal show={isopen} onHide={() => setIsOpen(false)} md="12">
                <Modal.Header closeButton>
                  <Modal.Title>Réclamation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit} >
                <div className="col-md-12">
                <textarea
                              name="Reponse"
                              cols="50"
                              rows="10"
                              onChange={
                                handleChange
                              }
                              
                              required
                            />
                    </div>
                  
                    <br></br>
                    <div className="col-12">
                    <button className="btn btn-danger" onClick={handleClose} style={{marginRight:"10px"}}>
                        Annuler
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Envoyer
                      </button>
                    </div>
                </Form>
                </Modal.Body>
              </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
