import React from "react";
import { Image, Toast, Stepper, Checkbox } from "antd-mobile";
import "../styles/goods.css";
import { useDispatch } from "react-redux";
import {
  addCartAction,
  setCartNumAction,
  selectCartAction,
} from "../store/actions/goodsAction";

function Goods(props) {
  const { item, isCart } = props;
  const dispatch = useDispatch();
  const handleAddCart = () => {
    if (isCart) return;
    dispatch(addCartAction(item));
    Toast.show({
      icon: "success",
      content: "添加购物车成功",
    });
  };

  const select = (item, value) => {
    dispatch(selectCartAction({ item, value }));
  };

  return (
    <div className="goods-wrap" onClick={handleAddCart}>
      {isCart && (
        <Checkbox
          checked={item.checked}
          onChange={(val) => select(item, val)}
          style={{ marginLeft: "5px" }}
        />
      )}

      <div className="picture">
        <Image src={item.picture} width={100} height={100} />
      </div>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price-num">
          <div className="price">￥{item.price}</div>
          {isCart && (
            <div className="num">
              <Stepper
                min={1}
                defaultValue={item.num}
                onChange={(value) =>
                  dispatch(setCartNumAction({ item, value }))
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Goods;
