<template>
  <Layout>
    <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
      <home-header :active-name="activeIndex"></home-header>
    </Header>
    <Content>
      <nieweizhi-content></nieweizhi-content>
    </Content>
    <Footer>
      <home-footer></home-footer>
    </Footer>
  </Layout>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import NieweizhiContent from '../../components/people/NieweizhiContent'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'nieweizhi',
  components: {HomeFooter, NieweizhiContent, HomeHeader},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/nieweizhi'
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
