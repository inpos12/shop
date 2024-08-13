import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footer from "../Footer/Footer.module.css";
import Logo from "../Footer/logo.png";

const Footer = () => {
  return (
    <div className={footer.footer_div}>
      <Container>
        <Row id="footer_Row">
          <Col lg={8} md={12} sm={12} xs={12}>
            <div className={footer.footer_logo}>
              <img src={Logo} className={footer.footer_logo_img}></img>
            </div>
            <div className={footer.footer_p_row}>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>상호명 &nbsp;</p>
                <p className={footer.footer_p2}>웹디자인</p>
              </div>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>대표자명 &nbsp;</p>
                <p className={footer.footer_p2}>홍길동</p>
              </div>
            </div>
            <div className={footer.footer_p_row}>
              <p className={footer.footer_p1}>사업장 주소 &nbsp;</p>
              <p className={footer.footer_p2}>
                경기도 안산시 상록구 오목로6길 4 102호
              </p>
            </div>
            <div className={`${footer.footer_p_row} ${footer.footer_p_row_2}`}>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>대표전화 &nbsp;</p>
                <p className={footer.footer_p2}>031 000 0000</p>
              </div>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>사업자 등록번호 &nbsp;</p>
                <p className={footer.footer_p2}>111-11-11111</p>
              </div>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>통신판매업 신고번호 &nbsp;</p>
                <p className={footer.footer_p2}>111-11-11111</p>
              </div>
            </div>
            <div className={footer.footer_p_row}>
              <p className={footer.footer_p1}>개인정보보호책임자: &nbsp;</p>
              <p className={footer.footer_p2}>홍길동</p>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className={footer.footer_logo_2}>
              <img src={Logo} className={footer.footer_logo_img_2}></img>
            </div>
            <div className={footer.footer_p_row}>
              <div className={footer.footer_margin}>
                <p className={footer.footer_p1}>고객센터 정보 &nbsp;</p>
                <p className={footer.footer_p2}>SNS</p>
              </div>
            </div>
            <div className={footer.footer_p_row}>
              <p className={footer.footer_p1}>상담/주문전화 &nbsp;</p>
              <p className={footer.footer_p2}>031-000-0000</p>
            </div>
            <div className={footer.footer_p_row}>
              <p className={footer.footer_p1}>상담/주문 이메일 &nbsp;</p>
              <p className={footer.footer_p2}>null@naver.com</p>
            </div>
            <div className={footer.footer_p_row}>
              <p className={footer.footer_p1}>CS운영시간 &nbsp;</p>
              <p className={footer.footer_p2}>
                월~금 24시간 운영
                <br />
                토,일 휴무 공휴일 휴무
              </p>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
