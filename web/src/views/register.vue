<template>
  <div class="wrap">
    <header class="header">
      <span>《</span>
      <span>圈子注册</span>
      <span></span>
    </header>
    <main class="main">
      <input type="text" class="name"><br>
      <input type="text" class="password">
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
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ccc;
  }
  .header span{
    font-size: 20px;
  }
  .main{
    width: 100%;
    flex: 1;
    text-align: center;
  }
  .footer{
    width: 100%;
    height: 45px; 
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

</style>