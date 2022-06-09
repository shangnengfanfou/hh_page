<template>
	<carousel-3d :width="650" :height="350" :space='500' :perspective='15' 
    :animationSpeed='300' :autoplay="true" :autoplay-timeout="3000" 
    :display="3" :controls-visible="true" :border="0"
    :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
    :controls-width="30" :controls-height="60" :clickable="true"
    @before-slide-change="onBeforeSlideChange">
    <slide v-for="(slide, i) in slides" :index="i" :key="i" style="background-color:rgba(0,0,0,0);">
      <div class="skill-info" :style="{'opacity': i==index ? 1: 0.6, 'background-color':i==index ? '#99A9BF': '#D8E0E9'}">
        <p style="font-size:50px">{{i}}</p>
      </div>
    </slide>
	</carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel",
  components: {
    Carousel3d,
    Slide
  },
  data() {
		return {
			slides: [
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
      activeColor: '#99A9BF',
      index: 1
		}
  },
  methods: {
    onBeforeSlideChange(index) {
      console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
      // this.activeColor = '#d3dce6'
      this.index = index
    },
  }
}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/carousel.scss'
</style>