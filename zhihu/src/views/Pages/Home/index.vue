<template>
  <div>
       <div class="nav">
        <router-link to="/home/dot">关注</router-link>
        <router-link to="/home/pull">推荐</router-link>
        <router-link to="/home/hot">热搜</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>