<template>
  <div id="app">
    <Header />
    <AppLayout>
      <router-view/>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue"
import Header from "@/components/Header.vue"
export default {
  name: 'App',
  components: {
    AppLayout,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
    height: 5rem;
    background-color: green;
}
.app-layout {
  max-width: 1280px;
}
</style>