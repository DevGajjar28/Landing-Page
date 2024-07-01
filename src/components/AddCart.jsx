import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import "./About.css";
import TestimonialCard from "./TestimonialCard";

const AddCart = () => {
  return (
    <>
      <div className="center-box">
        <Card style={{ borderRadius: "10px", width: "80%" }}>
          <Card.Body>
            <Row>
              <Col
                md={1}
                className="d-flex align-items-center justify-content-center"
              >
                <FaPlusCircle size={30} color="#007bff" />
              </Col>
              <Col md={11}>
                <Card.Title className="d-flex align-items-center">
                  <span className="ml-2">Add your own</span>
                </Card.Title>
                <Card.Text>
                  Are you a teacher or expert? Do you sell or rent out
                  equipment, venue, or event tickets? Or, do you know someone
                  who should be on hobbycue? Go ahead and add your own page.
                </Card.Text>
                <Button variant="outline-primary">Add new</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <TestimonialCard />
    </>
  );
};

export default AddCart;
