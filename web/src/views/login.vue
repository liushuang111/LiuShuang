<template>
  <div class="wrap">
      <header class="header">
          <div class="top">圈子登录</div>
      </header>
      <main class="main">
          <input type="text" placeholder="用户名" class="name"> <br>
          <input type="text" placeholder="登录密码" class="password"> <i class="hide"></i><br>
          <span class="reg"> 没有账号,快速注册 </span>
      </main>
      <footer class="footer">
        
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width:  100%;
    height: 45px;
    background: red;
  }
  .top{
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    background: #ccc;
  }
  .main{
    width: 100%;
    flex: 1;
    text-align: center;
  }
  .footer{
    width: 100%;
    height: 45px;
    background: red;
  }
  .name{
    width: 300px;
    height: 35px;
    /* margin: 0 auto; */
    background: #ccc;
    outline: none;
    border: 0;
  }
  .password{
    width: 300px;
    height: 35px;
    /* padding: 10px */
    background: #ccc;
    border: 0;
    outline:none;
    position: relative;
  }
  .hide{
    width: 10px;
    height: 10px;
    background: red;
    display: block;
    position: absolute;
    left: 300px;
    top: 158px;
  }
  .reg{
    font-size: 14px;
  }
</style>