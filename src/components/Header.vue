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
  max-height: 50px;
  min-height: 2.5rem;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}

#header-left {
  background: rgb(227, 233, 235);
  display: flex;
  justify-content: left; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  margin: 0 10rem 0 4rem;
}

#header-left p {
  text-align: center;
  margin: auto;
  min-width: 30px;
}

#logo {
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
}

#header-center {
  display: flex;
  flex-shrink: 1;
}

#header-right {
  margin-left: auto; /* 设置向右对对齐 */
  /* justify-content: flex-end; */
  min-width: 20px;
  padding: 0 2rem;
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
  min-width: 30px;
  text-decoration:none;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  font-size: 1rem;
}
</style>