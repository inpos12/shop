import React from "react";
import { styled } from "styled-components";
import HeaderImg from "../img/img1.jpg";
import HeaderImg1 from "../img/img2.jpg";
import HeaderImg2 from "../img/img3.jpg";
import HeaderImg3 from "../img/img4.jpg";
import HeaderImg4 from "../img/img5.jpg";
import HeaderImg5 from "../img/img6.jpg";
export const Header = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-position: center;
`;

export const Header1 = styled.div`
  background-repeat: no-repeat;
  background-image: url(${HeaderImg1});
  background-size: cover;
  background-position: left;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const Header2 = styled.div`
  background-repeat: no-repeat;
  background-image: url(${HeaderImg2});
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const Header3 = styled.div`
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${HeaderImg3});
  background-size: cover;
  background-position: center;
`;
export const Header4 = styled.div`
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${HeaderImg4});
  background-size: cover;
  background-position: center;
`;
export const Header5 = styled.div`
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${HeaderImg5});
  background-size: cover;
  background-position: 75% 50%;
`;
// Font Start

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`;
export const P1 = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const P2 = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const P3 = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
