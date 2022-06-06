<template>
  <div class="notes">
    <div class="line1">
      <Content />
    </div>
    <div class="line2">
      <SideBar />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import Content from "@/components/Content"
export default {
  name: 'AppLayoutNotes',
  components: {
    SideBar,
    Content
  }
}
</script>

<style scoped> 
  .notes {
    min-height: 800px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .line1 {
    margin: 10px;
    background-color: #e0e0e0;
    order: 2;
    flex: 4;
  }
  .line2 {
    margin: 10px;
    background-color: #e0e0e0;
    order: 1;
    flex: 1;
  }
  
</style>