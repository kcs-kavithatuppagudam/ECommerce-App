import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";

const User = () => {
  const user = useSelector((state) => state.loginUser.user);
  // const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Header />
      
      <div style={{marginTop:"30px"}}>
      <div>Current User</div>
        <Container style={{marginTop:"10px"}}>
          <Row>
            <Col lg={{ span: 4, offset: 4 }}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{marginRight:"350px"}}>Name</Form.Label>
                  <Form.Control placeholder={user?.uname} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label  style={{marginRight:"350px"}}>Email</Form.Label>
                  <Form.Control placeholder={user?.emailid} disabled />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default User;
