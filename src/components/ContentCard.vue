<template>
  <div>
    <a :href="data.href||'.#'" target="_blank">
      <div id="content">
        <div class="card-image">
            <img :src="data.pic"
            :alt="data.title" />
        </div>
        <div class="card-body">
            <div class="card-date">
                <time>
                    {{data.time}}
                </time>
            </div>
            <div class="card-title">
                <h3>
                    {{data.title}}
                </h3>
            </div>
            <div class="card-excerpt" v-if="contentVisible">
                <p>
                  {{data.content}}
                </p>
            </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ContentCard",
  data() {
    return {
    }
  },
  props: {
      data: {
          type: Object,
          default: function () {
              return {
                  pic: "",
                  time: '',
                  title: '',
                  content: ''
              }
          }
      },
      contentVisible: {
          type: Boolean,
          default: false
      }
  }
}
</script>

<style scoped>

#content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color:#ffffff;
    /* box-shadow:0px 5px 20px rgb(156, 113, 113); */
}

#content a {
    color:rgb(255, 255, 255);
    text-decoration:none;
}

#content:hover .card-image img {
    width:120%;
    filter:grayscale(0);
}

.card-image {
    flex: 1;
    position: relative;
    overflow: hidden;
}
.card-image img {
    width:100%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    filter:grayscale(0.2);
    transition-property:filter width;
    transition-duration:.3s;
    transition-timing-function:ease;
}
.card-body {
    flex: 2;
    text-align:center;
    padding: 5px 10px;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}
.card-date {
    font-family: 'Source Sans Pro', sans-serif;
}
.card-title, .card-excerpt {
    font-family: 'Playfair Display', serif;
    overflow:hidden;
}
.card-date, .card-title {
    text-align:center;
    text-transform:uppercase;
    font-weight: bold;
}
.card-date, .card-excerpt {
    color: #777;
}
.card-body h3 {
    margin: .2rem .2rem;
}
.card-body p {
    max-height: 3.5rem;
    margin: .2rem .2rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}
</style>