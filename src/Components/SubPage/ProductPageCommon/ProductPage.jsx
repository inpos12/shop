import React, { useState } from "react";
import $ from "jquery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./Item_page.module.css";
import down_img from "./arrows_down_40386.png";

const DownButton = () => {
  const AmountList = document.getElementById("Amount_list");

  if (AmountList.style.display === "none" || AmountList.style.display === "") {
    AmountList.style.display = "block";
  } else {
    AmountList.style.display = "none";
  }
};

function ProductPage(props) {
  const initalPrice = props.price;
  const [amount, setAmount] = useState(1);
  const [displayPrice, setDisplayPrice] = useState(initalPrice);
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    setDisplayPrice(initalPrice * newAmount);
  };
  const formattedPrice = displayPrice.toLocaleString();

  return (
    <>
      <Container id="Item_page">
        <Row id="Item_row">
          <Col lg={6} md={6} sm={6} xs={12} id="Item_img">
            <img src={props.imgsrc}></img>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} id="Item_p">
            <div className={style.Item_p_title}>
              <h3>{props.title_1}</h3>
              <h3>{props.title_2}</h3>
            </div>
            <div className={style.Item_p_price}>
              <h2 id="Price">{formattedPrice}원</h2>
            </div>
            <div className={style.Item_p_color}>
              <p className={style.Item_p_color_1}>
                Color : <p>&nbsp; {props.color}</p>
              </p>
              <p> z</p>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Item_p_Amount}>
              <p className={style.Item_p_Amount_1}>
                amount : <p id="Amount">&nbsp;{amount}</p>
              </p>

              <img
                onClick={DownButton}
                src={down_img}
                className={style.Down_img}
                id="Down_button"
              ></img>
            </div>
            <div className={style.Item_hr}></div>
            <div className={style.Amount_list} id="Amount_list">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <p key={num} onClick={() => handleAmountChange(num)}>
                  {num}
                </p>
              ))}
            </div>
            <div className={style.Item_buy_button_box}>
              <button className={style.Item_buy_button}>구매하기</button>
              <button className={style.Item_add_button}>장바구니 담기</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
