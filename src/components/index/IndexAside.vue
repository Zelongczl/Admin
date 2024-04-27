<template>
  <el-row class="tac">
    <!-- <el-col> -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-reading"></i>
        <span slot="title">Series</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user"></i>
        <span slot="title">Creator</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-date"></i>
        <span slot="title">Events</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">Colletable</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-trophy"></i>
        <span slot="title">Achievements</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">Analytics</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-star-off"></i>
        <span slot="title">Subscription</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-edit"></i>
        <span slot="title">Author</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-link"></i>
        <span slot="title">Banner Link</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-monitor"></i>
        <span slot="title">Main Cover</span>
      </el-menu-item>
      <el-menu-item index="11">
        <i class="el-icon-menu"></i>
        <span slot="title">Horizontal Cover</span>
      </el-menu-item>
      <el-menu-item index="12">
        <i class="el-icon-top-right"></i>
        <span slot="title">XP</span>
      </el-menu-item>
      <el-menu-item index="13">
        <i class="el-icon-present"></i>
        <span slot="title">Gift</span>
      </el-menu-item>
      <el-menu-item index="14">
        <i class="el-icon-tickets"></i>
        <span slot="title">Reports</span>
      </el-menu-item>
    </el-menu>
    <!-- </el-col> -->
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-row {
  position: absolute; /* 滚动内容绝对定位 */
  top: 0;
  left: 0;
  right: -15px; /*右侧留出滚动条宽度的空间*/
  bottom: 0;
  overflow-y: scroll; /* 只在垂直方向上滚动 */
  padding-right: 0px; /* 避免内容被滚动条遮挡 */
}

.el-menu-item {
  text-align: left;
  font-size: 0.2rem;
}

.el-menu-item i {
  padding-right: 0.15rem;
  font-size: 0.2rem;
}
.el-menu-item [class^="el-icon-"] {
  font-size: 0.25rem;
  padding-right: 0.2rem;
  margin-right: 0;
  width: 0.24rem;
}
</style>