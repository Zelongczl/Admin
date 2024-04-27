<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-more icon"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Assign</el-dropdown-item>
        <el-dropdown-item>Edit</el-dropdown-item>
        <el-dropdown-item>Delete</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-dropdown {
  display: block;
}
.el-dropdown i {
  color: white;
  font-size: 0.3rem;
}
.el-dropdown i:hover {
  background: rgba(0, 0, 0, 0.142);
  border-radius: 100%;
}
</style>