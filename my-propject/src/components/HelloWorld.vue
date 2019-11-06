<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <div>{{item.one}}</div>
      <div>{{item.two}}</div>
      <div>{{item.three}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Mock from '../mock/mock'
export default {
    data() {
      return {
        list:[1,2,5,6]
      }
    },
    created(){
      axios.get('/app').then((res)=>{
        console.log(res.data)
      })
    }
}
</script>

<style>

</style>