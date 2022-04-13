<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppLayout',
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'AppLayoutAbout'
      return () => import(`@/views/${layout}.vue`)
    }
  },
}
</script>