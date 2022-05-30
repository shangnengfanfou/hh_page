<template>
  <div>
    <!-- START WELCOME SECTION -->

    <section>
      <div>
        <!-- <transition name="fade">
          <img :src="data[currentIndex]" >
        </transition> -->
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
        require('../assets/images/three-leaf-clover.jpg'),
        require('../assets/images/unique-sunflowers.jpg'),
        require('../assets/images/montain.jpg')
      ],
      showFlag: [true, false, false],
      currentIndex: 0,
      timer: null,
    }
  },
  created() {
  },
  computed: {

  },

  mounted() {
    let _this = this
    this.timer = setInterval(() => {
      _this.showFlag[_this.currentIndex] = false
      if (_this.currentIndex === _this.data.length - 1) {
        _this.currentIndex = 0               
      } else {                 
        _this.currentIndex++
      }
      _this.showFlag[_this.currentIndex] = true
      console.log(_this.showFlag)
    }, 3000)
  }

}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/about.scss'
</style>