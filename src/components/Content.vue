<template>
  <div class="row">
    <div class="row1" v-if="isList">
      <ContentCard v-for="(item, index) in contentData" :key="index" :data="item" :contentVisible="true" class="row1-resize"/>
      <Paginate :pageConfig="pageConfig" @changeCurrentPage="changeCurrentPage"></Paginate>
    </div>
    <div class="row1" v-if="!isList">
      <v-md-editor :value="markdown" mode="preview" class="row1-content"></v-md-editor>
    </div>
    <div class="row2">
      <div class="content-visited">
        <p>最多浏览</p>
        <ContentCard v-for="(item, index) in visitedData" :key="index" :data="item" class="row2-resize" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard"
import Paginate from "@/components/Paginate"
import {request, METHOD} from '../utils/request'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  components: {
    ContentCard,
    Paginate
  },
  created() {
    const articleParams =this.$route.params.articleParams
    console.log('222:', articleParams)
    if (articleParams && articleParams.split('/').length === 3) {
      const articleParamsArr = articleParams.split('/')
      this.isList = false
      request(`/api/article/${articleParamsArr[1]}?filename=${decodeURI(articleParamsArr[2])}&time=${articleParamsArr[0]}`, METHOD.GET)
      .then(resp => {
        const { content } = resp.data
        this.markdown = Buffer.from(content, 'base64').toString()
      })
    } else {
      const body = {
        pageIndex: 1,
        pageSize: 10
      }
      if(parseInt(articleParams)) {
        body.tagId = parseInt(articleParams)
      }
      request('/api/article/page', METHOD.POST, body)
      .then(resp => {
        const { data } = resp.data
        const ret = data.data 
        this.contentData = ret.map(v => ({
          pic: v.bannerUrl,
          title: v.title,
          content: v.summary,
          time: new Date(v.time * 1000).toLocaleDateString(),
          id: v.id,
          uniqueId: v.uniqueId,
          href: `/notes/${new Date(v.time * 1000).getFullYear()}-${new Date(v.time * 1000).getMonth() + 1}/${v.uniqueId}/${v.title}.html`
        }))
        this.pageConfig = {
          pageSize: body.pageSize,
          pageIndex: body.pageIndex,
          total: data.count,
          pageTotal: Math.ceil(data.count / body.pageSize)
        }
        console.log('this.pageConfig', this.pageConfig, ret)
      })
    }
    request('/api/article/page', METHOD.POST, {
      pageIndex: 1,
      pageSize: 5,
      viewsCount: true
    })
    .then(resp => {
      const { data } = resp.data
      const ret = data.data 
      this.visitedData = ret.map(v => ({
        pic: v.bannerUrl,
        title: v.title,
        content: v.summary,
        time: new Date(v.time * 1000).toLocaleDateString(),
        id: v.id,
        uniqueId: v.uniqueId,
        href: `/notes/${new Date(v.time * 1000).getFullYear()}-${new Date(v.time * 1000).getMonth() + 1}/${v.uniqueId}/${v.title}.html`
      }))
    })
  },
  data() {
    return {
      isList: true,
      markdown: '',
      contentData: [],
      visitedData: [],
      pageConfig:{
        pageSize: 10,
        pageIndex: 0,
        total: 0,
        pageTotal: 0
      }
    }
  },
  methods: {
    changeCurrentPage(currentPage) {
      if(currentPage != this.pageConfig.pageIndex) {
        const body = {
          pageIndex: currentPage,
          pageSize: 10
        }
        const articleParams =this.$route.params.articleParams
        if(parseInt(articleParams)) {
          body.tagId = parseInt(articleParams)
        }
        request('/api/article/page', METHOD.POST, body)
        .then(resp => {
          const { data } = resp.data
          const ret = data.data 
          this.contentData = ret.map(v => ({
            pic: v.bannerUrl,
            title: v.title,
            content: v.summary,
            time: new Date(v.time * 1000).toLocaleDateString(),
            id: v.id,
            uniqueId: v.uniqueId,
            href: `/notes/${new Date(v.time * 1000).getFullYear()}-${new Date(v.time * 1000).getMonth() + 1}/${v.uniqueId}/${v.title}.html`
          }))
          this.pageConfig = {
            pageSize: body.pageSize,
            pageIndex: body.pageIndex,
            total: data.count,
            pageTotal: Math.ceil(data.count / body.pageSize)
          }
          console.log('this.pageConfig', this.pageConfig, ret)
        })
      }
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
  min-width: 300px;
  width: 38rem;
  max-width: 70%;
  flex: 2;
}
.row1-content {
  text-align: start;
}
.row2 {
  min-width: 300px;
  width: 19rem;
  flex: 1;
  margin: 1rem 1rem;
  background-color: rgb(248, 248, 248);
}
.content-visited {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}
.row1-resize {
  margin: 1.5rem 1.5rem;
}
.row2-resize {
  margin: .5rem 1.5rem;
  border: none;
}
</style>