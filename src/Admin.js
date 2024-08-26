import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {
  updateDoc,
  setDoc,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";
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
const Select = styled.select`
  width: 50%;
`;
const Input = styled.input`
  width: 50%;
`;

const Admin = () => {
  // 데이터 수정
  //어드민로그인체크
  const [isAllowed, setIsAllowed] = useState(false);
  const [uid, setUid] = useState();
  //데이터추가
  const [collectionId, setCollectionId] = useState("");
  const [dataName, setDataName] = useState("");
  const [dataHref, setDataHref] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataSize, setDataSize] = useState("");
  const [dataPrice, setDataPrice] = useState(0);
  // 데이터 수정
  const [dataShoesID, setDataShoesID] = useState([]);
  const [dataDailyID, setDataDailyID] = useState([]);
  const [dataGirlCrushID, setDataGirlCrushID] = useState([]);
  const [changeShoesPrice, setChangeShoesPrice] = useState(0);
  const [changeDailyPrice, setChangeDailyPrice] = useState(0);
  const [changeGirlCrushPrice, setChangeGirlCrushPrice] = useState(0);

  useEffect(() => {
    //어드민로그인체크
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 관리가계정O
        setUid(user.email);
        if (user.email === process.env.REACT_APP_ADMIN_ACCOUNT) {
          setIsAllowed(true);
          // 관리자계정X
        } else {
          alert("관리자계정으로 로그인해주세요");
          window.location.replace("/shop");
          setIsAllowed(false);
        }
      } else {
        window.location.replace("/shop");
        alert("관리자계정으로 로그인해주세요");
        setIsAllowed(false);
      }
    });
    //    컬렉션 ID 나열
    async function datalist(collectionID, setID) {
      const Colleciontlink = await getDocs(collection(db, collectionID));
      const dataID = Colleciontlink.docs.map((doc) => doc.id);
      setID(dataID);
    }
    datalist("Shoes", setDataShoesID);
    datalist("Daily", setDataDailyID);
    datalist("GirlCrush", setDataGirlCrushID);
  }, [setUid]); //이메일이 변경될때마다 리랜더링
  // 데이터추가 input의 TEXT를 가져옴
  const addShoesData = async () => {
    const docRef = doc(db, collectionId, dataName); // docId를 문자열로 설정
    await setDoc(docRef, {
      name: dataName,
      href: dataHref,
      description: dataDescription,
      size: dataSize,
      price: dataPrice,
    });
  };
  // 데이터 추가 버튼
  function handleAddDataButton() {
    if (isAllowed) {
      addShoesData();
      if (dataName === "") {
        alert("데이터추가실패");
      } else {
        alert("데이터추가성공");
      }
    }
  }
  // 데이터수정
  const selectShoesElement = document.getElementById("ShoesID");
  const selectDailyElement = document.getElementById("DailyID");
  const selectGirlCrushElement = document.getElementById("GirlCrushID");
  async function handleChangeDataButton(elementID, collectionID, Price) {
    const selectElementValue = elementID.value; // value =dataid
    const changePrice = doc(db, collectionID, selectElementValue);
    if (isAllowed) {
      await updateDoc(changePrice, {
        price: Price,
      });
      alert(
        selectElementValue + "의 가격을" + Price + "원으로 변경하엿습니다."
      );
    } else {
      alert("관리자 계정으로 로그인 해주세요");
    }

    if (Price === null) {
      alert("가격을 설정해주세요");
    }
  }

  return (
    <>
      <Container>
        <Row>
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
              onChange={(e) => setDataPrice(Number(e.target.value))}
            />
          </InputBox>
          <ButtonRow>
            <Button onClick={handleAddDataButton} disabled={!isAllowed}>
              데이터추가
            </Button>
          </ButtonRow>
        </Row>
      </Container>
      <Container>
        <Row>
          <ButtonRow>SHOES</ButtonRow>
          <InputBox>
            <P>DataName</P>
            <Select name="type" id="ShoesID">
              {dataShoesID.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </Select>
          </InputBox>
          <InputBox>
            <P>Price</P>
            <Input
              value={changeShoesPrice}
              placeholder="ChangePrice"
              type="text"
              onChange={(e) => setChangeShoesPrice(Number(e.target.value))}
            />
          </InputBox>
          <ButtonRow>
            <Button
              onClick={() =>
                handleChangeDataButton(
                  selectShoesElement,
                  "Shoes",
                  changeShoesPrice
                )
              }
              disabled={!isAllowed}
            >
              가격변경
            </Button>
          </ButtonRow>
          {/* Daily */}
          <ButtonRow>DAILY</ButtonRow>
          <InputBox>
            <P>DataName</P>
            <Select name="type" id="DailyID">
              {dataDailyID.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </Select>
          </InputBox>
          <InputBox>
            <P>Price</P>
            <Input
              value={changeDailyPrice}
              placeholder="ChangePrice"
              type="text"
              onChange={(e) => setChangeDailyPrice(Number(e.target.value))}
            />
          </InputBox>
          <ButtonRow>
            <Button
              onClick={() =>
                handleChangeDataButton(
                  selectDailyElement,
                  "Daily",
                  changeDailyPrice
                )
              }
              disabled={!isAllowed}
            >
              가격변경
            </Button>
          </ButtonRow>
          {/* GIRLCRUSH */}
          <ButtonRow>GIRCRUSH</ButtonRow>
          <InputBox>
            <P>DataName</P>
            <Select name="type" id="GirlCrushID">
              {dataGirlCrushID.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </Select>
          </InputBox>
          <InputBox>
            <P>Price</P>
            <Input
              value={changeGirlCrushPrice}
              placeholder="ChangePrice"
              type="text"
              onChange={(e) => setChangeGirlCrushPrice(Number(e.target.value))}
            />
          </InputBox>
          <ButtonRow>
            <Button
              onClick={() =>
                handleChangeDataButton(
                  selectGirlCrushElement,
                  "GirlCrush",
                  changeGirlCrushPrice
                )
              }
              disabled={!isAllowed}
            >
              가격변경
            </Button>
          </ButtonRow>
        </Row>
      </Container>
    </>
  );
};
export default Admin;
