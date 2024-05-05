<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import IndexView from "./views/indexView.vue";

export default {
  name: "App",
  components: {
    // IndexView,
  },
};
</script>

<style lang="scss">
a {
  color: inherit;
  text-decoration: none;
}

body {
  background-color: #eef1f7;
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
}
html {
  height: 100%;
}
</style>

