<template>
  <div>
    <!-- START WELCOME SECTION -->

    <section>
      <!-- <div>
        <transition name="fade">
          <img :src="data[0]" v-if="showFlag[0] === true" key="img1">
        </transition>
      </div>
       <div>
        <transition name="fade">
          <img :src="data[1]" v-if="showFlag[1]  === true" key="img2">
        </transition>
      </div>
      <div>
        <transition name="fade">
          <img :src="data[1]" v-if="showFlag[2]  === true" key="img3">
        </transition>
      </div> -->
      <div v-for="(item, index) in data" :key="index">
        <transition name="slide-fade">
          <img :src="item.img" v-if="index === currentIndex" />
        </transition>
      </div>
      <h3 style="display:inline;">我是</h3><h2 style="display:inline;">白杨亦萧萧</h2>
      <p>web开发、全栈探索者</p>
    </section>
  </div>
</template>

<script>
// import AppLayoutLinks from "@/components/layouts/AppLayoutLinks"
export default {
  name: 'AppLayoutAbout',
  components: {
    // AppLayoutLinks
  },
  data() {
    return {
      data: [

        {
          id: 1,
          img: require('../assets/images/three-leaf-clover.jpg')
        },
        {
          id: 2,
          img: require('../assets/images/unique-sunflowers.jpg')
        },
        {
          id: 3,
          img: require('../assets/images/montain.jpg')
        }
      ],
      currentIndex: 0,
      timer: null,
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
@import '../assets/style/scss/about.scss'
</style>