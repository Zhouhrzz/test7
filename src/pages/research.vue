<template>
    <div>
      <Layout>
        <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
          <home-header :active-name="activeIndex"></home-header>
        </Header>
        <Content>
          <research-menu></research-menu>
        </Content>
        <Footer>
          <home-footer></home-footer>
        </Footer>
      </Layout>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import HomeFooter from '../components/HomeFooter'
import ResearchMenu from '../components/research/ResearchMenu'
export default {
  name: 'research',
  components: {ResearchMenu, HomeFooter, HomeHeader},
  data () {
    return {
      activeIndex: '/research'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/research'
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
