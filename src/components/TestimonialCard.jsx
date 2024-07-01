import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import mp3 from "../assets/mp3.png";
import "./styles.css";

const TestimonialCard = () => {
  return (
    <div className="center-box1" style={{ marginTop: "5%" }}>
      <div className="card-content1">
        <Card.Body>
          <Card.Title className="mt-3">
            <FaQuoteLeft
              size={30}
              color="#8064A2"
              style={{ marginRight: "10px" }}
            />
            Testimonials
          </Card.Title>
          <Card.Text>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </Card.Text>
          <div className="audio-player" style={{ display: "flex" }}>
            <audio controls style={{ width: "600px" }}>
              <source src="path_to_audio_file.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/*  */}
            <div className="image-wrapper">
              <Image src={mp3} roundedCircle fluid />
            </div>
            <div style={{ marginLeft: "2%" }}>
              <strong>Shubha Nagarajan</strong>
              <br></br>

              <div className="text-muted">Classical Dancer</div>
            </div>
          </div>
          <Row className="mt-4">
            <Col xs={3} md={2}></Col>
            <Col
              xs={9}
              md={10}
              className="d-flex flex-column justify-content-center"
            ></Col>
          </Row>
        </Card.Body>
      </div>
    </div>
  );
};

export default TestimonialCard;
