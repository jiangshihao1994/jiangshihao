<template>
  <div id="app">
    <button @click="$router.push('/')">首页</button>
    <button @click="$router.push('/register')">注册页</button>
    <router-link to= '/login'>登陆页</router-link>
    <router-link to= '/about'>关于页</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      curpage:'index'
    };
  }
}
</script>

<style>

</style>
