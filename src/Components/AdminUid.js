import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import db from "./database_test/Firebase";

const useAdminUid = () => {
  const [adminUid, setAdminUid] = useState("");

  useEffect(() => {
    const fetchAdminUid = async () => {
      const DataRef = doc(db, "test", "uid");
      const DataSnap = await getDoc(DataRef);
      if (DataSnap.exists()) {
        setAdminUid(DataSnap.data().uid); // 'uid' 필드 값 가져오기
        console.log("such document!");
      } else {
        console.log("No such document!");
      }
    };

    fetchAdminUid();
  }, []);
  return adminUid;
};
export default useAdminUid;
