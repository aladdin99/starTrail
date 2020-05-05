<template>
  <div>
<!--    <span class="textDate">我们已经成为好友{{dateTime .day}}天{{dateTime .hour}}小时{{dateTime .min}}分钟{{dateTime .sec}}秒啦~</span>-->
<!--    <span class="textDate">{{dateTime .day}}-{{dateTime.month}}-{{dateTime.date}} {{dateTime .hour}}:{{dateTime .min}}:{{dateTime .sec}}</span>-->
  </div>
</template>

<script>
export default {
  name: 'textDate',
  data () {
    return {
      dateTime : {day: 0,hour: 0,min: 0,sec: 0,month: 0,date: 0}
    }
  },
  methods:{
    getDate(){
      let startTime = new Date('2020-2-14 22:44'); // 开始时间
      let endTime = new Date(); // 结束时间
      let sec = Math.floor((endTime - startTime) / 1000),
        min = Math.floor((endTime - startTime) / 1000 / 60),
        hour = Math.floor((endTime - startTime) / 1000 / 60 / 60),
        day = Math.floor((endTime - startTime) / 1000 / 60 / 60 / 24);

      // this.dateTime .day = day;//天数
      // this.dateTime.hour = hour - (day*24);//小时
      // this.dateTime.min = min - (hour*60);//分钟
      // this.dateTime.sec = sec - (min*60);//秒

      this.dateTime.day = new Date().getFullYear();//年份
      this.dateTime.month = new Date().getMonth() + 1;//月份
      this.dateTime.date = new Date().getDate();//日期
      this.dateTime.hour =  new Date().getHours();//小时
      this.dateTime.min =  new Date().getMinutes();//分钟
      this.dateTime.sec =  new Date().getSeconds();//秒
    },
    currenTime(){
      setInterval(this.getDate,1000);
    }
  },
  mounted() {
    this.currenTime();
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .textDate{
    font-size: 2rem;text-align: center;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: .25rem;
    line-height: 3rem;
    color: rgba(255,255,255,.6);
    text-shadow:
      1px 1px 0 rgba(0,0,0,.1),
      2px 2px 0 rgba(0,0,0,.1), /* end of 2 level deep grey shadow */
      3px 3px 0 rgba(0,0,0,.1),
      4px 4px 0 rgba(0,0,0,.1),
      5px 5px 0 rgba(0,0,0,.1),
      6px 6px 0 rgba(0,0,0,.1); /* end of 4 level deep dark shadow */
  }
</style>
