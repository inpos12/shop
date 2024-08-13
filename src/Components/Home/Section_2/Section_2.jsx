import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section_2 from "../Section_2/Section_2.module.css";
import img_1 from "../Section_2/section2_1.jpg";
import img_2 from "../Section_2/section2_2.jpg";
import img_3 from "../Section_2/section2_3.jpg";
import img_4 from "../Section_2/section2_4.jpg";

const Section2 = () => {
  return (
    <Container className={Section_2.Section2_container}>
      <Row id="Section2_title_row">
        <div className={Section_2.Section2_hr}></div>
        <h1 className={Section_2.Section2_title}>BEST PRODUCT</h1>
        <div className={Section_2.Section2_hr}></div>
      </Row>
      <div id="Section2_button_row">
        <div className={Section_2.Section2_button}>Name Sort</div>
        <div className={Section_2.Section2_button1}>Low Price Sort</div>
      </div>
      <Row id="Section2_row">
        <Col className={Section_2.Section2_col} lg={3} md={6} sm={6} xs={6}>
          <img src={img_1} className={Section_2.Section2_img}></img>
        </Col>
        <Col className={Section_2.Section2_col} lg={3} md={6} sm={6} xs={6}>
          <img src={img_2} className={Section_2.Section2_img}></img>
        </Col>
        <Col className={Section_2.Section2_col} lg={3} md={6} sm={6} xs={6}>
          <img src={img_3} className={Section_2.Section2_img}></img>
        </Col>
        <Col
          className={`${Section_2.Section2_col} ${Section_2.Section2_col_Last} `}
          lg={3}
          md={6}
          sm={6}
          xs={6}
        >
          <img src={img_4} className={Section_2.Section2_img}></img>
        </Col>
      </Row>
    </Container>
  );
};
export default Section2;
