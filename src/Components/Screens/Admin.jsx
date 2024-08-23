import React from "react";
import { Item_Banner } from "../SubPage/Daily/Item.style";
import "../Style/interval.css";
import Admin from "../../Admin";
const AdminPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Item_Banner />
      <Admin />
    </div>
  );
};
export default AdminPage;
