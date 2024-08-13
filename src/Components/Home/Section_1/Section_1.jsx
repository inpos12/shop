import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img_1 from "../Section_1/section1_1.png";
import img_2 from "../Section_1/section1_2.png";
import Section_1 from "../Section_1/Section_1.module.css";

const Section1 = () => {
  return (
    <>
      <Container id="Section1_container">
        <Row id="Section1_row">
          <Col lg={6} md={12} sm={12} className={Section_1.Section1_bg}>
            <div className={Section_1.Section1_title}>
              <h3>Accessories</h3>
              <h4>TIMELESS EVERYDAY OBJECTS</h4>
              <div className={Section_1.Section1_button}>View more</div>
            </div>
            <img src={img_1} id="Section1_img"></img>
          </Col>
          <Col lg={6} md={12} sm={12} className={Section_1.Section1_bg1}>
            <img src={img_2} id="Section1_img"></img>
            <div className={Section_1.Section1_title1}>
              <h3>Perfume</h3>
              <h4>TIMELESS EVERYDAY OBJECTS</h4>
              <div className={Section_1.Section1_button1}>View more</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Section1;
