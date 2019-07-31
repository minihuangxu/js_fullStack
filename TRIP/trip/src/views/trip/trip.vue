<template>
  <div class="trip">
    <div class="trip-box" v-show="$route.name !== 'Map'">
      <img src="../../assets/img/bg.png" class="trip-bg" alt="">
      <div class="trip-con">
        <md-tabs v-model="TripWay">
          <md-tab-pane name="徒步" label="徒步"></md-tab-pane>
          <md-tab-pane name="跑步" label="跑步"></md-tab-pane>
          <md-tab-pane name="骑行" label="骑行"></md-tab-pane>
          <md-tab-pane name="自驾" label="自驾"></md-tab-pane>
        </md-tabs>
        <div class="trip-border">
          <p>累计{{TripWay}}</p>
          <strong>{{distance}}</strong>
          <p>本月{{TripWay}}{{distance}}公里</p>
        </div>
        <div class="trip-start" @click="tripStartOnClick">开始{{TripWay}}</div>
      </div>
    </div>
    <transition name="fademap">
      <div class="trip-map" v-if="$route.name === 'Map'">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'trip',
  data() {
    return {
      TripWay: '徒步',
      distance: 0.0
    }
  },
  methods: {
    tripStartOnClick() {
      this.$router.push({ name: 'Map', params: { tripType: this.TripWay}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.trip 
  width 100%
  height 100%
  position relative
  .trip-bg 
    width 100%
    height 100vh
    position absolute
    top 0
    left 0
    opacity 0.5
  
  .trip-con 
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index 10
  
  .trip-border 
    width 225px
    height 225px
    border-radius 450px
    margin 50px auto
    border 8px dashed #c5d1d3
    border-bottom none
    p:nth-child(1) 
      text-align center
      margin-top 80px
      color #4e4956
      font-size 33px
      letter-spacing 2px
    
    strong 
      display block
      text-align center
      margin-top 35px
      color #4e4956
      font-size 130px
    
    p:nth-child(3) 
      text-align center
      margin-top 35px
      color #9a9b9b
      font-size 28px
      cursor pointer
      text-decoration underline
    
  
  .trip-start 
    width 250px
    height 45px
    border-radius 45px
    margin auto
    background #57c595
    text-align center
    line-height 45px
    color #ffffff
    font-size 17px
    letter-spacing 1px
  
  .trip-map 
    widows 100%
    height 100%
  

.fademap-enter 
  opacity 0

.fademap-enter-active 
  transition all 0.3s

.fademap-leave-to 
  opacity 0

.fademap-leave-active 
  transition all 0.3s

</style>
<style lang="stylus">
.md-tab-bar 
  background-color transparent
.md-tab-bar-item
  font-size 16px
  min-height 50px 
</style>
