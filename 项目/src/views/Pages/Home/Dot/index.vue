<template>
  <div>
      <div>
          <dl  v-for="(item,index) in list" :key="index">
            <dt>
              <p>{{item.con}}</p>
              <p>{{item.pic}}</p>
            </dt>
            <dd>
              <img :src="item.img" alt="" class="img">
            </dd>
            <button @click="Detail">点击详情</button>
            <button>点赞</button>
          </dl>
      </div>
  </div>
</template>

<script>
import Mock from '../../../../mock/mock'
import axios from 'axios'
// console.log(axios)
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
      Detail(){
        this.$router.push('/detail')
      }
  }
}
</script>

<style>
  .img{
    width: 45px;
    height: 45px;
  }
</style>