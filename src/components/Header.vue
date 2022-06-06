<template>
  <div id="header">
    <a href="/" rel="start" id="header-left">
      <img src="../assets/images/avatar.png" alt="白杨亦萧萧" id="logo">
      <p>&nbsp; 白杨亦萧萧</p>
    </a>
    <div id="header-center">
      <router-link to="/" class="header-item">首页</router-link>
      <router-link to="/notes" class="header-item">个人笔记</router-link>
      <router-link to="/bookmark" class="header-item">书签</router-link>
      <router-link to="/info" class="header-item">我的信息</router-link>
    </div>
    <div id="header-right">
      <a href="/platform">
        管理后台
      </a>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',

}
</script>

<style scoped>
#header {
  background: rgb(227, 233, 235);
  padding: 3px;
  max-height: 2.5rem;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}

#header-left {
  background: rgb(227, 233, 235);
  padding: 3px;
  height: 2rem;
  display: flex;
  justify-content: left; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  margin: 0 10rem 0 4rem;
}

#header-left p {
  text-align: center;
  margin: auto;
  padding-top: .2rem;
  min-width: 6rem;
  height: 2rem;
}

#logo {
  width: 2rem;
  min-width: 1.5rem;
  height: 2rem;
  border-radius: 1rem;
}

#header-center {
  display: flex;
  flex-shrink: 1;
}

#header-right {
  margin-left: auto; /* 设置向右对对齐 */
  /* justify-content: flex-end; */
  min-width: 3rem;
  padding: 30px
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#header a.router-link-exact-active {
  color: #ccda54
}
.header-item {
  padding-right: 50px;
  /* line-height: 30px; */
  min-width: 2rem;
  min-height: 1rem;
  text-decoration:none;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  font-size: 1rem;
}
</style>