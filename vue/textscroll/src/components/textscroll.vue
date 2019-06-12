<template>
  <section>
    <div class="textscroll">
      <transition-group tag="ul" :name="scrolltype" >
        <li v-for="(item, index) in dataLists" :key="index" v-show="index === count">
          <p>{{item.text}}</p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      dataList: [{ text: "坚持" }, { text: "加油" }, { text: "努力" }],
      count: 0
    };
  },
  props: ['scrolltype', "dataLists"],
  created() {
    console.log(1121)
    setInterval(() => {
      this.getText()
    }, 1500);
    console.log(23232)
  },
  methods: {
    getText() {
      let len = this.dataList.length;
      if (len === 0) {
        return;
      }
      if (this.count === len - 1) {
        this.count = 0;
      } else {
        this.count += 1;
      }
    }
  }
}
</script>

<style scoped>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #ffffff;
  overflow: hidden;
  height: 40px;
}
li{
  height: 40px;
  list-style-type: none;
  line-height: 1;
  overflow: hidden;
}
/* 往上滚动 */
.scroll-up-enter-active {
  transition: all 1s ease;
}
.scroll-up-leave {
  transition: all 1s ease;
}
.scroll-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scroll-up-leave-to {
  transform: translate3d(0, -100%, 0);
}
/* 往左滚动 */
.scroll-left-enter-active {
  transition: all 1s ease;
}
.scroll-left-leave {
  transition: all 1s ease;
}
.scroll-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scroll-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
