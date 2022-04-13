<template>
  <div id="header">
    <a href="/" rel="start" id="header-left">
      <img src="../assets/images/avatar.png" alt="白杨亦萧萧" id="logo">
      &nbsp; 白杨亦萧萧
    </a>
    <div id="header-center">
      <router-link to="/" class="header-item">标签墙</router-link>
      <router-link to="/about" class="header-item">留言板</router-link>
      <router-link to="/contacts" class="header-item">代码仓库</router-link>
      <router-link to="/about" class="header-item">AboutMe</router-link>
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
  height: 30px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}

#header-left {
  background: rgb(227, 233, 235);
  padding: 3px;
  height: 30px;
  display: flex;
  text-decoration:none;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  width: 300px;
}

#logo {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}

#header-center {
  display: flex;
  flex-shrink: 1;
}

#header-right {
  margin-left: auto; /* 设置向右对对齐 */
  justify-content: flex-end;
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
  padding: 50px;
  line-height: 30px; /* 设置垂直居中 */
  text-decoration:none;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}
</style>