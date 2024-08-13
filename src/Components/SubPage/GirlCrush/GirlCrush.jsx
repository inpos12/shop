import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item_List from "./item.json";
import Img_1 from "../GirlCrush/GirlCrush_1_1.gif"; //Girl Crush Look item img_1
import Img_2 from "../GirlCrush/GirlCrush_1_2.gif"; //Girl Crush Look item img_1
import Img_3 from "../GirlCrush/GirlCrush_1_3.gif"; //Girl Crush Look item img_1
import Img_4 from "../GirlCrush/GirlCrush_1_4.gif"; //Girl Crush Look item img_1
import Img_5 from "../GirlCrush/GirlCrush_1_5.gif"; //Girl Crush Look item img_1
import Img_6 from "../GirlCrush/GirlCrush_1_6.gif"; //Girl Crush Look item img_1
import Img_7 from "../GirlCrush/GirlCrush_1_7.gif"; //Girl Crush Look item img_1
import Img_8 from "../GirlCrush/GirlCrush_1_8.gif"; //Girl Crush Look item img_1
import Img_9 from "../GirlCrush/GirlCrush_1_9.gif"; //Girl Crush Look item img_1
import Img_10 from "../GirlCrush/GirlCrush_1_10.gif"; //Girl Crush Look item img_1
import Img_11 from "../GirlCrush/GirlCrush_1_11.gif"; //Girl Crush Look item img_1
import Img_12 from "../GirlCrush/GirlCrush_1_12.gif"; //Girl Crush Look item img_1
import GirlCrush_style from "../GirlCrush/GirlCrush.module.css";

function Item(props) {
  const formattedPrice = props.price.toLocaleString();
  return (
    <>
      <Col lg={3} md={5} sm={5} xs={5} id="GirlCrush_col">
        <a href={props.href}>
          <img
            src={props.imgsrc}
            className={GirlCrush_style.GirlCrush_img}
          ></img>
        </a>
        <div className={GirlCrush_style.GirlCrush_title}>
          {props.title_1}
          <br />
          {props.title_2}
        </div>
        <div className={GirlCrush_style.GirlCrush_Price}>
          {formattedPrice}원
        </div>
      </Col>
    </>
  );
}
const GirlCrush = () => {
  return (
    <>
      <Container id="Item_Container">
        <Row id="GirlCrush_row">
          <Item
            href={Item_List[0].href}
            imgsrc={Img_1}
            title_1={Item_List[0].title_1}
            title_2={Item_List[0].title_2}
            price={Item_List[0].price}
          />
          <Item
            href={Item_List[1].href}
            imgsrc={Img_2}
            title_1={Item_List[1].title_1}
            title_2={Item_List[1].title_2}
            price={Item_List[1].price}
          />
          <Item
            href={Item_List[2].href}
            imgsrc={Img_3}
            title_1={Item_List[2].title_1}
            title_2={Item_List[2].title_2}
            price={Item_List[2].price}
          />
          <Item
            href={Item_List[3].href}
            imgsrc={Img_4}
            title_1={Item_List[3].title_1}
            title_2={Item_List[3].title_2}
            price={Item_List[3].price}
          />
        </Row>
        <Row id="GirlCrush_row">
          <Item
            href={Item_List[4].href}
            imgsrc={Img_5}
            title_1={Item_List[4].title_1}
            title_2={Item_List[4].title_2}
            price={Item_List[4].price}
          />
          <Item
            imgsrc={Img_6}
            href={Item_List[5].href}
            title_1={Item_List[5].title_1}
            title_2={Item_List[5].title_2}
            price={Item_List[5].price}
          />
          <Item
            href={Item_List[6].href}
            imgsrc={Img_7}
            title_1={Item_List[6].title_1}
            title_2={Item_List[6].title_2}
            price={Item_List[6].price}
          />
          <Item
            href={Item_List[7].href}
            imgsrc={Img_8}
            title_1={Item_List[7].title_1}
            title_2={Item_List[7].title_2}
            price={Item_List[7].price}
          />
        </Row>
        <Row id="GirlCrush_row">
          <Item
            href={Item_List[8].href}
            imgsrc={Img_9}
            title_1={Item_List[8].title_1}
            title_2={Item_List[8].title_2}
            price={Item_List[8].price}
          />
          <Item
            href={Item_List[9].href}
            imgsrc={Img_10}
            title_1={Item_List[9].title_1}
            title_2={Item_List[9].title_2}
            price={Item_List[9].price}
          />
          <Item
            href={Item_List[10].href}
            imgsrc={Img_11}
            title_1={Item_List[10].title_1}
            title_2={Item_List[10].title_2}
            price={Item_List[10].price}
          />
          <Item
            href={Item_List[11].href}
            imgsrc={Img_12}
            title_1={Item_List[11].title_1}
            title_2={Item_List[11].title_2}
            price={Item_List[11].price}
          />
        </Row>
      </Container>
    </>
  );
};
export default GirlCrush;
