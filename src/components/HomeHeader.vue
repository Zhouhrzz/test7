<template>
  <div class="home-header" style="display: flex; width:1536px; min-width: 1280px; box-sizing:border-box;">
    <div class="header-logo">
      <img class="logo"  src="../assets/pic/logo.jpg">
    </div>
    <div  class="header-menu">
      <Menu mode="horizontal"  active-name="activeIndex" style="background: rgb(0,82,140);width:410px">
        <MenuItem to="/" name="1" style="color: white">
          主页
        </MenuItem>
        <MenuItem to="/people" name="2" style="color: white">
          团队
        </MenuItem>
        <MenuItem to="/research" name="3" style="color: white">
          研究方向
        </MenuItem>
        <MenuItem to="/publication/publication2019" name="5" style="color: white">
          学术成果
        </MenuItem>
        <MenuItem to="/contest/contest1" name="6" style="color: white">
          比赛
        </MenuItem>
      </Menu>
    </div>
    <div class="header-button">
      <!--<div class="header-content">aaaaaa</div>-->
      <Button type="primary " to="/" >中/En</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    activeIndex: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .header-logo{
    width: 440px;
    height: 65px;
    box-sizing:border-box;
    display: flex;
  }
  .header-menu{
    width: 600px;
    text-size-adjust:100%;
    padding: 0 60px;
    box-sizing:border-box;
    display: flex;

  }
  .logo{
    width: 436px;
    height: 65px;
  }
  .header-content{
    visibility:hidden
  }
  .header-button{
    width: 240px;
    padding-left: 80px;
    box-sizing:border-box;
  }
</style>
