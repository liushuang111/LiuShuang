<template>
  <div>
    <!-- 我是详情页 -->
      <div>
          <dl  v-for="(item,index) in list" :key="index">
            <dt>
              <p>{{item.con}}</p>
              <p>{{item.pic}}</p>
            </dt>
            <dd>
              <img :src="item.img" alt="" class="img">
            </dd>
            <button @click="Back">返回</button>
          </dl>
      </div>
  </div>
</template>

<script>
import Mock from '../mock/mock'
import axios from 'axios'
export default {
    data(){
    return {
      list:[]
    }
  },
  created(){
     axios.get('/app').then((res)=>{
       console.log(res.data)
       this.list= res.data
     })
  },
  methods:{
    Back(){
      this.$route.go('-1')
    }
  }
}
</script>

<style>

</style>