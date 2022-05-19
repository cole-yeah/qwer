<template>
  <!-- <div style="padding: 20px" @click="download">down load</div> -->
  <router-view></router-view>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    download() {
      axios
        .get(`/eva/report/export/791`, {
          responseType: "blob"
        })
        .then(res => {
          const link = document.createElement("a");
          const { data } = res;
          const blob = new Blob([data], {
            type:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          });
          link.style.display = "none";
          const objectURL = URL.createObjectURL(blob);
          link.href = objectURL;
          const str = res.headers["content-disposition"];
          const reg = /(?<=filename=).+(?=.xlsx)/;
          const encodeFileName = reg.exec(str)?.[0];
          const curFileName = encodeFileName
            ? decodeURI(encodeFileName)
            : "20210410";

          link.setAttribute("download", `${curFileName}.xlsx`);
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(objectURL);
          document.body.removeChild(link);
        });
    }
  }
};
</script>
