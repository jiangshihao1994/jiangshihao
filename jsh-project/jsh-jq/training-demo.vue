<template>
<div class="traininglist">
  <header>
    <i class="mintui mintui-back"></i>
     <div class="title">集训记录</div>
  </header>
  <div class="box1">
    <div class="box2"  @click='detail(item.id)' v-for='(item,index) in Slist' :key='index'>
        <img src="../../../static/img/personal/1.jpg" class="xqk" width="120px" height="77px">
      <div class="left">{{item.groupName}}</div>
      <div>
        <span class="new1">{{item.createDate}}</span>
        <span class="right" v-if='item.status==0'>待审核</span>
        <span class="right" v-if='item.status==1'>已申请</span>
        <span class="right" v-if='item.status==2'>已拒绝</span>
      </div>
    </div>
  </div>  

  

</div>
</template>
<script>
  export default {
  name: 'training-list',
  data () {
    return {    
      msg: '',
      header: true,
      Slist:[],
      qs: false
    }
  },
  created(){
    this.list()
  },
  methods:{
      list(){
        this.$ajax.post('/service/intensifiedTraining/myIntensifiedTraining', {}).then((res) => {
          if(res.data.code==0) {
            this.Slist = res.data.data
            if(this.Slist.length==0){
               this.qs = true
            }
          }else{
            this.MessageBox('提示', res.data.msg)
          }
        });
      }
  }
}
</script>



<style>
.traininglist{
  height: 100%;
  background: #f5f5f9;
}
header{
  border: none;
}
.box1{
  width: 100%;
  background-color: white;
  padding: 0 15px;
  overflow: hidden;
  box-sizing: border-box
}
.box2{
  border-bottom: solid .5px #eee;
  background: white;
  padding: .5rem 3%;
}
.xqk{
  float: left;
  margin-right: 10px;
  
}
.left{
  font-size: 14px;
  font-family: PingFangSC-Regular;
  margin-bottom: 45px;
  color: #333333
}
.right{
  float: right;
}
.new1{
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: #9B9B9B ;
}
.box3{
  width: 100%;
  background-color: white;
  padding: 0 15px;
  overflow: hidden;
  box-sizing: border-box
}
.box4{
    border-bottom: solid .5px #eee;
  background: white;
  padding: .5rem 3%;
}
.left2{
  font-size: 14px;
  font-family: PingFangSC-Regular;
  margin-bottom: 45px;
  color: #333333
}
.right2{
  float: right;
}
.new2{
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: #9B9B9B ;
}






</style>

