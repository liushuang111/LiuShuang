<template>
  <div>
    <router-view></router-view>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/big">大学</router-link>
      <router-link to="/less">消息</router-link>
      <router-link to="/thods">想法</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav{
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-around;
  }
</style>
