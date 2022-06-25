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
  //get
  const [operateur, Setoperateur] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
      .get(`http://localhost:5000/operateur/get`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        Setoperateur(res.data);
      });
    console.log(operateur);
  }, []);

  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    Setoperateur({ ...operateur, [e.target.name]: e.target.value });
    console.log(operateur);
  };

  const handleSubmit = async () => {
    const token = await localStorage.getItem("access_token");
    console.log(token);
    axios
      .patch("http://localhost:5000/operateur/updat", operateur, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Modifié avec succés")
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Profil</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Nom</label>
                        <Form.Control
                          name="name"
                          placeholder="name"
                          type="text"
                          value={operateur.name}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          name="email"
                          placeholder="email"
                          type="email"
                          value={operateur.email}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Tel</label>
                        <Form.Control
                          name="tel"
                          placeholder="Tel"
                          type="text"
                          value={operateur.tel}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group>
                        <label>Mot de passe</label>
                        <Form.Control
                          name="password"
                          placeholder="mot de passe"
                          type="password"
                          value={operateur.password}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button className="btn-fill pull-right"  variant="info" type="submit">
                    Modifier
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
