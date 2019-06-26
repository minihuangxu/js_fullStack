<template>
  <div class="play" v-show="playList.length>0">
    <transition 
      name="normal"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img width="100%" height="100%" :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
        </div>
        <!-- 播放页面的头部 -->
        <div class="top">
          <div class="back" @click="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title" v-html="currentSong.name"></h1>
          <h2 class="subtitle" v-html="(currentSong.ar && currentSong.ar[0].name) || (currentSong.artists && currentSong.artists[0].name)"></h2>
        </div>
        <!-- 播放页面的内容 -->
        <div class="middle" @touchstart.prevent="middleTouchStart" 
        @touchmove.prevent="middleTouchMove" @touchend="middleTouchEnd">
          <div class="middle-l" ref="middleL">
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd" ref="imageWrapper">
                <img :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)" 
                alt="" 
                ref="image" 
                :class="cdCls" 
                class="image">
              </div>
            </div>
            <div class="playing-lyric-wrapper">
              <div class="playing-lyric">{{playingLyric}}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 底部的播放器 -->
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="picture">
          <div class="imgWrapper" ref="miniWrapper">
            <img src="" alt="" ref="miniImage" :class="cdCls" width="40" height="40" v-lazy="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)">

          </div>
        </div>
        <div class="text">
          <h2 class="name" v-html="currentSong.name"></h2>
          <p class="desc" v-html="(currentSong.ar && currentSong.ar[0].name) || (currentSong.artists && currentSong.artists[0].name)"></p>
        </div>
        <div class="control">
          <i class="icon icon-mini" v-if="playing">&#xe60a;</i>
          <i class="icon icon-mini" v-else>&#xe606;</i>
        </div>
        <div class="control">
          <i class="icon">&#xe718;</i>
        </div>
        <div class="control">
          <i class="icon">&#xe927;</i>
        </div>
        <div class="bottom-progress-bar">
          <div class="bottom-progress" :style="{width:(currentTime/ duration).toFixed(3) * 100 + '%'}"></div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      playing: true,
      playList: [1],
      currentSong: {},
      currentTime: 3,
      duration: 1,
      playingLyric: 1236546515616515651
    };
  },
  computed: {
    cdCls () {
      return this.playing ? 'play' : ''
    },
    ...mapGetters([
      'fullScreen'
    ])
  },
  methods: {
    open() {
      this.$store.dispatch('selectPlaySong',true)
    },
    enter() {},
    afterEnter() {},
    leave() {},
    afterLeave() {},
    middleTouchStart () {},
    middleTouchMove () {},
    middleTouchEnd () {},
    back() {
      this.$store.dispatch('fullScreen', false)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function';

.play 
  z-index 150
  .normal-player 
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 150
    background rgb(8, 5, 58)
    .background 
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index:-1
      opacity 0.6
      filter blur(20px)
    .top 
      position relative
      margin-bottom 25px
      .back 
        position absolute
        top 0
        left px2rem(12px)
        z-index 50
        .icon 
          display block
          height px2rem(100px)
          line-height px2rem(100px)
          padding 0 px2rem(30px)
          font-size 22px
      .title 
        width 70%
        margin 0 auto
        line-height px2rem(100px)
        text-align center
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 18px
        color #ffffff
      .subtitle 
        line-height px2rem(40px)
        text-align center
        font-size 14px
        color #ffffff
    .middle
      position fixed
      width 100%
      top px2rem(180px)
      bottom px2rem(340px)
      white-space nowrap
      font-size 0
      &-l
        display inline-block
        vertical-align top
        position relative
        width 100%
        height 0
        padding-top 80%
        .cd-wrapper
          position absolute
          left 10%
          top 0
          width 80%
          box-sizing border-box
          height 100%
          .cd
            width 100%
            height 100%
            border-radius 50%
            .image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
              box-sizing border-box
              border-radius 50%
              border 10px solid rgba(255, 255, 255, 0.1)
            .play
              animation rotate 20s linear infinite
        .playing-lyric-wrapper
          width 80%
          margin 30px auto 0 auto 
          overflow hidden
          text-align center
          .playing-lyric
            height px2rem(40px)
            line-height px2rem(40px)
            font-size 14px
            color hsla(0, 0%, 100%, 0.5)
  .mini-player 
    display flex
    align-items center
    position fixed
    left 0
    bottom px2rem(5px)
    z-index 180
    width 100%
    height px2rem(105px)
    background #ea2448
    &.mini-enter-active, &.mini-leave-active 
      transition all 0.4s
    &.mini-enter, &.mini-leave-to 
      opacity 0
    .picture 
      flex 0 0 px2rem(80px)
      width px2rem(80px)
      height px2rem(80px)
      padding 0 px2rem(20px) 0 px2rem(20px)
      .imgWrapper 
        width 100%
        height 100%
        img 
          border-radius 50%
          &.play 
            animation rotate 10s linear infinite
          
          &.pause 
            animation-play-state paused
    .text 
      display flex
      flex-direction columns
      justify-content center
      flex 1
      line-height px2rem(40px)
      overflow hidden
      .name 
        margin-bottom 2px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 14px
        color #ffffff
      .desc 
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 12px
        color hsla(0, 0%, 100%, 0.3)
    .control 
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      text-align center
      padding 0 px2rem(20px)
      .icon 
        font-size 30px
        color #ffffff
    .bottom-progress-bar 
      position fixed
      left 0
      right 0
      bottom 0
      height px2rem(6px)
      background #fe7498
      .bottom-progress 
        height 100%
        background linear-gradient(#902541, #902444)
@keyframes rotate 
  0% 
    transform rotate(0)
  100% 
    transform rotate(360deg)
</style>


