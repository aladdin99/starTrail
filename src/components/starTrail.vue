<template>
  <div class="starTrail">
      <div class="textDate">
        <textDate></textDate>
      </div>
<!--    明天过后-->
      <audio src="http://fdfs.xmcdn.com/group55/M01/6A/20/wKgLdV39kpShIdVWABiFZC7Gi3g631.mp3" autoplay></audio>
      <div class="stars">
          <div v-for="(item,index) in stars" :key="index" class="star" :style="setStar()"></div>
      </div>

      <!--背景层，不要删除，不然没有作用-->
      <div class="img-wrap"></div>
  </div>
</template>

<script>
import textDate from "./textDate.vue";
export default {
  name: 'HelloWorld',
  components: {
    textDate,
  },
  data () {
    return {
      stars: 1200,//星星的密集程度 递增
      distance: 1400,//星星的看起来的距离,值越大越远
    }
  },
  methods:{
    setStar(){
      let obj = {},
          s = 0.2 + (Math.random() * 1),
          curR = this.distance + (Math.random() * (-800));
      obj.transformOrigin = "0 0 " + curR + "px";
      obj.transform =  " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")";
      return obj;
    }
  },
  mounted() {
      this.setStar();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .starTrail{position: relative;}
  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }

  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    bottom: 0;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
  }

  .star {
    width: 2px;
    height: 2px;
    background: #F7F7B6;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0 -300px;
    transform: translate3d(0, 0, -300px);
    backface-visibility: hidden;
  }

  .img-wrap {
    height: 100vh;
    width: 100vw;
    background: url("../assets/bgm.png") no-repeat;
    background-size: 100%;
    padding:0;
    background-position: bottom;
    opacity: 0.5;
  }

  .textDate{
    display: flex;width: 100vw;position: absolute;justify-content: center;align-items: center;
  }
</style>
