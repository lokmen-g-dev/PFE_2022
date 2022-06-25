import React, { useState, useEffect} from "react";
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

//The useParams() hook helps us to access the URL parameters from a current route. 
  const [showModal, setShowModal] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setShowModal(false);
    setIsOpen(false);

  };
  //get tous les operateurs
  const [tableData, setTableData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:5000/operateur/overview").then((res) => {
      setTableData(res.data);
    });
  }, []);
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/operateur/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// ajouter
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    axios
      .post("http://localhost:5000/operateur/signin", formData)
      .then((res) => {
        console.log(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Operateur ajouté avec succés")
  };
  //end
  const [operateur, Setoperateur] = useState([]);
  const handleChangeupdate = (e) => {
    Setoperateur({ ...operateur, [e.target.name]: e.target.value });
  };

  const handleget = (id) => {
    axios
      .get(`http://localhost:5000/operateur/gets/${id}`)
      .then((res) => {
        Setoperateur(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleupdate = async (e) => {
    e.preventDefault();
    await
    axios
      .patch(`http://localhost:5000/operateur/update/${operateur.id}`, operateur)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Modifié avec succés")
      handleClose ();
      window.location.reload();
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Listes des Operateurs</Card.Title>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="btn btn-primary" onClick={() => setShowModal(true)}>Ajouter Operateur</Button></div>
              </Card.Header>
            
              <Modal show={showModal} md="12"  onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                  <Modal.Title>Ajouter operateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form class="row g-3"onSubmit={handleSubmit} >
                <div className="col-md-6">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Nom
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        name="name"
                        onChange={handleChange}
                      />
                      </div>
                      <div className="col-md-6">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Tel
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        name="tel"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Email
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                       Mot de passe
                      </label> 
                      <input
                        type="password"
                        className="form-control"
                        id="validationDefault01"
                        required
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <label
                          class="form-check-label"
                          for="invalidCheck2"
                        ></label>
                      </div>
                    </div>
                    <div className="col-12">
                    <button className="btn btn-danger" onClick={handleClose} style={{marginRight:"10px"}}>
                        Annuler
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Ajouter
                      </button>
                    </div>
                </form>
                </Modal.Body>
              </Modal>
          
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Tel</th>
                      <th>Modifier/supprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                  {tableData.map((name)=>
                <tr>
                <td>{name.name}</td>
                <td>{name.email}</td>
                <td>{name.tel}</td>
                <td>
                <Button className="btn btn-warning" style={{marginRight:"10px"}} onClick={(e) =>{handleget(name.id) ,setIsOpen(true)}}><i className="fa fa-edit" aria-hidden="true">
                          </i></Button>
                      <Button className="btn btn-danger"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Voulez-vous vraiment supprimer l'operateur "+ name.name 
                          )
                          if (confirmBox === true) {
                            handleDelete(name.id)
                          }
                        }}> <i className="far fa-trash-alt" style={{fontSize:"18px"}}></i> </Button>

                       
                        
                </td>
                </tr>
                )} 
                  </tbody>
                </Table>
                <Modal show={isopen} onHide={() => setIsOpen(false)} md="12">
                <Modal.Header closeButton>
                  <Modal.Title>Modifier operateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="row g-3"onSubmit={handleupdate} >
                <div className="col-md-6">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Nom
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={operateur.name}
                        name="name"
                        onChange={handleChangeupdate}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Tel
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={operateur.tel}
                        name="tel"
                        onChange={handleChangeupdate}
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                        Email
                      </label> 
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={operateur.email}
                        name="email"
                        onChange={handleChangeupdate}
                      />
                    </div>
                    <div className="col-md-12">
                      <label
                        for="validation"
                        className="form-label is-required"
                      >
                       Mot de passe
                      </label> 
                      <input
                        type="password"
                        className="form-control"
                        id="validationDefault01"
                        required
                        name="password"
                        value={operateur.password}
                        onChange={handleChangeupdate}
                      />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <label
                          class="form-check-label"
                          for="invalidCheck2"
                        ></label>
                      </div>
                    </div>
                    <div className="col-12">
                    <button className="btn btn-danger" onClick={handleClose} style={{marginRight:"10px"}}>
                        Annuler
                      </button>
                      <button  className="btn btn-primary"  type="submit">
                        Modifier
                      </button>
                    </div>
                </form>
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
