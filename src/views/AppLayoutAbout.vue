<template>
  <div class="about">
    <!-- START WELCOME SECTION -->
    <div class="about-banner">
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
    <div class="about-article">
      <h2 class="content-header">
        最新文章
      </h2>
      <div>
        <div v-for="(item, index) in article" :key="index">
          <a :href="item.url" target="_blank">
            <img :src="item.img" :alt="item.desc" />
            <p>{{item.desc}}</p>
          </a>
        </div>
      </div>
      <router-link to="/" class="button-all button">
        全部文章&nbsp;&gt;
      </router-link>
    </div>
    <div class="about-info">
      <div>
        <div class="contact-info">
          <router-link to="/contacts" class="contact-info-link">
            个人信息
          </router-link>
        </div>
        <div class="contact-all">
          <div class="contact-code">
            <h2>开源站点</h2>
            <p>包括本项目在内的一些个人项目和想法，有用或者没用，但重在成长</p>
            <ul>
              <li>
                <a href="https://github.com/shangnengfanfou">&nbsp;&nbsp;&nbsp;&nbsp;Github地址</a>
              </li>
              <li>
                <a href="https://gitee.com/haoqian1">&nbsp;&nbsp;&nbsp;&nbsp;Gitee地址</a>
              </li>
            </ul>
          </div>
          <div class="contact-stack">
            <h2>技术栈介绍</h2>
            <p>开发多年，不断成长，在前端、后端、linux、虚拟化技术等方面都有些积累，主要技术栈：</p>
            <ul>
              <li>- 开发语言：Nodejs/.NetCore</li>
              <li>- Web框架：Eggjs/Express/restify.js</li>
              <li>- 游戏后端框架：Pomelo</li>
              <li>- 前端相关：Vuejs</li>
              <li>- 数据库：MySQL/MongoDb/Redis</li>
              <li>- 版本管理、⽂档和⾃动化部署⼯具：Svn/Git/GitBook/Jenkins</li>
              <li>- 单元测试、 压测、代理等：Mocha/Jest、JMeter、Nginx</li>
              <li>- 项目部署：pm2，docker，docker-compose，kubernetes</li>
              <li>- 常用工具：postman，xshell，fiddler</li>
            </ul>
          </div>
          <div class="contact-msg">
            <h2>
              <router-link to="/contacts" class="contact-info-link">
                求职-我的简历请看&nbsp;&gt;
              </router-link>
            </h2>
            <p>计划于下半年更换工作，意向地点深圳、武汉等，如果觉得我满足贵司的要求，请联系我吧。</p>
            <ul>
              <li>
                <a href="mailto:haoqian.mail@qq.com">
                  发送邮件给我
                </a>
              </li>
              <li>
                我的微信（base64处理后）：aGFvcV8yMDIw
              </li>
              <li>
                我的电话（aes-128-ecb加密后）：
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;UTZL4ZBajH5k2VuBKvro9g==
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;密钥为：haoqian123456789
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
      timer: null,
      article: [
        {
          id: 1,
          img: require('../assets/images/article/article1.jpg'),
          desc: 'goku',
          url: 'http://www.baidu.com'
        },
        {
          id: 2,
          img: require('../assets/images/article/article2.jpg'),
          desc: 'rufi',
          url: 'http://www.baidu.com'
        },
        {
          id: 3,
          img: require('../assets/images/article/article3.jpg'),
          desc: 'goku-s4',
          url: 'http://www.baidu.com'
        },
        {
          id: 4,
          img: require('../assets/images/article/article4.jpg'),
          desc: 'pikachu',
          url: 'http://www.baidu.com'
        },
        {
          id: 5,
          img: require('../assets/images/article/article5.jpg'),
          desc: 'itachi',
          url: 'http://www.baidu.com'
        },
        {
          id: 6,
          img: require('../assets/images/article/article6.jpg'),
          desc: 'death',
          url: 'http://www.baidu.com'
        }
      ]
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