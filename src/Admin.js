import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

import db from "./Components/database_test/Firebase";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 200px 0;
`;
const Row = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 192, 0.1);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  backdrop-filter: blur(10px);
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const P = styled.p`
  margin: 0;
  width: 30%;
`;
const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  width: 190px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 8px;
  background-color: #664dd1;
`;

const Admin = () => {
  const [dataName, setDataName] = useState("");
  const [dataHref, setDataHref] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataSize, setDataSize] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const addShoesData = async () => {
    // 'Shoes' 컬렉션에 새 문서 추가
    const docRef = doc(db, collectionId, dataName); // docId를 문자열로 설정
    await setDoc(docRef, {
      name: dataName,
      href: dataHref,
      description: dataDescription,
      size: dataSize,
      price: dataPrice,
    });
  };

  const [isAllowed, setIsAllowed] = useState(false);
  const [uid, setUid] = useState();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인이된경우
        setUid(user.email);
        if (user.email === process.env.REACT_APP_ADMIN_ACCOUNT) {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
        }
      } else {
        setUid(null);
        setIsAllowed(false);
        console.log("로그아웃되있음");
      }
    });
  }, []);
  const handleaddData = () => {
    if (isAllowed) {
      addShoesData(dataName, dataHref, dataDescription, dataSize, dataPrice);
      if (dataName === "") {
        alert("데이터추가실패");
      } else {
        alert("데이터추가성공");
      }
    } else {
      alert("어드민계정으로 로그인 해주세요");
    }
  };

  return (
    <Container>
      <Row>
        <p>{uid}</p>
        <InputBox>
          <P>CollectionID</P>
          <input
            placeholder="CollectionID"
            type="text"
            value={collectionId}
            onChange={(e) => setCollectionId(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <P>DataName</P>
          <input
            placeholder="DataName"
            type="text"
            value={dataName}
            onChange={(e) => setDataName(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <P>dataHref</P>
          <input
            placeholder="dataHref"
            type="text"
            value={dataHref}
            onChange={(e) => setDataHref(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <P>dataDescription</P>
          <input
            placeholder="dataDescription"
            type="text"
            value={dataDescription}
            onChange={(e) => setDataDescription(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <P>dataSize</P>
          <input
            placeholder="dataSize"
            type="text"
            value={dataSize}
            onChange={(e) => setDataSize(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <P>dataPrice</P>
          <input
            placeholder="dataPrice"
            type="text"
            value={dataPrice}
            onChange={(e) => setDataPrice(e.target.value)}
          />
        </InputBox>
        <ButtonRow>
          <Button onClick={handleaddData} disabled={!isAllowed}>
            데이터추가
          </Button>
        </ButtonRow>
      </Row>
    </Container>
  );
};
export default Admin;
