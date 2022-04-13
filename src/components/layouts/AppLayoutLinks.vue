<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contacts">Contact</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>
</template>

<script>

export default {
  name: 'AppLayoutLinks',

}
</script>

<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #42b983
}
</style>