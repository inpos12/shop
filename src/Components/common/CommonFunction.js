import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../database_test/Firebase";

export async function DataLink(Collection, DataName, setData) {
  const DataRef = doc(db, Collection, DataName);
  const DataSnap = await getDoc(DataRef);
  setData(DataSnap.data());
}

export function FormatPrice(setPrice, initalPrice) {
  setPrice(
    typeof initalPrice === "number"
      ? initalPrice.toLocaleString()
      : "가격정보없음"
  );
}
