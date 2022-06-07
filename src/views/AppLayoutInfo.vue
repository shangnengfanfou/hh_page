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
            微信（需base64解码）：aGFvcV8yMDIw
            <br>
            电话（需aes-128-ecb解密）：UTZL4ZBajH5k2VuBKvro9g== 
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
        <div class="experience-1"></div>
        <div class="experience-2"></div>
        <div class="experience-3"></div>
        <div class="experience-4"></div>
        <div class="experience-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  name: 'AppLayoutInfo',
  components: {
    Banner
  }
}
</script>

<style scoped lang="scss"> 
@import '../assets/style/scss/info.scss'
</style>