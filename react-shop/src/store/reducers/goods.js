import {
  ADD_CART,
  DEL_CART,
  SET_NUM,
  SELECT_CART,
  SELECT_ALL_CART,
} from "../types";

const initialGoods = {
  goods: [
    {
      id: 1,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad1",
      price: 399,
      description: "苹果 ipad1",
    },
    {
      id: 2,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad2",
      price: 699,
      description: "苹果 ipad2",
    },
    {
      id: 3,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad3",
      price: "999",
      description: "苹果 ipad3，非常好用",
    },
    {
      id: 4,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad4",
      price: 999,
      description: "苹果 ipad4，非常好用",
    },
    {
      id: 5,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad5",
      price: 999,
      description: "苹果 ipad5，非常好用",
    },
    {
      id: 6,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad6",
      price: 999,
      description: "苹果 ipad6，非常好用",
    },
    {
      id: 7,
      picture: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
      name: "ipad7",
      price: 1999,
      description: "苹果 ipad7，非常好用",
    },
  ],
  carts: [],
  money: 0,
  isSelectAll: false,
};

export default (state = initialGoods, action) => {
  switch (action.type) {
    case ADD_CART:
      return dealAddCart(state, action.payload);
    case DEL_CART:
      return dealDelCart(state, action.payload);
    case SET_NUM:
      return dealSetNumCart(state, action.payload);
    case SELECT_CART:
      return dealSelectCart(state, action.payload);
    case SELECT_ALL_CART:
      return dealSelectAllCart(state, action.payload);
    default:
      return state;
  }
};

// 加购
const dealAddCart = (state, cart) => {
  const oldCart = state.carts.find((item) => cart.id === item.id);
  if (oldCart) {
    oldCart.num++;
    const money = calculateMoney(state);
    return { ...state, money };
  } else {
    cart.num = 1;
    cart.checked = true;
    state.carts.push(cart);
    const money = calculateMoney(state);
    const hasNoChecked = state.carts.find((item) => !item.checked);
    return { ...state, money, isSelectAll: !hasNoChecked };
  }
};

// 移除购物车
const dealDelCart = (state, cart) => {
  const index = state.carts.findIndex((item) => cart.id === item.id);
  state.carts.splice(index, 1);
  const money = calculateMoney(state);
  const hasNoChecked = state.carts.find((item) => !item.checked);
  return {
    ...state,
    money,
    isSelectAll: state.carts.length > 0 && !hasNoChecked,
  };
};

// 设置数量
const dealSetNumCart = (state, payload) => {
  const oldCart = state.carts.find((item) => payload.item.id === item.id);
  oldCart.num = payload.value;
  const money = calculateMoney(state);
  return { ...state, money };
};

// 是否选择
const dealSelectCart = (state, payload) => {
  const oldCart = state.carts.find((item) => payload.item.id === item.id);
  oldCart.checked = payload.value;
  const money = calculateMoney(state);
  const hasNoChecked = state.carts.find((item) => !item.checked);
  return {
    ...state,
    money,
    isSelectAll: !hasNoChecked,
  };
};

// 是否全选
const dealSelectAllCart = (state, value) => {
  state.carts.forEach((cart) => {
    cart.checked = value;
  });
  const money = calculateMoney(state);
  return { ...state, money, isSelectAll: value };
};

// 计算总价格
const calculateMoney = (state) => {
  return state.carts.reduce((total, cart) => {
    if (cart.checked) {
      return total + cart.price * cart.num;
    }
    return total;
  }, 0);
};
