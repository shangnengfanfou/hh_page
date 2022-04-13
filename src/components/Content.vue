<template>
  <div class="row">
    <div class="row1">
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
      <ContentCard class="row1-resize"/>
    </div>
    <div class="row2">
      <div class="content-visited">
        <p>最多浏览</p>
        <ContentVisited class="row2-resize" />
        <ContentVisited class="row2-resize" />
        <ContentVisited class="row2-resize" />
        <ContentVisited class="row2-resize" />
        <ContentVisited class="row2-resize" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard"
import ContentVisited from "@/components/ContentVisited"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  components: {
    ContentCard,
    ContentVisited
  },
  data() {
    return {
      contentVisible: true,
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.row1 {
  flex:2;
}
.row2 {
  flex:1;
  margin: 20px 50px;
  background-color: rgb(248, 248, 248);
}
.content-visited {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.row1-resize {
  margin: 30px 20px;
  border: 2px;
}
.row2-resize {
  margin: 2px 20px;
  border: 2px;
}
.row2-resize p {
  display: none;
}
</style>