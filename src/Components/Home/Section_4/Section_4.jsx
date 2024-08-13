import React from "react";
import Section_4 from "../Section_4/Section_4.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img_4 from "../Section_4/section5_4.jpg";
import img_5 from "../Section_4/section5_5.jpg";
import img_6 from "../Section_4/section5_6.jpg";
import img_7 from "../Section_4/section5_7.jpg";

const Section4 = () => {
  return (
    <div id="Section4">
      <Container>
        <Row id="Section4_title_row">
          <div className={Section_4.Section4_hr}></div>
          <h1 className={Section_4.Section4_latest}>LATEST PRODUCT</h1>
          <div className={Section_4.Section4_hr}></div>
        </Row>
      </Container>
      <Container id="Section4_container">
        <Row>
          <Col lg={5} id="Section4_col_1">
            <div className={Section_4.Section4_back}>
              <img src={img_6} className={Section_4.Section4_img_1}></img>
              <h1 className={Section_4.Section4_p}>GIRL CRUSH LOOK</h1>
            </div>
          </Col>
          <Col lg={7} id="Section4_col_2">
            <div className={Section_4.Section4_back}>
              <img src={img_4} className={Section_4.Section4_img_2}></img>
              <h1 className={Section_4.Section4_p}>SHOES</h1>
            </div>
            <div className={Section_4.Section4_back}>
              <img src={img_5} className={Section_4.Section4_img_3}></img>
              <h1 className={Section_4.Section4_p}>DAILY LOOK</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Section4;
