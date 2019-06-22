<template>
  <div>
    <div class="ratings">
      <div class="header">
        <div class="OverallScore">
          <div class="score">{{ratings.score}}</div>
          <p class="scoreText">综合评分</p>
          <div class="rankRate">高于周边商家{{ratings.rankRate}}%</div>    
        </div>
        <div class="eachScore">
          <div class="serverRatings">
            <p class="scoreText">服务态度</p>
            <star :size="36" :score="seller.serviceScore"></star>
            <div class="serverScore">{{ratings.serviceScore}}</div>
          </div>
          <div class="foodRatings">
            <p class="scoreText">商品评分</p>
            <star :size="36" :score="seller.foodScore"></star>
            <div class="foodScore">{{ratings.foodScore}}</div>
          </div>
          <div class="deliveryTime">
            <p class="scoreText">送达时间</p>
            <div class="arrivalTime">{{ratings.deliveryTime}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  name: 'ratings',
  components: {
    star
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
    .then(res => {
      if(res.data.errno === 0){
        this.ratings = res.data.data
      }
    })
  },
  data () {
    return {
      ratings: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';
.ratings
  display flex
  position absolute
  width 100%
  overflow hidden
  .header
    height 120px
    width 100%
    display flex
    .OverallScore
      float left
      width 138px
      height 90px
      margin-top 15px
      border-right 1px solid #dbdbdc
      .scoreText
        margin-top 10px
        text-align center
        font-size 14px
      .rankRate
        font-size 11px
        text-align center
        color #8d8d8d
        margin-top 9px
      .score
        margin-top 10px
        font-size 20px
        color #f08e0e
        text-align center
    .eachScore
      float left 
      margin-top 10px
      .serverRatings, .foodRatings, .deliveryTime
        display flex
        margin-left 15px
        margin-top 10px
      .scoreText
        font-size 14px
      .serverScore
        color #fc9004
      .foodScore
        color #fc9004
      .arrivalTime
        color #8d8d8d
</style>
