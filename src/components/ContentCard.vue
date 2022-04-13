<template>
  <div>
    <a href="#.">
      <div id="content">
        <div class="card-image">
            <img src="../assets/images/avatar.png"
            alt="gokong" />
        </div>
        <div class="card-body">
            <div class="card-date">
                <time>
                    2022年 04月 01日
                </time>
            </div>
            <div class="card-title">
                <h3>
                    社会主义核心价值观
                </h3>
            </div>
            <div class="card-exceprt" v-if="contentVisible">
                <p>
                  党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。
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
      contentVisible: true,
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
    box-shadow:0px 5px 20px rgb(156, 113, 113);
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
    margin: 5px 5px;
}
.card-body p {
    max-height: 120px;
    margin: 5px 5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}
</style>