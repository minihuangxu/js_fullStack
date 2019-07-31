<template>
  <div class="map">
    <div id="map"></div>
    <div class="map-tool">
      <p @click="popupShowOnClick">
        <!-- <svg-icon icon-class="city" /> -->
        <span v-if="mapData.district">{{mapData.district}}</span>
        <span v-else-if="mapData.city">{{mapData.city}}</span>
        <span v-else>未知城市</span>
      </p>
      <p @click="mapPopupShowOnClick">
        <!-- <svg-icon icon-class="map" /> -->
        <span>地图</span>
      </p>
      <p>
        <!-- <svg-icon icon-class="loaction" /> -->
        <span>定位</span>
      </p>
    </div>
    <!-- 定位按钮 -->
    <div id="buttonDom" class="buttonDom" @click="locationOnClick">
      <div class="map-start" @click="startGoOnClick" style="z-index: 10009">{{startBtn}}</div>
      <!-- 地址 -->
        <md-popup style="z-index:10000" v-model="addressPopupShow" position="top">
          <div class="popupText">
            <md-field>
              <!-- <! <md-cell-item title="定位方式" addon="html5"/> > -->
              <md-cell-item title="当前地址">
                <p slot="children" style="color:#858B9C;">{{mapAddress}}</p>
              </md-cell-item>
            </md-field>
          </div>
      </md-popup>
      <!-- 主题 -->
      <md-popup style="z-index:10000" v-model="mapPopupShow" position="top">
      <div class="popupText">
        <md-field>
          <md-field-item title="地图" solid>
            <md-radio name="dark" v-model="marriage" label="幻影黑" inline/>
            <md-radio name="normal" v-model="marriage" label="标准" inline/>
            <md-radio name="light" v-model="marriage" label="月光银" inline/>
            <md-radio name="whitesmoke" v-model="marriage" label="远山黛" inline/>
            <md-radio name="grey" v-model="marriage" label="雅士灰" inline/>
            <md-radio name="macaron" v-model="marriage" label="马卡龙" inline/>
            <md-radio name="blue" v-model="marriage" label="靛青蓝" inline/>
            <md-radio name="darkblue" v-model="marriage" label="极夜蓝" inline/>
          </md-field-item>
        </md-field>
      </div>
      </md-popup>
      <!-- 开始跑步 -->
      <transition name="fadeStart">
      <div v-if="stratShow" style="z-index:10008" class="strat-go" :id="isStratGo?'stratGo':''">
        <div class="strat-go-top">
          <p>
            <span>{{distance===0?'0.00':distance}}</span> 公里
          </p>
        </div>
        <div class="strat-go-detail">
          <p>
            <span>{{timerNow}}</span>
            <br>
            <span>总计时间</span>
          </p>
          <p>
            <span>{{speedNow}}</span>
            <br>
            <span>平均配速(km/h)</span>
          </p>
          <p>
            <span>{{kcalNow}}</span>
            <br>
            <span>消耗能量(k)</span>
          </p>
        </div>
        <p v-if="isStratGo" class="strat-go-markText">备注：{{markText}}</p>
        <md-field v-show="!isStratGo" class="strat-go-mark">
          <md-input-item v-model="markText" title="备注" placeholder="输入此次行程备注，不超过40字" :maxlength="40"></md-input-item>
        </md-field>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mand-mobile'
export default {
  name: 'mapLocation',
  data () {
    return {
      map: null,  //当前地图实例
      marriage: 'normal',
      mapData: {},  //定位后所在地理信息
      startBtn: '开始',
      addressPopupShow: false,
      mapAddress: '地点未知， 请尝试重新定位或刷新页面',
      mapPopupShow: false,
      isStartGo: false, //已经结束跑步
      startShow: false, //是否开始跑步
      distance: 0, //当前移动的公里数
      timerNow: 1,
      speedNow: 1,
      kcalNow: 1,
      markText: '', //备注
      tripType: '徒步', //出行方式
    }
  },
  mounted() {
    this.tripType = this.$route.params.tripType
    if (!this.tripType) {
      this.$router.push({ path: '/trip'  })
    } else {
      this.createTrip()
    }
  },
  methods: {
    popupShowOnClick() {},
    mapPopupShowOnClick() {},
    locationOnClick() {},
    startGoOnClick() {},
    // 创建地图实例
    createTrip() {
      Toast.loading('加载中。。。')
      let that = this
      let buttonDom = document.getElementById('buttonDom')
      this.map = new window.AMap.Map('map', {
        resizeEnable: true, //是否监控地图容器的变化
        zoom: 11, //初始化地图层级
        center: [126.56092959999998, 43.920187299999995], //初始化地图的中心点
      })
      this.map.plugin(['AMap.Geolocation', 'AMap.ControlBar'], function() {
        var geolocation = new Amap.GeoLoaction({
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 10000, // 超过10秒后停止定位，默认：5s
        buttonPosition: 'LT', // 定位按钮的停靠位置
        buttonDom: buttonDom,
        buttonOffset: new window.AMap.Pixel(100, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
        })
        // 定位插件-------
        that.map.addControl(geolocation)
        geolocation.getCurrentPosition(function(status, result) {
          // Toast.hide()
        })
        // 返回定位信息
        window.AMap.event.addListener(
          geolocation,
          'complete',
          that.localOnComplete
        )
        window.AMap.event.addListener(geolocation, 'error', that.localOnError) // 返回定位出错信息
        // 罗盘插件---------------------------------------------------------
        that.map.addControl(new window.AMap.ControlBar())
      })
      this.map.on('complete', function() {
        console.log('地图加载完成')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.map 
  width 100vw
  height 100vh
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 1
  .map-title 
    position absolute
    top 5px
    left 0
  
  .map-start 
    width 100px
    height 100px
    border-radius 100px
    background #57c595
    position fixed
    bottom 70px
    left 50%
    margin-left -50px
    text-align center
    line-height 100px
    color #ffffff
    font-weight bold
    font-size 42px
    box-shadow 0px 4px 15px #afaeae
  
  .map-tool 
    width 290px
    height 35px
    position fixed
    top 110px
    left 50%
    margin-left -145px
    background #ffffff
    border-radius 5px
    box-shadow 0px 0px 20px #afaeae
    display flex
    align-items center
    justify-content space-between
    p 
      width 100%
      text-align center
      color #4b4949
      font-size 26px
      span 
        margin-left 10px
      
    
    :pnth-child(1) 
      border-right 1px solid rgb(182, 180, 180)
    
    :pnth-child(2) 
      border-right 1px solid rgb(182, 180, 180)
    
  
  .strat-go 
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background #ffffffd2
    z-index 10000
    &-top 
      width 100%
      height 40%
      display flex
      align-items center
      justify-content center
      color #555555
      font-size 35px
      vertical-align bottom
      font-style oblique
      span 
        font-size 200px
        font-weight bold
      
    
    &-detail 
      display flex
      align-items center
      justify-content space-between
      color #555555
      font-style oblique
      height70px
      p 
        width 100%
        text-align center
        span:nth-child(1) 
          font-size 50px
          font-weight bold
        
        span:nth-child(3) 
          font-size 24px
          font-style initial
        
      
    
    &-mark
      margin-top 70px
    
    &-markText
      padding 20px
      font-size 24px
    
  

#stratGo 
  transition all 0.4s
  height 35%
  background #ffffff
  box-shadow 0 4px 50px #afaeae
  .strat-go-top 
    margin-top 6%
    font-size 30px
    span 
      font-size 150px
    
  
  .strat-go-detail 
    margin-top 7%
    p 
      width 100%
      text-align center
      span:nth-child(1) 
        font-size 30px
        font-weight bold
      
      span:nth-child(3) 
        font-size 24px
        font-style initial
      
    
  

.buttonDom 
  width 176px
  height 70px
  position fixed
  top 200px
  left 480px
  background transparent

.popupText 
  // width 00px
  min-height 200px
  background #ffffff
  padding 20px
  font-size 25px
  box-sizing border-box

#map 
  width 100%
  height calc(100%+50px)
  box-sizing border-box

.fadeStart-enter 
  transform translateY(-100%)

.fadeStart-enter-to 
  transform translateY(0)

.fadeStart-enter-active 
  transition all 0.4s

</style>

