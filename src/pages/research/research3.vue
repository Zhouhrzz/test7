<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <research-three-content></research-three-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import HomeFooter from '../../components/HomeFooter'
import ResearchThreeContent from '../../components/research/ResearchThreeContent'
export default {
  name: 'research3',
  components: {ResearchThreeContent, HomeFooter, HomeHeader},
  data () {
    return {
      activeIndex: '/research/research3'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/research3'
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
