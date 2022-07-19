<template>
  <div class="row">
    <div class="row1" v-if="!isList">
      <ContentCard v-for="(item, index) in contentData" :key="index" :data="item" :contentVisible="true" class="row1-resize"/>
    </div>
    <div class="row1" v-if="isList">
      <v-md-editor :value="markdown" mode="preview" class="row1-content"></v-md-editor>
    </div>
    <div class="row2">
      <div class="content-visited">
        <p>最多浏览</p>
        <ContentCard v-for="(item, index) in visitedData" :key="index" :data="item" class="row2-resize" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard"
import {request, METHOD} from '../utils/request'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  components: {
    ContentCard,
    // ContentVisited
  },
  created() {
    console.log(this.$route.path)
    request('/api/article/123456', METHOD.GET)
    .then(resp => {
      const { content } = resp.data
      this.markdown = Buffer.from(content, 'base64').toString()
    })
  },
  data() {
    return {
      isList: true,
      markdown: '',
      contentData: [
        {
          pic: "https://cdn-images-1.medium.com/max/2560/1*szP5mmBU8NjkLbO2HE3bJw.png",
          time: '2022年 04月 10日',
          title: '前端工程师技术',
          content: '在一个技术、库和框架数量不断增长的行业中，高效地学习才是关键。不管你是新的Web开发人员，还是你已经入门前端并有了一些开发经验，都可以了解一下，以下列出的技术，要么是我花费时间学习但从未在我的职业生涯中实际使用过的，要么是2021年不再重要的事情'
        },
        {
          pic: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86e6d81ef6f641edbf47c21cae5dd383~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 09日',
          title: '如何把前端项目写成一座屎山',
          content: '最近几年前端发展的非常快，SPA的繁荣让前端的工程化也越来越重。在很多场景下，前端的复杂度和难度也早已经超过了后端。但快速的发展下，前端也逐渐暴露出了许多问题。众所周知，前端从业人员很少谈程序的设计原则或设计思想。'
        },
        {
          pic: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bdc70f186bb4f6f808f5e42c7b133af~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 08日',
          title: 'ts保姆级教程',
          content: 'TypeScript，简称 ts，是微软开发的一种静态的编程语言，它是 JavaScript 的超集。 那么它有什么特别之处呢?'
        },
        {
          pic: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42f6ad7187af4cfaae73bf112aa29ecf~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 07日',
          title: '前端配置化真香',
          content: '本文从 场景介绍 、 设计&实现 、 性能优化 三个部分进行讲解。笔者当时的技术栈是 vue2 + element-ui，文章案例也是（其实大家不必纠结于技术栈，掌握设计的思路和理念，什么框架都是一样的）'
        },
        {
          pic: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad18a40559f74554baff60c9b7f022b8~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 06日',
          title: '代码越写越乱？那是因为你没用责任链',
          content: '在开始学习责任链之前，先看一下在开发中常见的问题。下面是前端用来处理 API 错误码的代码：'
        },
        {
          pic: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59443e9c4191457d9184c46718624e17~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 05日',
          title: '前端 Vscode 插件推荐',
          content: 'VScode 对于前端同学来说绝对是非常熟悉的，大家多多少少都有几个自己非常中意的插件。最近经过自己的探索以及同事的推荐，结合实际开发，甄选出了几款对实际开发效率非常有帮助的 VScode 插件。'
        },
        {
          pic: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a6afead4d06476ea5eff748cc9a5dc2~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 01日',
          title: '程序员常用网站',
          content: '2022你需要了解的程序员网站如下：https://www.google.com、https://www.bing.cn、https://www.stackoverflow.com、https://www.baidu.com'
        }
      ],
      visitedData: [
        {
          pic: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bdc70f186bb4f6f808f5e42c7b133af~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 08日',
          title: 'ts保姆级教程',
          content: 'TypeScript，简称 ts，是微软开发的一种静态的编程语言，它是 JavaScript 的超集。 那么它有什么特别之处呢?'
        },
        {
          pic: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42f6ad7187af4cfaae73bf112aa29ecf~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 07日',
          title: '前端配置化真香',
          content: '本文从 场景介绍 、 设计&实现 、 性能优化 三个部分进行讲解。笔者当时的技术栈是 vue2 + element-ui，文章案例也是（其实大家不必纠结于技术栈，掌握设计的思路和理念，什么框架都是一样的）'
        },
        {
          pic: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad18a40559f74554baff60c9b7f022b8~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 06日',
          title: '代码越写越乱？那是因为你没用责任链',
          content: '在开始学习责任链之前，先看一下在开发中常见的问题。下面是前端用来处理 API 错误码的代码：'
        },
        {
          pic: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59443e9c4191457d9184c46718624e17~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 05日',
          title: '前端 Vscode 插件推荐',
          content: 'VScode 对于前端同学来说绝对是非常熟悉的，大家多多少少都有几个自己非常中意的插件。最近经过自己的探索以及同事的推荐，结合实际开发，甄选出了几款对实际开发效率非常有帮助的 VScode 插件。'
        },
        {
          pic: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a6afead4d06476ea5eff748cc9a5dc2~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
          time: '2022年 04月 01日',
          title: '程序员常用网站',
          content: '2022你需要了解的程序员网站如下：https://www.google.com、https://www.bing.cn、https://www.stackoverflow.com、https://www.baidu.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.row1 {
  min-width: 300px;
  width: 38rem;
  max-width: 70%;
  min-height: 1000px;
  flex: 2;
}
.row1-content {
  text-align: start;
}
.row2 {
  min-width: 300px;
  width: 19rem;
  flex: 1;
  margin: 1rem 1rem;
  background-color: rgb(248, 248, 248);
}
.content-visited {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}
.row1-resize {
  margin: 1.5rem 1.5rem;
}
.row2-resize {
  margin: .5rem 1.5rem;
  border: none;
}
</style>