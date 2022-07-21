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
        <router-link v-for="(item, index) in articleInfo" :key="index" :to="'/notes/'+item.index" class="sidebar-info-content2-classify">
          <div class="sidebar-info-content2-classify-item">
            <span style="font-weight:600">{{item.name}}</span>
            <span style="background-color:#F7F7F7">{{item.count}}</span>
          </div>
        </router-link>
      </div>      
    </div>
  </div>
</template>

<script>
import {request, METHOD} from '../utils/request'
const articleTags = [
        {
          index: 1,
          name: '前端开发笔记'
        },
        {
          index: 2,
          name: '后端开发笔记-nodejs'
        },
        {
          index: 3,
          name: '后端开发笔记-其他'
        },
        {
          index: 4,
          name: '数据库'
        },
        {
          index: 5,
          name: 'redis'
        },
        {
          index: 6,
          name: '算法笔记'
        },
        {
          index: 7,
          name: '运维相关'
        },
        {
          index: 8,
          name: '其他'
        }
      ]
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SideBar",
  created() {
    request('/api/article/info', METHOD.GET)
    .then(resp => {
      const { data } = resp.data
      console.log('data', data)
      this.siteInfo = [
        {
          id: 1,
          name: '总文章',
          count: data.count
        },
        {
          id: 2,
          name: '最新文章',
          count: data.currCount
        },
        {
          id: 3,
          name: '浏览量',
          count: data.viewsCount
        }
      ]
      this.articleInfo = data.tagsCount.map(v => {
        const tag = articleTags.find(i => i.index == v.tagId)
        return { 
          ...tag,
          count: v.count
        }
      })
    })
  },
  data() {
    return {
      siteInfo: [],
      articleInfo: []
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
  font: 1.2rem sans-serif;
  margin: 2px;
}
.sidebar-info-content2-classify {
  text-align: start;
}
.sidebar-info-content2-classify-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-info-content2-classify-item span {
  font-size: 1.1rem;
  padding: 3px;
}
</style>