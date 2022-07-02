<template>
  <div id="footer">
    <div class="copy">
      <p>©2022 白杨亦萧萧  粤ICP备XXXXXXXX号 粤公网备案XXXXXXXXXXXXXX</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  components: {
  }
}
</script>

<style scoped> 
  #footer {
    height: 100px;
    background-color: rgb(22, 32, 39);
    border-top: 1px;
    border-style: solid;
    margin: 0;
  }
  .copy {
    width: 80%;
    margin: 20px auto;
    border-top: 2px solid rgba(255,255,255,0.10);
    font-size: 14px;
    line-height: 60px;
    color: rgba(255,255,255,0.30);
    text-align: center;
  }
  .copy p {
    margin: 0;
  }
</style>