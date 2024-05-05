<template>
  <div class="header">

      <i class="el-icon-back" @click="getBack"></i>
    
  </div>
</template>

<script>
export default {
  methods: {
    getBack() {
      window.history.back(-1);
      window.history.back(-1);
    },
  },
  data() {
    return {};
  },
  props: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  align-items: center;
  background: black;
}

.header i {
  font-size: 40px;
  display: inline-block;
  margin-right: 900px;
  margin-left: 30px;
  color: #fff;
  cursor: pointer;
}
</style>
