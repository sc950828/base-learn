import React, { useState } from "react";

export default function About() {
  // 定义内部状态
  const [searchKey, setSearchKey] = useState("");

  // 定义搜索方法
  const search = () => {
    // 调用后台接口搜索
    // ajax(searchKey)
  };

  return (
    <div>
      <header>
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button onClick={search}>搜索</button>
      </header>
    </div>
  );
}
