<template>
	<carousel-3d :width="650" :height="350" :space='500' :perspective='15' 
    :animationSpeed='500' :autoplay="true" :autoplay-timeout="5000" 
    :display="3" :controls-visible="true" :border="0"
    :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
    :controls-width="30" :controls-height="60" :clickable="true"
    @before-slide-change="onBeforeSlideChange">
    <slide v-for="(slide, i) in slides" :index="i" :key="i" style="background-color:rgba(0,0,0,0);">
      <div class="skill-info" :style="{'opacity': i==index ? 1: 0.6, 'background-color':i==index ? '#99A9BF': '#D8E0E9'}">
        <h4>{{slide.skillDesc}}</h4>
        <div>
          <span v-for="(detail, index) in slide.skillDetails" :key="index" >{{detail}}</span>
        </div>
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
          skillDesc: '前端技术',
          skillDetails: ['html', 'scss', 'vuejs', 'element-ui', 'ssr', 'es5', 'es6']
        },
        {
          id: 2,
          skillDesc: 'nodejs开发',
          skillDetails: ['eggjs', 'koa2', 'express', 'joi', 'class-validator', 'child_process', 'sequlize', 'typeorm']
        },
        {
          id: 3,
          skillDesc: 'go后端',
          skillDetails: ['网络编程', 'gorm', 'echo', '学习中']
        },
        {
          id: 4,
          skillDesc: '数据库相关',
          skillDetails: ['mysql', 'mongodb', 'redis', '表设计', '索引优化', '性能优化']
        },
        {
          id: 5,
          skillDesc: '微服务&虚拟化技术',
          skillDetails: ['docker', 'kubernetes', 'deployment/service/pod', 'kong网关', 'grpc', 'apollo配置中心']
        },
        {
          id: 6,
          skillDesc: '其他',
          skillDetails: ['nginx', 'openresty', 'rabbitmq', '领域驱动设计', 'linux常用命令', '简单shell', 'jenkins']
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