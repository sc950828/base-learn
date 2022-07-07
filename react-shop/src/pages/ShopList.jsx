import React from "react";
import "../styles/shoplist.css";
import Goods from "../components/Goods";
import { useSelector } from "react-redux";

function ShopList() {
  const goods = useSelector((state) => state.goods);

  return (
    <div className="shop-list-wrapper">
      {goods.map((item) => {
        return <Goods key={item.id} item={item}></Goods>;
      })}
    </div>
  );
}

export default ShopList;
