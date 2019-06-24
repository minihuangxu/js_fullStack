<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <v-searchBox></v-searchBox>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <!-- 热门搜索 -->
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li
            class="item"
            v-for="(item, index) in hotKey" 
            :key="index"
            @click="addQuery(item.first)"
            >
              <span>{{item.first}}</span>
            </li>
          </ul>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '../searchBox'
import scroll from '../scroll'
export default {
  data () {
    return {
      query: false,
      hotKey: [
        {first: 'mini'},
        {first: 'Versace'},
        {first: 'SW'},
        {first: 'EL'},
        {first: 'MK'},
      ],
      shortcut: [],
      refreshDelay: 3
    }
  },
  components: {
    'v-searchBox':searchBox,
    'v-scroll':scroll
  }
}
</script>

<style>

</style>
