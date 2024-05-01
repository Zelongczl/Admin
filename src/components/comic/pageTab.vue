<template>
  <div class="comic-tab">
    <img :src="URL" alt="" class="coverimg" />
    <i>{{ page.name }}</i>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  components: {},
  props: {
    page: Object,
  },
  data() {
    return {};
  },
  computed: {
    // 联机
    // URL() {
    //   let URL = axios.defaults.baseURL + this.page.url;
    //   return URL;
    // },
    // 单机
    URL() {
      return this.page.url;
    },
  },
};
</script>

<style scoped>
.comic-tab {
  position: relative;
  cursor: pointer;
  width: 270px;
  background-color: #77787b;
  height: 300px;
  border-radius: 20px;
}
.comic-tab i {
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  color: white;
  font-size: 0.24rem;
}
.comic-tab .coverimg {
  /* height: 95%; */
  height: 300px;
  /* display: inline-block; */
  filter: brightness(0.6);
}
</style>
