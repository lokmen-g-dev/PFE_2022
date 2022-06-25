import React, { useState, useEffect} from "react";
import ChartistGraph from "react-chartist";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Chart from "./chart/Chart.jsx";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const params = useParams()
  console.log(params)
  //nb alert
 const [datale,setDataLe]=useState()
  

    //nb userss
    
    const [datalen,setDataLen]=useState()
    const [datal,setDataL]=useState();
    useEffect(async () => {
      //alert liset nb
      axios.get("http://localhost:5000/alert/send").then((res) => {
     
        setDataLe(res.data.length)
        console.log(res.data.length)
       
      })
      // client list nb
      
      const token= await localStorage.getItem("access_token")
      console.log(token)
      axios.get("http://localhost:5000/Client/list", { headers: {"Authorization" : `${token}`} } ).then((res) => {
     
       setDataLen(res.data.length)
        console.log(res.data.length)
       
      });
      //liste en attent
      const token1= await localStorage.getItem("access_token")

      axios.get("http://localhost:5000/Client/listatt", { headers: {"Authorization" : `${token1}`} } ).then((res) => {
     
        setDataL(res.data.length)
        console.log(res.data.length)
      })

      
     
    }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Users</p>
                      
                      <Card.Title as="h4">{datalen}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tv-2 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="15">
                    <div className="numbers">
                      <p className="card-category">Reclamation</p>
                      <Card.Title as="h4">{datale}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Nouvelle Inscription</p>
                      <Card.Title as="h4">{datal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
                
        </Row>
        <Row>
          <Col md="12">
            <Card style={{width:"64%"}}>
              <Card.Header>
                <Card.Title as="h4">Nombre de client en 6 derniers mois
</Card.Title>
              </Card.Header>
              <Card.Body  >
              <div className="charts">
        <Chart  aspect={2/ 1} />
      </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Dashboard;
