function CallbackHook1({ count, say }) {
  console.log("CallbackHook1 render");
  return (
    <div>
      <div>我依赖count:{count} 不依赖name</div>
      <div>
        <button onClick={say}>say</button>
      </div>
    </div>
  );
}

export default CallbackHook1;
