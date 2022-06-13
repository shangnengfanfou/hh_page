<template>
  <div>
    <Banner />
    <div id="base-info-title">
      <h2>基本
        <strong>资料</strong>
      </h2>
      <hr>
      <div id="base-info">
        <div>
          <!-- <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon> -->
          <i class="fa fa-user"></i>
          <h4><strong>个人信息</strong></h4>
          <p>
            年龄：28
            <br>
            性别：男
            <br>
            籍贯：湖北
          </p>
        </div>
        <div>
          <!-- <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon> -->
          <i class="fa fa-book"></i>
          <h4><strong>工作经验</strong></h4>
          <p>
            岗位：web后端、全栈
            <br>
            状态：计划换工作
            <br>
            工作年限：6年
          </p>
        </div>
        <div>
          <!-- <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon> -->
          <i class="fa fa-rocket"></i>
          <h4><strong>职位意向</strong></h4>
          <p>
            地点：武汉、深圳、上海
            <br>
            行业：不限
            <br>
            性质：全职
          </p>
        </div>
        <div>
          <!-- <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon> -->
          <i class="fa fa-bullseye"></i>
          <h4><strong>联系方式</strong></h4>
          <p>
            <a href="mailto:haoqian.mail@qq.com">
              邮箱：haoqian.mail@qq.com (点击发送邮件)
            </a>
            <br>
            微信(需base64解码)：aGFvcV8yMDIw
            <br>
            电话(需aes-128-ecb解密)：UTZL4ZBajH5k2VuBKvro9g== 
            <br>
            密钥：haoqian123456789
          </p>
        </div>
      </div>
    </div>
    <div id="experience">
      <h2>个人
        <strong>经历</strong>
      </h2>
      <hr>
      <p>热爱技术、持续进步，不断朝让自己生活的更好的目标前进</p>
      <div class="experience-detail">
        <div class="experience experience-line-1">
          <img src="../assets/images/badge.png" alt="武汉理工">
          <div class="caption">
            <h3>武汉理工大学</h3>
            <p>信息工程专业</p>
            <p>2012.09-2016.07</p>
            <p>接触互联网，学习编程，了解js，为日后工作走进nodejs的深坑做了铺垫...</p>
          </div>
        </div>
        <div class="experience experience-line-1">
          <img src="../assets/images/kslogo.jpg" alt="金山办公">
          <div class="caption">
            <h3>武汉金山办公软件</h3>
            <p>高级后端开发工程师</p>
            <p>2021.08-至今</p>
            <p>落地政企私有云文档二次开发PaaS平台；制定三方账号到云文档同步流程，搭建服务...</p>
          </div>
        </div>
      </div>
      <div class="experience-detail">
        <div class="experience">
          <img src="../assets/images/xiaoanlogo.jpg" alt="小安科技">
          <div class="caption">
            <h3>武汉小安科技</h3>
            <p>nodejs全栈工程师</p>
            <p>2020.06-2021.08</p>
            <p>共享电动车SaaS产品的开发和维护，进行高可用改造并推进服务架构升级...</p>
          </div>
        </div>
        <div class="experience">
          <img src="../assets/images/duoyilogo.jpg" alt="多益网络">
          <div class="caption">
            <h3>多益网络武汉分公司</h3>
            <p>后端开发工程师</p>
            <p>2019.07-2020.05</p>
            <p>设计流程编辑器，了解虚拟化技术。制定开发规范，代码审查流程...</p>
          </div>
        </div>
        <div class="experience">
          <img src="../assets/images/21cnlogo.jpg" alt="21cn">
          <div class="caption">
            <h3>世纪龙信息网络公司</h3>
            <p>研发工程师</p>
            <p>2016.07-2019.07</p>
            <p>VR游戏/应用、H5游戏等开发，nodejs游戏框架pomelo与web开发技术...</p>
          </div>
        </div>
      </div>
    </div>
    <div id="stack">
      <h2>技术
        <strong>选型</strong>
      </h2>
      <hr>
      <p>主要涉及web开发、全栈开发、虚拟化技术、微服务等</p>
      <div class="carousel-item">
        <Carousel />
      </div>
    </div>
    <div id="project">
      <h2>项目
        <strong>经验</strong>
      </h2>
      <hr>
      <p>工作年限较长，大大小小的项目参与的比较多，列举几个觉得比较有意义的项目做下简单介绍</p>
      <div class="project-items">
        <div class="pro-item">
          <h3>个人网站项目</h3>
          <h4>持续开发</h4>
          <span>vuejs</span>
          <span>element-ui</span>
          <span>nodejs</span>
          <span>golang</span>
          <span>docker</span>
          <span>nginx</span>
          <span>docker</span>
          <span>redis</span>
          <span>mysql</span>
          <div class="desc">
            <i class="fa fa-star-o"></i>
            一个个人网站，主要用于记录学习笔记、学习新技术、验证和巩固自己的技术栈；同时也把相关的前后端代码开源出来，希望能交到一些志同道合的朋友。
          </div>
          <p>
            <i class="fa fa-hand-o-right"></i>
            负责整个项目的方案设计、模块划分、开发、测试、部署等。项目分为前台页面、管理后台、nodejs中台服务、go服务，其中两个是前端工程和两个是后端工程。
            <ul>
              <li class="">
                <a href="#.">
                  前台页面: 分为首页、笔记、书签、简历等四个模块
                </a>
              </li>
              <li href="#." class="">
                <a href="#.">
                  管理后台: 统计展示一些站点数据，发布文章等
                </a>
              </li>
              <li href="#." class="">
                <a href="#.">
                  nodejs中台: 路由代理、接口加密、权限控制、服务端渲染等
                </a>
              </li>
              <li href="#." class="">
                <a href="#.">
                  go服务: 实际接口业务逻辑处理，数据库，文件存储等
                </a>
              </li>
            </ul>
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            <a href="#.">
              关于这个项目的的一些开发总结的文章可以看这里
            </a>
          </p>
        </div>
        <div class="pro-item">
          <h3>二次开发定制平台</h3>
          <h4>2021年8月--2020年4月</h4>
          <span>nodejs</span>
          <span>typescript</span>
          <span>joi</span>
          <span>grpc</span>
          <span>child_process</span>
          <span>kubernetes</span>
          <span>etcd</span>
          <span>redis</span>
          <span>mysql</span>
          <div class="desc">
            <i class="fa fa-star-o"></i>
            本项目是一个PaaS平台，提供定制插件管理平台与定制引擎给外部服务商做wps云文档的二次开发
          </div>
          <p>
            <i class="fa fa-hand-o-right"></i>
            负责二次开发定制引擎的开发，定制引擎通过SDK的方式提供能力给外部项目使用，包括mysql、etcd、redis基础能力、全局路由拦截等，并提供二次开发项目模板。同时讲引擎的能力通过GRPC的方式提供给插件项目调用。
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            解决数据隔离的问题，不同插件可以创建转专有数据，还有存储的隔离问题。使用child_process单独运行grpc服务，降低主进程负载
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            配合完成项目分层设计，包括权限验证和能力验证。提供插件打包工具。
          </p>
        </div>
        <div class="pro-item">
          <h3>共享电动车后端SaaS</h3>
          <h4>2020年8月--2021年8月</h4>
          <span>nodejs</span>
          <span>restify.js</span>
          <span>redis</span>
          <span>mysql</span>
          <span>阿里云服务器</span>
          <div class="desc">
            <i class="fa fa-star-o"></i>
            本项目是一个共享单车SaaS系统，全国用户规模大概在1000W，提供共享电动车的租赁、充值、会员等等功能
          </div>
          <p>
            <i class="fa fa-hand-o-right"></i>
            负责千万用户级别Saas系统的新功能开发和软件线上维护，开发的重点功能包括超时自动还车、开发蓝牙token随机防破解，管理后台接口双向加密等
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            降低高频接口对数据库QPS到原来的1/5；通过拆分服务，流量分治、消息中间件等建立高可用系统
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            配合完成开还车主流程、管理后台数据大屏等的重构
          </p>
        </div>
        <div class="pro-item">
          <h3>流程编辑器</h3>
          <h4>2019年6月--2021年5月</h4>
          <span>nodejs</span>
          <span>restify.js</span>
          <span>.netcore</span>
          <span>redis</span>
          <span>mongodb</span>
          <span>vuejs</span>
          <span>kubernetes</span>
          <div class="desc">
            <i class="fa fa-star-o"></i>
            本项目是一个自由度非常高的流程审批系统，可以通过拖拽预制的组件设计每个节点，同时可以设计节点间流转策略，流程根据设置向不同方向流转。
          </div>
          <p>
            <i class="fa fa-hand-o-right"></i>
            负责外部数据同步服务开发、设计权限系统并完成账号服务开发。
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            引入grpc优化了服务间调用的速度，调研各种方案确定使用jwt作为权限认证
          </p>
          <p>
            <i class="fa fa-hand-o-right"></i>
            配合完成项目服务拆分，配合引入RabbitMQ解耦web服务器和核心计算服务器
          </p>
        </div>
      </div>
    </div>
    <div id="evaluation">
      <div class="evaluation-bg">
      </div>
      <h2>自我
        <strong>评价</strong>
      </h2>
      <hr>
      <div class="evaluation-item">
        <p>热爱学习，开发经验丰富，执行力强，解决问题能力强，良好的团队合作精神，能迅速融入新的团队。</p>
      </div>
      <div class="evaluation-item">
        <p>有强烈的责任感，工作踏实，性格开朗乐观，积极上进。善于自我调节，有较强抗压能力。</p>
      </div >
      <div class="evaluation-item">
        <p>热爱编程，技术栈比较广，喜欢钻研新的技术，喜欢接受各种不同的挑战。具有很强的自学能力和良好的学习方法。</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import Carousel from "@/components/Carousel"
export default {
  name: 'AppLayoutInfo',
  components: {
    Banner,
    Carousel
  }
}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/info.scss'
</style>