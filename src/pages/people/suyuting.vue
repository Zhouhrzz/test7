<template>
  <Layout>
    <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
      <home-header :active-name="activeIndex"></home-header>
    </Header>
    <Content>
      <suyuting-content></suyuting-content>
    </Content>
    <Footer>
      <home-footer></home-footer>
    </Footer>
  </Layout>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import SuyutingContent from '../../components/people/SuyutingContent'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'suyuting',
  components: {HomeFooter, SuyutingContent, HomeHeader},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/suyuting'
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
