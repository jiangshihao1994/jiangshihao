<template>
<div>
<h2>这是登陆页</h2>
<ul>
<li>
     <router-link to= '/Login/news'>news</router-link>
     <router-link to= '/Login/message'>message</router-link>
</li>
</ul>
<div>
    <router-view></router-view>
</div>
</div>
</template>

<script>
    export default{

    }

</script>

