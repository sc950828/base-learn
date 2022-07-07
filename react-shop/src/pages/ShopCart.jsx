import React from "react";
import "../styles/shopcart.css";
import Goods from "../components/Goods";
import { useSelector, useDispatch } from "react-redux";
import { SwipeAction, Button, Checkbox, Toast } from "antd-mobile";
import {
  delCartAction,
  selectAllCartAction,
} from "../store/actions/goodsAction";

function ShopCart() {
  const carts = useSelector((state) => state.carts);
  const isSelectAll = useSelector((state) => state.isSelectAll);
  const totalMoney = useSelector((state) => state.money);

  const dispatch = useDispatch();
  const rightActions = [
    {
      key: "delete",
      text: "删除",
      color: "danger",
    },
  ];

  const selectAll = (val) => {
    dispatch(selectAllCartAction(val));
  };

  const submit = () => {
    Toast.show({
      icon: "success",
      content: "订单提交成功",
    });
  };

  return (
    <div className="shop-cart-wrapper">
      {carts.map((item) => {
        return (
          <SwipeAction
            key={item.id}
            rightActions={rightActions}
            onAction={() => dispatch(delCartAction(item))}
          >
            <Goods item={item} isCart={true}></Goods>
          </SwipeAction>
        );
      })}

      <div className="total">
        <Checkbox checked={isSelectAll} onChange={selectAll}>
          全选
        </Checkbox>
        <div>
          合计：<span className="money">￥{totalMoney}</span>
        </div>
        <Button color="danger" onClick={submit} disabled={!totalMoney > 0}>
          提交订单
        </Button>
      </div>
    </div>
  );
}

export default ShopCart;
