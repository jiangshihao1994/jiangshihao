<template>
<div>
<ul>
    <li v-for="item in items">{{item.msg}}</li>
</ul>
</div>
</template>

<script>
    export default{
        data () {
            return{
                items :[
                    {msg : 'new01'},
                    {msg : 'new02'},
                    {msg : 'new03'}
                ]
            }
        },
        created(){
            console.log(this.items)
        }
    }


</script>