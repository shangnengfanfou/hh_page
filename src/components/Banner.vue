<template>
  <div class="banner">
    <div v-for="(item, index) in data" :key="index">
      <transition name="slide-fade">
        <img :src="item.img" v-if="index === currentIndex" />
      </transition>
    </div>
    <div class="welcome-section">
      <div>
        <h3 style="display:inline;">我是&nbsp;</h3><h2 style="display:inline;">白杨亦萧萧</h2>
        <p>web开发、全栈探索者</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  data() {
    return {
      data: [
        {
          id: 1,
          img: require('../assets/images/p3.jpg')
        },
        {
          id: 2,
          img: require('../assets/images/p2.jpg')
        },
        {
          id: 3,
          img: require('../assets/images/p1.jpg')
        },
        {
          id: 4,
          img: require('../assets/images/p5.jpg')
        },
        {
          id: 5,
          img: require('../assets/images/p4.jpg')
        }
      ],
      currentIndex: 0,
    }
  },
  created() {
    this.autoPlay()
  },
  computed: {

  },

  methods: {
    // 自动轮播，每隔 1 秒轮播一次
    autoPlay() {
      setInterval(() => {
        this._setIndex()
      }, 6000)
    },
    // 设置当前索引
    _setIndex() {
      this.currentIndex++
      if (this.currentIndex === this.data.length) {
        this.currentIndex = 0
      } 
    }
  }
}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/banner.scss'
</style>