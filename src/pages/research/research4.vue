<template>
  <div>
  <Layout>
    <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
      <home-header :active-name="activeIndex"></home-header>
    </Header>
    <Content>
      <research-four-content></research-four-content>
    </Content>
    <Footer>
      <home-footer></home-footer>
    </Footer>
  </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import ResearchFourContent from '../../components/research/ResearchFourContent'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'research4',
  components: {HomeFooter, ResearchFourContent, HomeHeader},
  data () {
    return {
      activeIndex: '/research'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/research/research4'
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
