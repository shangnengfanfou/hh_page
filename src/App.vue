<template>
  <div id="app">
    <Header/>
    <AppLayout id="main">
      <router-view/>
    </AppLayout>
    <Footer />
  </div>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {
    AppLayout,
    Header,
    Footer,
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
#main {
  min-height: 90vh;
  min-width: 800px;
}
</style>