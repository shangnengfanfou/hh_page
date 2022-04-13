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
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ContentVisited"
}
</script>

<style scoped>

#content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color:#d5d6e9;
    box-shadow:0px 5px 20px rgb(203, 226, 216);
}

#content a {
    color:#333;
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