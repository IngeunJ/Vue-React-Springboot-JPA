<template>
   <div>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SSK</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#"><router-link to="/">Home</router-link></a></li>
      <li><a href="#"><router-link to="/calculator">계산기</router-link></a></li>
      <li><a href="#"><router-link to="/memberlist">회원목록</router-link></a></li>
      <li><a href="#"><router-link to="/joinform">회원가입</router-link></a></li>
      <li><a href="#"><router-link to="/loginform">로그인</router-link></a></li>
    </ul>
  </div>
</nav>
   </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>