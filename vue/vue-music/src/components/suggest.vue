<template>
  <v-scroll ref="suggest" class="suggest" :data="result" :pullup="pullup" :beforeScroll="beforeScroll"
  @scrollToEnd="searchMore" @beforeScroll="listScroll"
  >
    <ul class="suggest-list">
      <li @click="selectItem(item)" class="suggest-item" v-for="(item, index) in result" :key="index">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
      <!-- <loading v-show="hasMore" class="loading-wraper"></loading> -->
    </ul>
    <div v-show="!hasMore && !result.length" class="no-result-wrapper">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from "@/api"
const limit = 20
export default {
  name: 'suggest',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  components: {
    'v-scroll': scroll
  },
  data () {
    return {
      page: 1,
      pullup: true,
      beforeScroll: true,
      hasMore: true,
      result: []
    }
  },
  methods: {
    refresh () {
      this.$refs.suggest.refresh()
    },
    searchMore () {},
    listScroll () {},
    fetchResult(page) {
      const params = {
        limit,
        offset: page - 1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        if (res.code === 200) {
          console.log(res)
        }
      })
    },
    search () {
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      this.result = []
      this.fetchResult(this.page)
    },
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        return
      }
      this.search(newQuery)
    }
  }
}
</script>

<style>

</style>
