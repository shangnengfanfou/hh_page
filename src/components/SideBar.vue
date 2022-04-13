<template>
  <div id="sidebar">
    <div class="sidebar-info">
      <div>
        <img src="../assets/images/avatar.png" alt="白杨亦萧萧" class="sidebar-info-logo">
      </div>
      <div>
        <h3 style="margin:2px">白杨亦萧萧</h3>
        <p style="font-size:10px;margin:2px">富强、民主、和谐</p>
      </div>
      <div class="sidebar-info-content">
        <div style="margin:8px">
          <p style="font-size:15px;margin:5px">富强</p>
          <p style="font-size:25px;margin:2px">300</p>
        </div>
        <div style="margin:8px">
          <p style="font-size:15px;margin:5px">民主</p>
          <p style="font-size:25px;margin:2px">500</p>
        </div>
        <div style="margin:8px">
          <p style="font-size:15px;margin:5px">和谐</p>
          <p style="font-size:25px;margin:2px">200W</p>
        </div>
      </div>
    </div>
    <div class="sidebar-info" style="align-items:flex-start">
      <div class="sidebar-info-content2">
        <div class="sidebar-info-content2-list">
          <p style="font-size:12px;margin:5px;">白杨亦萧萧</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">富强</p>
          <p style="font-size:25px;margin:2px">300</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">民主</p>
          <p style="font-size:25px;margin:2px">500</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">和谐</p>
          <p style="font-size:25px;margin:2px">200W</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">文明</p>
          <p style="font-size:25px;margin:2px">200</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">公正</p>
          <p style="font-size:25px;margin:2px">3220W</p>
        </div>
        <div class="sidebar-info-content2-list">
          <p style="font-size:15px;margin:5px">法制</p>
          <p style="font-size:25px;margin:2px">2300W</p>
        </div>
      </div>      
    </div>
    <!-- <div class="sidebar-info">
    </div>
    <div class="sidebar-info">
    </div> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SideBar",
  data() {
    return {
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
    width: 250px;
    height: 250px;
    padding: 10px;
    margin: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
}
.sidebar-info-logo {
  width: 80px;
  height: 80px;
  border-radius: 40px;
}
.sidebar-info-content {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
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
.sidebar-info-content2-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: flex-start;
}
</style>