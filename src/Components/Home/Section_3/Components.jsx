import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "./Components.css";

export const Img = styled.img`
  image-rendering: -moz-crisp-edges; /* firefox */
  image-rendering: -o-crisp-edges; /* opera */
  image-rendering: -webkit-optimize-contrast; /* chrome(비표준) */
  image-rendering: crisp-edges;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const P = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

export const Price = styled.div`
  width: 100%;
`;
export const A = styled.a`
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  color: white;
  font-weight: 600;
`;
export const Hr = styled.hr`
  border-top: 3px solid black;
  margin: ${(props) => props.margin};
  width: 130px;
  opacity: 1;
`;

export function ItemBox(props) {
  const formattedPrice = props.price.toLocaleString();
  return (
    <>
      <Col
        lg={2}
        md={3}
        sm={3}
        xs={5}
        id="Section3_col"
        className="Section3_col_1"
      >
        <Img src={props.imgsrc}></Img>
        <Title className={props.titleclassName}>{props.title_1}</Title>
        <Title>{props.title_2}</Title>
        <P>{props.description}</P>
        <P>{props.sizes}</P>

        <Price>{formattedPrice}원</Price>
        <div className="Section3_hover_1">
          <A href={props.href} className="Section3_hover_1_a">
            <h6>자세히보기</h6>
          </A>
        </div>
      </Col>
    </>
  );
}

const RowTitle = styled.h1`
  font-weight: 700;
`;

export function RowBox(props) {
  return (
    <Row id="Section3_title_row">
      <Hr margin="15px auto"></Hr>
      <RowTitle>{props.RowTitle}</RowTitle>
      <Hr margin="10px auto"></Hr>
    </Row>
  );
}
const ButtonA = styled.a`
  text-decoration: none;
  color: black;
`;
const Button = styled.h3`
  border: 1px solid black;
  letter-spacing: 5px;
  padding: 10px 20px;
  font-weight: 600;
`;

export function RowButton(props) {
  return (
    <Row id="Section3_button">
      <Col className="Section3_button">
        <ButtonA href={props.href}>
          <Button>더보기 +</Button>
        </ButtonA>
      </Col>
    </Row>
  );
}
