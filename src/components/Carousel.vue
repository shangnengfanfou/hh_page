<template>
	<carousel-3d :width="200" :height="300" :space='280' :perspective='0' 
    :animationSpeed='2000' :autoplay="true" :autoplay-timeout="2000" 
    :display="slides.length" :controls-visible="true" 
    :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
    :controls-width="30" :controls-height="60" :clickable="true">
    <slide v-for="(slide, i) in slides" :index="i" :key="i">
      <img :src="slide.img"/>
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
      ]
		}
  }
}
</script>

<style scoped lang="scss"> 
// @import '../assets/style/scss/carousel.scss'
</style>