import React from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Item_List from "../../../SubPage/Daily/item.json";
import Img_1 from "../Section3_3/item_1_1.gif"; //  Shoes item img_1
import Img_2 from "../Section3_3/item_1_2.gif"; //  Shoes item img_2
import Img_3 from "../Section3_3/item_1_3.gif"; //  Shoes item img_3
import Img_4 from "../Section3_3/item_1_4.gif"; //  Shoes item img_4
import Img_5 from "../Section3_3/item_1_5.gif"; //  Shoes item img_5
import Img_6 from "../Section3_3/item_1_6.gif"; //  Shoes item img_6
import { ItemBox, RowBox, RowButton } from "../Components.jsx";
import "../Section3_3/Section3_3.module.css";

const Section3_3 = () => {
  return (
    <div id="Section3_container">
      <Container>
        <RowBox RowTitle="Daily" />
        <Row id="Section3_row">
          <ItemBox
            imgsrc={Img_1}
            href={Item_List[0].href}
            titleclassName="custom-title"
            title_1={Item_List[0].title_1}
            title_2={Item_List[0].title_2}
            price={Item_List[0].price}
          />
          <ItemBox
            imgsrc={Img_2}
            href={Item_List[1].href}
            titleclassName="custom-title"
            title_1={Item_List[1].title_1}
            title_2={Item_List[1].title_2}
            price={Item_List[1].price}
          />
          <ItemBox
            imgsrc={Img_3}
            href={Item_List[2].href}
            titleclassName="custom-title"
            title_1={Item_List[2].title_1}
            title_2={Item_List[2].title_2}
            price={Item_List[2].price}
          />
          <ItemBox
            imgsrc={Img_4}
            href={Item_List[3].href}
            titleclassName="custom-title"
            title_1={Item_List[3].title_1}
            title_2={Item_List[3].title_2}
            price={Item_List[3].price}
          />
          <ItemBox
            imgsrc={Img_5}
            href={Item_List[4].href}
            titleclassName="custom-title"
            title_1={Item_List[4].title_1}
            title_2={Item_List[4].title_2}
            price={Item_List[4].price}
          />
          <ItemBox
            imgsrc={Img_6}
            href={Item_List[5].href}
            titleclassName="custom-title"
            title_1={Item_List[5].title_1}
            title_2={Item_List[5].title_2}
            price={Item_List[5].price}
          />
        </Row>
        <RowButton href="/Daily" />
      </Container>
    </div>
  );
};
export default Section3_3;
