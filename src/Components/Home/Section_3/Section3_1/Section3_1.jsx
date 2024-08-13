import React from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Item_List from "../../../SubPage/Shoes/item.json";
import Img_1 from "../Section3_1/item_2_1.jpg"; //  Shoes item img_1
import Img_2 from "../Section3_1/item_2_2.jpg"; //  Shoes item img_2
import Img_3 from "../Section3_1/item_2_3.gif"; //  Shoes item img_3
import Img_4 from "../Section3_1/item_2_4.gif"; //  Shoes item img_4
import Img_5 from "../Section3_1/item_2_5.gif"; //  Shoes item img_5
import Img_6 from "../Section3_1/item_2_6.gif"; //  Shoes item img_6
import { ItemBox, RowBox, RowButton } from "../Components.jsx";
import "../Section3_1/Section3_1.module.css";

const Section3_1 = () => {
  return (
    <div id="Section3_container">
      <Container>
        <RowBox RowTitle="Shoes" />
        <Row id="Section3_row">
          <ItemBox
            imgsrc={Img_1}
            href={Item_List.Shoes_items[0].href}
            title_1={Item_List.Shoes_items[0].title_1}
            titleclassName="custom-title"
            description={Item_List.Shoes_items[0].description}
            sizes={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[0].price}
          />
          <ItemBox
            imgsrc={Img_2}
            href={Item_List.Shoes_items[1].href}
            title_1={Item_List.Shoes_items[1].title_1}
            titleclassName="custom-title"
            description={Item_List.Shoes_items[1].description}
            sizes={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[1].price}
          />
          <ItemBox
            imgsrc={Img_3}
            href={Item_List.Shoes_items[2].href}
            title_1={Item_List.Shoes_items[2].title_1}
            titleclassName="custom-title"
            sizes={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[2].price}
          />
          <ItemBox
            imgsrc={Img_4}
            href={Item_List.Shoes_items[3].href}
            title_1={Item_List.Shoes_items[3].title_1}
            titleclassName="custom-title"
            sizes={Item_List.Shoes_sizes[1]}
            price={Item_List.Shoes_items[3].price}
          />
          <ItemBox
            imgsrc={Img_5}
            href={Item_List.Shoes_items[4].href}
            title_1={Item_List.Shoes_items[4].title_1}
            titleclassName="custom-title"
            sizes={Item_List.Shoes_sizes[2]}
            price={Item_List.Shoes_items[4].price}
          />
          <ItemBox
            imgsrc={Img_6}
            href={Item_List.Shoes_items[5].href}
            title_1={Item_List.Shoes_items[5].title_1}
            titleclassName="custom-title"
            sizes={Item_List.Shoes_sizes[0]}
            price={Item_List.Shoes_items[5].price}
          />
        </Row>
        <RowButton href="/Shoes" />
      </Container>
    </div>
  );
};
export default Section3_1;
