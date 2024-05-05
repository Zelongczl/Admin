<template>
  <div class="chapter-tab">
    <router-link
      class="router-link"
      :to="{
        name: 'comic',
        query:{
          chapterInfo: chapterInfo
        }
      }"
    >
      <img :src="URL" alt="" class="coverimg" />
      <i>{{ chapterInfo.title }}</i>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props: {
    chapterInfo: Object,
  },
  data() {
    return {};
  },
  computed: {
    // 联机
    URL() {
      let URL = axios.defaults.baseURL + this.chapterInfo.cover;
      return URL;
    },
    // 单机
    // URL() {
    //   return this.coverImg;
    // },
  },
};
</script>

<style scoped>
.chapter-tab {
  position: relative;
  cursor: pointer;
  width: 600px;
  height: 80px;
  background: #eee;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.chapter-tab .router-link {
  display: flex;
  align-items: center;
}

.chapter-tab:hover {
  background: #ddd;
  transition: all 0.1s;
}
.chapter-tab i {
  font-size: 0.25rem;
}
/* .chapter-tab i {
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  color: white;
  font-size: 0.24rem;
} */

/* .chapter-tab .drop-down {
  position: absolute;
  right: 0.25rem;
  top: 0.05rem;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 0.6rem;
} */

.chapter-tab .coverimg {
  width: 100px;
  height: 60px;
  /* height: 95%; */
  border-radius: 10px;
  border: 1px solid #000;
  margin: 0 10px;
  /* display: inline-block; */
  /* filter: brightness(0.6); */
}
</style>
