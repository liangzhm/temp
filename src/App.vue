<template>
  <div id="app">
    <div class="logo">
      <div class="tab">
        <div class="tab-item">太原</div>
        <div class="tab-item">通信</div>
        <div class="tab-item ">
          <div class="c">
            <div class="icon c1"></div>
            <div class="icon c2"></div>
            <div class="icon c3"></div>
          </div>
        </div>
      </div>  
      <div class="grap-number">
         <div class="icon-grap-number"></div>
         <div class="txt-grap-number">抢靓号</div>
      </div>
      <div class="boll">
        <div class="text-top">
          <p class="text-top-font">通用流量剩余</p>
          <p class="L0">30.22<span>GB</span></p>
        </div>
        <div class="text-bottom">
          <div class="icon-font"></div>
          <div class="font">
            冲流量
          </div>
        </div>
        <div class="shuiqiucontent">
          <div class="shui shui1"></div>
          <div class="shui shui2"></div>
          <div class="shui shui3"></div>
        </div>
      </div>
      <div class="detail">
        <div class="detail-item">
          <p>话费余额</p>
          <span class="L0">88.66</span>元
        </div>
        <div class="detail-item">
          <p>通用语音</p>
          <span class="L0">320</span>分钟
        </div>
        <div class="detail-item">
          <p>当前积分</p>
          <span class="L0">5000</span>
        </div>
        <div class="detail-item">
          <p>用户星际</p>
          <p>＊＊＊</p>
        </div>
      </div>
      <div class="play">
        <div class="play-item">充话费</div>
        <div class="play-item">选套餐</div>
        <div class="play-item">兑积分</div>
        <div class="play-item">星级特权</div>
      </div>
      <div class="date">
        <p>截止2019/5/17 12:00</p>
      </div>
    </div>
    <div class="bulletin">
     <div class="news">
      <ul id="roll-ul">
        <li v-for="item in list" ref="rollul" :class="{anim:animate==true}">
          <span class="name">{{item.name}}</span>
         </li>
      </ul>
     </div> 
    </div>
    <div class="r">
      <router-link  to="/detail">详情></router-link>
    </div>
    <div class="content"  ref='content'>
      <ul>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li><li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
        <li>内容</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

import { setInterval, setTimeout } from 'timers';
export default{
  data(){
    return{
      animate:true,
        list:[
            {"name":"我的宽带：2条","site":"北京门头沟区1","gsmc":"柠檬树装饰1"},
            {"name":"我的带宽电视：1条","site":"北京门头沟区2","gsmc":"柠檬树装饰2"}    
        ]
    }

  },
  created(){
       setInterval(this.scroll,2000) 

       this.$nextTick(()=>{
        this._initScroll(); 
       })

},
   methods:{
       scroll(){
        let con1 = this.$refs.rollul;
        con1[0].style.marginTop='30px';
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
            that.list.push(that.list[0]);
            that.list.shift();
            con1[0].style.marginTop='0px';
            that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },0)
       }
     },
     _initScroll(){
         this.content = new BScroll(this.$refs.content,{click:true} ) 
     },
  computed:{
    text(){
      return{
        id:this.number,
        val:this.arr[this.number]
      }
    }
  },
  mounted(){
    this.startMove()
  },
mwthods:{
  startMove(){
    let timer=setTimeout(()=>{
      if(this.number===2){
        this.number=0;
      }else{
        this.number+=1;
      }
      this.startMove();
    },2000)
  }
}

}
</script>

<style  lang="scss" scoped>
.logo{
  width: 100%;
  height: 250px;
  background: url('./img/background.png') no-repeat;
  background-size: 100%;
  position: relative;
}
.tab{
   display:flex;
   width:100%;
   height:40px;
   line-height: 40px;
   color:white;
   font-weight:700;
 }
 .tab-item{
      flex: 1;
      text-align:center; 
      font-size:18px;  
 } 
 
 .c{
    position:absolute;
    right:0;
    top:10px;
    display:flex;
    .icon{
      width:15px;
      height: 15px;
      margin-right:10px;
    }
    .c1{
      background:url('./img/1.png')  no-repeat;
      background-size:100%;
    }
     .c2{
      background:url('./img/2.png')  no-repeat;
      background-size:100%;
    }
     .c3{
      background:url('./img/3.png')  no-repeat;
      background-size:100%;
    }
  }
 @-webkit-keyframes move_wave {
    0% { background-position:0 0 }
    to { background-position:532px 0 }
}
 
@keyframes move_wave {
    0% { background-position:0 0 }
    to { background-position:532px 0 }
}

.boll {
    width: 110px;
    height: 110px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #72bafe;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
}
.grap-number {
    position: absolute;
    right: 0;
    top: 50px;
    .txt-grap-number {
      position: relative;
      top:0;
      width: 60px;
      height: 25px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 14px 0 0 14px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 25px
    }
    .icon-grap-number {
      position: relative;
      left: -5px;
      top: 10px;
      width: 15px;
      height: 18px;
      background: url('./img/5.png') no-repeat;
      background-size: 100%;
    }
  }
.text-top{
  position: absolute;
  color: #3875ff;
  font-weight: 700;
  top:20px;
  left:50%;
  transform: translateX(-50%);
  font-size: 10px;
  .txt-top-font{
        color: #3875ff;
        
  }
  .L0{
        font-size:18px;
        font-weight: bold;
        margin-top: 10px
  }
 
}
.text-bottom{
      z-index:10;
      position: absolute;
      bottom:10px;
      left:50%;
      transform: translateX(-50%);
      .icon-font{
      position: relative;
      left: 46px;
      top: 10px;
      width: 15px;
      height: 18px;
      background: url('./img/4.png') no-repeat;
      background-size: 100%;

      }
      .font{
        color: #9cbaff;
        background:#fff;
        width: 50px;
        height: 20px;
        line-height: 20px;
        border:1px solid #fff;
        border-radius: 10px;
        font-size: 10px;
        text-align: center
      }
    }
.shuiqiucontent {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    position: relative;
    overflow: hidden;
    margin: 3px;
    border-radius: 50%;
}
.shui3 {
      height: 50%;
      background: url(./img/water.png) repeat-x;
      position: absolute;
      width: 100%;
      -webkit-animation: move_wave 4s linear infinite;
      animation: move_wave 4s linear infinite;
}
.shui1 {
      opacity: .5;
      background-position: 120px 0;
      -webkit-animation: move_wave 10s linear infinite;
      animation: move_wave 10s linear infinite;
}
 
.shui2 {
      opacity: .3;
      background-position: 60px 0;
      -webkit-animation: move_wave 8s linear infinite;
      animation: move_wave 8s linear infinite;
}


.shui {
    position: absolute;
    width: 1000px;
    height: 1000px;
    top: 50px;
    left: 50%;
    margin-left: -500px;
}
/*..shuiqiu:hover .shui1 {
    animation: roll 5s linear infinite;
}
.shuiqiu:hover .shui2 {
    animation: roll 7s linear infinite;
}
.shui1 {
    border-radius: 45%;
    background: #c4dfff;
    animation: roll 10s linear infinite;
}
.shui2 {
    border-radius: 46%;
    background: #72bafe;
    animation: roll 14s linear infinite;
}*/
.detail{
   display:flex;
   width:100%;
   height:40px;
   line-height: 20px;
   color:white;
   font-weight:700;
   margin-top:-10px

}
.detail-item{
      flex: 1;
      text-align:center; 
      font-size:14px;
.L0{
   font-size:18px;
   font-weight: bold
}
}
.play{
  display:flex;
  width:100%;
  height:20px;
  line-height: 20px;
  color:white;
  font-weight:700;
  margin-top:7px;


}
.play-item{
  flex: 1;
  text-align:center; 
  font-size:14px;
  border:1px solid #fff;
  border-radius: 6px;
  margin: 0 10px ;
  vertical-align: top;

}
.date{
  color:white;
  font-size:10px;
p{margin:3px 10px 2px 5px}
  
}
.bulletin{
   color:white;
   font-weight: 700;
   height:30px;
   background:#3875ff;
   font-size:14px;
   margin-top: -10px;
 .news{
    padding-left: 15px;
    
    margin: 10px auto;
    overflow: hidden;
    transition: all 0.5s;
  li{
    height:25px;
    line-height: 25px;
  }
  .anim{
  transition: all 0.5s;
 }
 
}

}  
.r{
     weight:75px;
     float:right;
     margin-top:-23px;
     margin-right:10px;
     color:white;
     font-size:14px;
a{
  color:white
}
} 
.container-menu{
  display:flex;
  position:absolute;
  width:100%;
  height:273px;
  top:280px;
  bottom:0;
  overflow:hidden;
}  
 
</style>