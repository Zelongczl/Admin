<template>
  <div class="comic-tab">
    <router-link
      :to="{
        name: 'chapter',
        query: {
          // comicname: comicsName,
          // comicDef: comicDef,
          // comicChap: comicChap,
          info: info,
          // rightList: rightList,
          // comicID: comicID,
        },
      }"
    >
      <img :src="URL" alt="" class="coverimg" />
      <i>{{ info.title }}</i>
      <!-- <i class="el-icon-more icon"></i> -->

      <drop-down class="drop-down"></drop-down>
    </router-link>
  </div>
</template>

<script>
import DropDown from "./DropDown.vue";
import axios from "axios";
export default {
  components: { DropDown },
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  computed: {
    // 联机
    URL() {
      let URL = axios.defaults.baseURL + "/" + this.info.portraitImagePath;
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
.comic-tab {
  position: relative;
  cursor: pointer;
}
.comic-tab i {
  position: absolute;
  left: 0.3rem;
  top: 0.15rem;
  color: white;
  font-size: 0.24rem;
}
.comic-tab .drop-down {
  position: absolute;
  right: 0.25rem;
  top: 0.05rem;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 0.6rem;
}
.comic-tab .coverimg {
  width: 94%;
  /* height: 95%; */
  border-radius: 20px;
  /* display: inline-block; */
  filter: brightness(0.6);
}
</style>