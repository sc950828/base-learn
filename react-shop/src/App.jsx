import { TabBar } from "antd-mobile";
import { AppOutline, UserOutline } from "antd-mobile-icons";
import { useState } from "react";
import ShopList from "./pages/ShopList";
import ShopCart from "./pages/ShopCart";
import "./App.css";

function App() {
  const tabs = [
    {
      key: "list",
      title: "商品列表",
      icon: <AppOutline />,
    },
    {
      key: "cart",
      title: "购物车",
      icon: <UserOutline />,
    },
  ];

  const [activeKey, setActiveKey] = useState("list");

  return (
    <div className="App">
      <div className="content">
        {activeKey === "list" ? <ShopList></ShopList> : <ShopCart></ShopCart>}
      </div>

      <TabBar activeKey={activeKey} onChange={setActiveKey} className="tabbar">
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

export default App;
