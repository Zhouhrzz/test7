<template>
  <div class="layout">
    <Layout>
      <Header style=" position: fixed;left: 0;right: 0;z-index: 1030;">
         <home-headeren ></home-headeren>
    </Header>
      <Content>
        <div class="blank">
        </div>
        <div style="margin-top: 50px">
          <Carousel autoplay v-model="value2" loop  autoplay-speed="2500">
            <CarouselItem>
              <!--<div class="demo-carousel"><img src="../assets/pic/banner1.jpg" height='664px' width='1740px'></div>-->
              <div class="demo-carousel"><img src="../assets/pic/banner1.jpg" height='756px' width='100%'></div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"><img src="../assets/pic/zhouheyu.jpg" height='756px' width='100%' ></div>
            </CarouselItem>
          </Carousel>
          <intro-newsen></intro-newsen>
          <research-menuen></research-menuen>
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
import IntroNewsen from '../components/IntroNewsen'
import ResearchMenuen from '../components/research/ResearchMenuen'
import HomeFooter from '../components/HomeFooter'
import HomeHeaderen from '../components/HomeHeaderen'
export default {
  name: 'homeEnglish',
  components: {HomeHeaderen, HomeFooter, ResearchMenuen, IntroNewsen, HomeHeader},
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/'
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
