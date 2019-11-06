<template>
    <div>
        <h1 class="h1">{{info.title}}</h1>
        <p class="p">{{info.time}}</p>
        <img :src="info.banner" alt="">
        <div class="div">{{info.description}}</div>
        <p class="pp">{{`${info.favor}赞同，${info.comment}评论`}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            info: {}
        }
    },
    async created(){
        let id = this.$route.params.id;
        // 调用获取详情接口
        let data = await axios.get(`/api/detail?id=${id}`)
        this.info = data.data;  
    }    
}
</script>
<style>
    .h1{
        font-size:30px;
        
    }
    .p{
        font-size: 12px;
    }
    .div{
        font-size: 14px;
    }
    .pp{
        font-size: 12px;
    }
</style>
