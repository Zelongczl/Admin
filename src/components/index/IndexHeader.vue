<template>
  <div class="header">
    <img src="@/assets/shrine_logo.png" alt="" />
    <i class="el-icon-user-solid icon"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  height: 70px;
  display: inline;
  margin-top: 6px;
  margin-left: 30px;
}
.header .icon {
  display: block;
  margin-right: 15px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #f9a51c;
  border-radius: 100%;
  font-size: 0.2rem;
  color: #000;
  cursor: pointer;
}
</style>