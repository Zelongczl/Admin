<template>
  <div class="main">
    <div class="info">
      <img :src="URL" alt="" />
      {{ info.title }}
    </div>
    <div class="list">
      <div class="comic-tabs" v-for="c in chapters" :key="c.id">
        <chapter-tab :chapterInfo="c"></chapter-tab>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import chapterTab from "./chapterTab.vue";
export default {
  components: { chapterTab },
  data() {
    return {
      coverImg: "",
      info: {},
      detail: {},
      chapters: [],
    };
  },
  created() {
    this.info = this.$route.query.info;
    console.log(this.info);
    this.getChapters();
  },
  props: {},
  computed: {
    // 联机
    URL() {
      let URL = axios.defaults.baseURL + "/" + this.info.portraitImagePath;
      return URL;
    },
  },
  methods: {
    getChapters() {
      var that = this;
      axios.get("/home/" + this.info.id).then(
        function (response) {
          console.log(response);
          that.detail = response.data;
          that.chapters = response.data.chapters;
          console.log("success");
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
}
.info {
  height: 200px;
  /* margin-top: 50px; */
  display: flex;
  align-items: center;
  font-size: 52px;
  font-weight: bold;
}

.info img {
  height: 150px;
  margin-left: 300px;
  margin-right: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.485);
}

.list {
  height: 430px;
  overflow-y: overlay;
  display: flex;
  width: 1100px;
  border-radius: 10px;
  flex-direction: column;
  margin-left: 180px;
  background: white;
  padding: 20px;
}
</style>