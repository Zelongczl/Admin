<template>
  <div class="container">
    <chapter-header :id="info.id" @update="update"></chapter-header>
    <chapter-main class="main" ref="main"></chapter-main>
  </div>
</template>

<script>
import ChapterHeader from "@/components/chapter/chapterHeader.vue";
import ChapterMain from "@/components/chapter/chapterMain.vue";
export default {
  data() {
    return {
      info: {},
    };
  },
  components: {
    ChapterHeader,
    ChapterMain,
  },
  created() {
    this.info = this.$route.query.info;
  },
  methods: {
    update() {
      this.$refs.main.getChapters();
    },
  },
};
</script>

<style scoped>
body {
  background-color: #eef1f7;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.main {
  width: 100%;
  height: 100%;
  /* overflow-y: overlay; */
}
</style>