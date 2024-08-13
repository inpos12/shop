import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Item_List from "./item.json";
import Section_3 from "../Shoes/Item.module.css";
import Img_1 from "../Shoes/Shoes_2_1.jpg";
import Img_2 from "../Shoes/Shoes_2_2.jpg";
import Img_3 from "../Shoes/Shoes_2_3.gif";
import Img_4 from "../Shoes/Shoes_2_4.gif";
import Img_5 from "../Shoes/Shoes_2_5.gif";
import Img_6 from "../Shoes/Shoes_2_6.jpg";
import Img_7 from "../Shoes/Shoes_2_7.jpg";
import Img_8 from "../Shoes/Shoes_2_8.jpg";
import Img_9 from "../Shoes/Shoes_2_9.jpg";
import Img_10 from "../Shoes/Shoes_2_10.jpg";
import Img_11 from "../Shoes/Shoes_2_11.gif";
import Img_12 from "../Shoes/Shoes_2_12.gif";
// http://www.jogunshop.com/shop/shopbrand.html?xcode=083&type=N&mcode=001

function Item(props) {
  const formattedPrice = props.price.toLocaleString();
  return (
    <>
      <Col lg={3} md={5} sm={5} xs={5} id="Shoes_col">
        <Link to={props.href}>
          <img src={props.imgsrc} className={Section_3.Shoes_img}></img>
        </Link>
        <div className={Section_3.Shoes_title}>{props.title}</div>
        <div className={Section_3.Shoes_p}>
          {props.description}
          <br />
          {props.size}
        </div>
        <div className={Section_3.Shoes_Price}>{formattedPrice}원</div>
      </Col>
    </>
  );
}

const Shose = () => {
  return (
    <>
      <Container id="Item_Container">
        <Row id="Shoes_row">
          <Item
            href={Item_List.Shoes_items[0].href}
            imgsrc={Img_1}
            title={Item_List.Shoes_items[0].title}
            description={Item_List.Shoes_items[0].description}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[0].price}
          />
          <Item
            href={Item_List.Shoes_items[1].href}
            imgsrc={Img_2}
            title={Item_List.Shoes_items[1].title}
            description={Item_List.Shoes_items[1].description}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[1].price}
          />
          <Item
            href={Item_List.Shoes_items[2].href}
            imgsrc={Img_3}
            title={Item_List.Shoes_items[2].title}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[2].price}
          />
          <Item
            href={Item_List.Shoes_items[3].href}
            imgsrc={Img_4}
            title={Item_List.Shoes_items[3].title}
            size={Item_List.Shoes_sizes[1]}
            price={Item_List.Shoes_items[3].price}
          />
        </Row>
        <Row id="Shoes_row">
          <Item
            href={Item_List.Shoes_items[4].href}
            imgsrc={Img_5}
            title={Item_List.Shoes_items[4].title}
            size={Item_List.Shoes_sizes[2]}
            price={Item_List.Shoes_items[4].price}
          />
          <Item
            href={Item_List.Shoes_items[5].href}
            imgsrc={Img_6}
            title={Item_List.Shoes_items[5].title}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[5].price}
          />
          <Item
            href={Item_List.Shoes_items[6].href}
            imgsrc={Img_7}
            title={Item_List.Shoes_items[6].title}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[6].price}
          />
          <Item
            href={Item_List.Shoes_items[7].href}
            imgsrc={Img_8}
            title={Item_List.Shoes_items[7].title}
            size={Item_List.Shoes_sizes[1]}
            price={Item_List.Shoes_items[7].price}
          />
        </Row>
        <Row id="Shoes_row">
          <Item
            href={Item_List.Shoes_items[8].href}
            imgsrc={Img_9}
            title={Item_List.Shoes_items[8].title}
            description={Item_List.Shoes_items[8].description}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[8].price}
          />
          <Item
            href={Item_List.Shoes_items[9].href}
            imgsrc={Img_10}
            title={Item_List.Shoes_items[9].title}
            description={Item_List.Shoes_items[9].description}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[9].price}
          />
          <Item
            href={Item_List.Shoes_items[10].href}
            imgsrc={Img_11}
            title={Item_List.Shoes_items[10].title}
            size={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[10].price}
          />
          <Item
            href={Item_List.Shoes_items[11].href}
            imgsrc={Img_12}
            title={Item_List.Shoes_items[11].title}
            size={Item_List.Shoes_sizes[1]}
            price={Item_List.Shoes_items[11].price}
          />
        </Row>
      </Container>
    </>
  );
};
export default Shose;
