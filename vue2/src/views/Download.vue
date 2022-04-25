<template>
  <div>
    <div @click="download1">下载1</div>
    <div @click="download2">下载2</div>
  </div>
</template>
<script>
import { saveAs } from "file-saver";
import JSZip from "jszip";
export default {
  name: "Download",
  data() {
    return {};
  },
  methods: {
    download1() {
      var blob = new Blob(["Hello, world!"], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(blob, "hello world.txt");
    },

    download2() {
      var zip = new JSZip();

      var blob = new Blob(["Hello, world blob!"], {
        type: "text/plain;charset=utf-8",
      });

      var file = new File(["Hello, world file!"], {
        type: "text/plain;charset=utf-8",
      });
      zip.file("Hello1.txt", "Hello World\n");
      zip.file("Hello2.txt", blob);
      zip.file("Hello3.txt", file);

      zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
      });
    },
  },
};
</script>
