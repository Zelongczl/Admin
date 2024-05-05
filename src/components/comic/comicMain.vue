<template>
  <div class="main">
    <div class="list">
      <div class="comic-tabs" v-for="p in pages" :key="p.id">
        <page-tab :page="p"></page-tab>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import pageTab from "./pageTab.vue";
export default {
  components: { pageTab },
  data() {
    return {
      pages: [],
      staticPages: [
        {
          id: 1,
          name: "2024.05.01",
          url: require("@/assets/pages/1.jpg"),
        },
        {
          id: 2,
          name: "2024.05.01",
          url: require("@/assets/pages/2.jpg"),
        },
        {
          id: 3,
          name: "2024.05.01",
          url: require("@/assets/pages/3.jpg"),
        },
        {
          id: 4,
          name: "2024.05.01",
          url: require("@/assets/pages/4.jpg"),
        },
        {
          id: 5,
          name: "2024.05.01",
          url: require("@/assets/pages/5.jpg"),
        },
        {
          id: 6,
          name: "2024.05.01",
          url: require("@/assets/pages/6.jpg"),
        },
      ],
    };
  },
  created() {
    this.getPages();
    console.log(this.chapterInfo);

  },
  props: {
    chapterInfo: Object
  },
  computed: {
    // 联机
  },
  methods: {
    getPages() {
      // 联机
      var that = this;
      axios.get("/admin/chapter/" + that.chapterInfo.id).then(
        function (response) {
          console.log(response);
          that.pages = response.data.pages;
          console.log(that.pages);
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background: #eef1f7;
  padding-top: 20px;
}

.list {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(auto-fill);
  grid-row-gap: 20px;
  /* grid-gap: 10px; */
  /* overflow-y: overlay;  */
}
.comic-tabs {
  /* white-space: nowrap; */
  display: flex;
  justify-content: center;
  /* height: 160px; */
  /* margin: 1px 3px; */
}
/* 整体滚动条 */
::-webkit-scrollbar {
  width: 3px; /* 控制滚动条的宽度 */
  position: absolute;
  right: 0;
}

/* 滚动条轨道 */
/* ::-webkit-scrollbar-track {
  background: transparent;
} */

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #d7dee0; /* 滑块的颜色 */
  border-radius: 20px;
}

/* 滑块hover效果 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滑块hover的颜色 */
}
</style>
