<template>
  <Layout>
    <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
      <home-header :active-name="activeIndex"></home-header>
    </Header>
    <Content>
      <liujing-content></liujing-content>
    </Content>
    <Footer>
      <home-footer></home-footer>
    </Footer>
  </Layout>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import LiujingContent from '../../components/people/LiujingContent'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'liujing',
  components: {HomeFooter, LiujingContent, HomeHeader},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/liujing'
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

</style>
