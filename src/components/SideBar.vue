<template>
  <div id="sidebar">
    <div class="sidebar-info">
      <div>
        <img src="../assets/images/avatar.png" alt="白杨亦萧萧" class="sidebar-info-logo">
      </div>
      <div>
        <h3 style="margin:2px">白杨亦萧萧</h3>
        <p style="font-size:10px;margin:2px">但行好事 莫问前程</p>
      </div>
      <div class="sidebar-info-content">
        <div v-for="(item, index) in siteInfo" :key="index" >
          <h4>{{item.name}}</h4>
          <p>{{item.count}}</p>
        </div>
      </div>
    </div>
    <div class="sidebar-info" style="align-items:flex-start">
      <div class="sidebar-info-content2">
        <div class="sidebar-info-content2-list">
          <p style="font-size:12px;margin:5px 5px 15px 5px;">白杨亦萧萧-文章分类</p>
        </div>
        <router-link v-for="(item, index) in articleInfo" :key="index" :to="'/#/'+item.type" class="sidebar-info-content2-list">
          <h4 style="font-size:15px;margin:5px 5px 5px 15px;">{{item.name}}</h4>
          <p>{{item.count}}</p>
        </router-link>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SideBar",
  data() {
    return {
      siteInfo: [
        {
          id: 1,
          name: '总文章',
          count: 100
        },
        {
          id: 2,
          name: '最新文章',
          count: 10
        },
        {
          id: 3,
          name: '浏览量',
          count: '10w'
        }
      ],
      articleInfo: [
        {
          id: 1,
          type: 'frontend',
          name: '前端开发笔记',
          count: 10
        },
        {
          id: 2,
          type: 'backend',
          name: '后端开发笔记-nodejs',
          count: 10
        },
        {
          id: 3,
          type: 'database',
          name: '数据库',
          count: 10
        },
        {
          id: 4,
          type: 'redis',
          name: 'redis',
          count: 10
        },
        {
          id: 5,
          type: 'algorithm',
          name: '算法笔记',
          count: 10
        },
        {
          id: 6,
          type: 'operation',
          name: '运维相关',
          count: 10
        },
        {
          id: 7,
          type: 'other',
          name: '其他',
          count: 10
        }
      ]
    }
  }
}
</script>

<style scoped>
#sidebar {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
}
.sidebar-info {
    min-width: 15rem;
    padding: 1rem;
    margin: 1rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
}
.sidebar-info-logo {
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
}
.sidebar-info-content {
  display: flex;
  justify-content: space-between; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  padding: 1rem;
}
.sidebar-info-content h4 {
  padding: 0 .5rem;
  word-break: break-all;
}
.sidebar-info-content2 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content:flex-start;
  width: 100%;
  flex-grow:1;
  flex-shrink:1;
}
.sidebar-info-content2 h4{
  text-align: left;
  word-break: break-all;
}
.sidebar-info-content2-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: flex-start;
}
.sidebar-info-content2-list p {
  background-color: #F7F7F7;  
  font: 1rem sans-serif;
  margin: 2px;
}
</style>