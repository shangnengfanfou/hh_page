<template>
  <div class="about">
    <Banner />
    <div class="about-article">
      <h2 class="content-header">
        最新文章
      </h2>
      <div>
        <div v-for="(item, index) in article" :key="index">
          <a :href="item.url" target="_blank" class="title-hover">
            <img :src="item.img" :alt="item.desc" />
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
          </a>
        </div>
      </div>
      <router-link to="/notes" class="button-all button">
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
                <a href="https://github.com/shangnengfanfou" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;Github地址</a>
              </li>
              <li>
                <a href="https://gitee.com/haoqian1" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;Gitee地址</a>
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
              <router-link to="/info" class="contact-info-link">
                交流&求职-我的简历请点&nbsp;&gt;
              </router-link>
            </h2>
            <p>如果想交流技术或者交朋友，请按照下面的方式联系我。同时计划于下半年更换工作，意向地点深圳、武汉等，如果觉得我满足贵司的要求，也可通过下面的方式联系我。</p>
            <ul>
              <li>
                <a href="mailto:haoqian.mail@qq.com">
                  发送邮件给我
                </a>
              </li>
              <li>
                我的微信（base64处理后）：aGFvcV8yMDIw 申请注明原因
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
import Banner from "@/components/Banner"
import {request, METHOD} from '../utils/request'
export default {
  name: 'AppLayoutAbout',
  components: {
    Banner
  },
  created() {
    request('/api/article/page', METHOD.POST, {
      pageIndex: 1,
      pageSize: 6
    })
    .then(resp => {
      const { data } = resp.data
      const ret = data.data 
      this.article = ret.map(v => ({
        img: v.bannerUrl,
        title: v.title,
        desc: v.summary.substring(0, 100) + '...',
        time: new Date(v.time * 1000).toLocaleDateString(),
        id: v.id,
        uniqueId: v.uniqueId,
        url: `/notes/${new Date(v.time * 1000).getFullYear()}-${new Date(v.time * 1000).getMonth() + 1}/${v.uniqueId}/${v.title}.html`
      }))
    })
  },
  data() {
    return {
      timer: null,
      article: []
    }
  },
}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/about.scss'
</style>