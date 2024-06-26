<template>
  <div id="container"></div>
  <div class="progress" ref="progress">
    <div class="per" ref="perDom"></div>
  </div>

  <div class="mask" v-if="showMobileMsg && modelLoaded"></div>
  <div class="box" v-if="showMobileMsg && modelLoaded">
    <div class="top"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="tip">温馨提示</div>
    <div class="msg">手机横屏体验更佳哦～</div>
    <div class="btn" @click="iKonw">知道了</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VRHall from "./vrhall/index";
import { isMobileDevice } from "./utils/help.js";

const perDom = ref(null);
const progress = ref(null);
const showMobileMsg = ref(false);
const isMobile = isMobileDevice();
const modelLoaded = ref(false);

const iKonw = () => {
  showMobileMsg.value = false;
};

const checkOrientation = () => {
  if (window.matchMedia("(orientation: landscape)").matches) {
    showMobileMsg.value = false;
  } else {
    showMobileMsg.value = true;
  }
};

// 手机加上屏幕方向事件
if (isMobile) {
  window.addEventListener("orientationchange", checkOrientation);
  window.addEventListener("load", checkOrientation);
}

onMounted(() => {
  const vr = new VRHall({
    debugger: false, // 开启调试模式
    maxSize: 20, // 画框最大尺寸
    movieHight: 5, // 移动的高度
    container: document.getElementById("container"),
    cameraOption: {
      position: { x: -7, y: 5, z: 3 },
      lookAt: { x: 8, y: 6.4, z: 0 },
    },
    onClick: (item) => {
      console.log("你点击了", item);
      if (item.url) {
        Zoomtastic.show(item.url);
      }
    },
  });

  // SM_WanQiang_2
  // 加载厅模型
  vr.loadHall({
    // url: "./ZhanGuan_WuDing(1).glb",
    // url: "./ZhanGuan_Bake.glb",
    url: "./ZhanGuan_Bake(1).glb",
    // planeName: "SM_Floor", // plane , meishu01
    // planeName: "SM_ZhanGuan_Obj3d66-9104781-218-8", // plane , meishu01
    planeName: "SM_Floor_3", // plane , meishu01
    position: { x: 0, y: 0, z: 0 },
    scale: 1,
    onProgress: (p) => {
      const percent = p.loaded / p.total;
      perDom.value.style.width = 300 * percent + "px";
      perDom.value.style.textIndent = 300 * percent + 5 + "px";
      perDom.value.innerHTML = Math.floor(percent * 100) + "%";

      // 加载完进度条消失
      if (percent >= 1) {
        setTimeout(() => {
          progress.value.style.display = "none";
        }, 200);
        // 模型加载完成
        modelLoaded.value = true;
        console.log("模型加载完成");
      }
    },
  }).then((gltf) => {
    gltf.scene.traverse(function (child) {
      if (child.isLight) {
        console.log("isLight", child.intensity);
        // child.intensity = 1; // 设置光源强度为2，具体值可根据需求调整
      }
    });

    // 加载视频
    vr._createVideo(gltf.scene);
    // vr._createZhiBo(gltf.scene);
  });
});
</script>

<style lang="less" scoped>
#container {
  height: 100%;
}

.progress {
  height: 100%;
  position: absolute;
  width: 300px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -8px;
  border-radius: 8px;
  border: 1px solid #009999;
  overflow: hidden;

  .per {
    height: 108%;
    width: 20px;
    background: #00ffff;
    color: #bbffff;
    line-height: 15px;
  }
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.7;
  top: 0;
}

.box {
  width: 311px;
  height: 191px;
  background: linear-gradient(180deg, #b9e0ff 0%, #ffffff 43%, #ffffff 100%);
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  padding-top: 47px;
  padding-bottom: 20px;
  box-sizing: border-box;

  .top {
    height: 74px;
    width: 74px;
    background-image: url("./assets/top.png");
    background-size: 100% 100%;
    top: -37px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .left {
    height: 46px;
    width: 81px;
    background-image: url("./assets/left.png");
    background-size: 100% 100%;
    position: absolute;
    left: 18px;
    top: 16px;
  }

  .right {
    height: 60px;
    width: 75px;
    background-image: url("./assets/right.png");
    background-size: 100% 100%;
    position: absolute;
    top: 17px;
    right: 5px;
  }

  .tip {
    font-weight: 500;
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    text-align: center;
    font-style: normal;
  }

  .msg {
    font-weight: 400;
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    text-align: center;
    font-style: normal;
    padding: 24px 0;
  }

  .btn {
    width: 104px;
    height: 32px;
    background: #254ef4;
    border-radius: 22px;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
    font-style: normal;
    margin: 0 auto;
  }
}
</style>
