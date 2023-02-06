<template>
  <div class="layout">
    <Layout>
      <Header style="position: fixed;z-index: 1030;left: 0;right: 0;">
        <home-header :active-name="activeIndex"> </home-header>
      </Header>
      <Content>
        <div class="blank">
        </div>
        <div style="margin-top: 50px">
          <Carousel autoplay v-model="value2" loop autoplay-speed="2500">
            <CarouselItem>
              <!--<div class="demo-carousel"><img src="../assets/pic/banner1.jpg" height='664px' width='1740px'></div>-->
              <div class="demo-carousel"><img src="../assets/pic/banner1.jpg"  height='756x' width='1740px'></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="../assets/pic/zhouheyu.jpg" height='756x' width='1740px'></div>
            </CarouselItem>
          </Carousel>
          <intro-news></intro-news>
          <research-menu></research-menu>
        </div>
      </Content>
      <Footer>
        <home-footer style="background-color: rgb(23, 31, 36)"></home-footer>
      </Footer>
    </Layout>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'
import ResearchMenu from '../components/research/ResearchMenu'
import IntroNews from '../components/IntroNews'
export default {
  name: 'home',
  components: {IntroNews, ResearchMenu, HomeFooter, HomeHeader},
  data () {
    return {
      activeIndex: '/'
    }
  },
  data () {
    return {
      value2: 0
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/home'
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .blank{
    height:1px;
    color: white;
  }

</style>
